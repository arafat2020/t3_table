"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import { api } from "~/trpc/react";
import { type Sheet, type Row, type Cell, type Column } from "@prisma/client";

/**
 * Types for the grid data structure.
 * Represents a single cell in the spreadsheet grid.
 */
export type GridCell = {
    id?: string;
    value: string;
    rowId: string;
    colIndex: number;
    align?: 'left' | 'center' | 'right';
};

/**
 * Type representing the currently selected or editing cell coordinates.
 * null if no cell is selected.
 */
export type Selection = { r: number, c: number } | null;

/**
 * Properties for the useSpreadsheet hook.
 */
type UseSpreadsheetProps = {
    /** The unique identifier for the sheet */
    sheetId: string;
    /** The initial data including rows, cells, and column metadata */
    initialData: Sheet & { rows: (Row & { cells: Cell[] })[], Column: Column[] };
    /** User's role which determines edit permissions */
    role: "owner" | "editor" | "viewer";
};

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/**
 * Utility to convert a zero-based column index to an Excel-like label.
 * @example 0 -> A, 1 -> B, 26 -> AA
 */
export const getColumnLabel = (index: number): string => {
    let label = "";
    let i = index;
    while (i >= 0) {
        label = ALPHABET[i % 26] + label;
        i = Math.floor(i / 26) - 1;
    }
    return label;
};

/**
 * Calculates the initial number of rows to display based on window height.
 */
const calculateRowsFromHeight = (): number => {
    const ROW_HEIGHT = 24; // h-6 = 24px per row
    const HEADER_HEIGHT = 36; // header row height
    const TOOLBAR_HEIGHT = 44; // toolbar height (Fx bar)
    const BUFFER = 80; // buffer for margins and scrollbar

    const availableHeight = typeof window !== 'undefined'
        ? window.innerHeight - TOOLBAR_HEIGHT - HEADER_HEIGHT - BUFFER
        : 600; // fallback for SSR

    return Math.max(Math.floor(availableHeight / ROW_HEIGHT), 10); // minimum 10 rows
};

/**
 * Main hook for spreadsheet logic, managing state, selection, editing, and persistence.
 * 
 * @param props - Configuration and initial data
 * @returns State and handlers for the spreadsheet UI
 */
export function useSpreadsheet({ sheetId, initialData, role }: UseSpreadsheetProps) {
    const isReadOnly = role === "viewer";

    // --- Grid Dimensions State ---
    const [rowCount, setRowCount] = useState(() => {
        return Math.max(25, initialData.rows.length + 5);
    });
    const [colCount, setColCount] = useState(Math.max(10, initialData.Column.length + 5));

    // --- Cell Data State ---
    // Data map: string key "rowIndex,colIndex" -> Cell value
    const [data, setData] = useState<Record<string, GridCell>>({});

    // --- Selection & Editing State ---
    const [selectedCell, setSelectedCell] = useState<Selection>(null);
    const [editingCell, setEditingCell] = useState<Selection>(null);

    // --- Sizing State ---
    const [columnWidths, setColumnWidths] = useState<Record<number, number>>({});
    const [rowHeights, setRowHeights] = useState<Record<number, number>>({});

    // --- API & Persistence ---
    const utils = api.useUtils();
    const updateRowHeightMutation = api.sheet.updateRowHeight.useMutation();
    const updateColumnWidthMutation = api.sheet.updateColumnWidth.useMutation();

    /**
     * Mutation for updating cell content.
     * Optimistically cancels background fetches to avoid race conditions.
     */
    const updateCellMutation = api.sheet.updateCell.useMutation({
        onMutate: async () => {
            await utils.sheet.get.cancel();
        }
    });

    // --- Live Cell Update Subscription ---
    api.sheet.onCellUpdate.useSubscription(
        { sheetId },
        {
            onData(event) {
                setData((prev) => {
                    const key = `${event.rowIndex},${event.colIndex}`;
                    const existing = prev[key];
                    return {
                        ...prev,
                        [key]: {
                            ...existing,
                            value: event.value ?? existing?.value ?? "",
                            rowId: existing?.rowId ?? "remote",
                            colIndex: event.colIndex,
                            ...(event.align ? { align: event.align as 'left' | 'center' | 'right' } : {}),
                        },
                    };
                });
            },
        }
    );

    // --- Initial Data Loading ---
    useEffect(() => {
        const newData: Record<string, GridCell> = {};
        const newRowHeights: Record<number, number> = {};
        const newColWidths: Record<number, number> = {};

        initialData.rows.forEach(row => {
            if (row.height) newRowHeights[row.index] = row.height;
            row.cells.forEach(cell => {
                newData[`${row.index},${cell.colIndex}`] = {
                    id: cell.id,
                    value: cell.value || "",
                    rowId: row.id,
                    colIndex: cell.colIndex,
                    align: (cell.align as 'left' | 'center' | 'right') || 'left'
                };
            });
        });

        initialData.Column.forEach(col => {
            if (col.width) newColWidths[col.index] = col.width;
        });

        setData(newData);
        setRowHeights(newRowHeights);
        setColumnWidths(newColWidths);
    }, [initialData]);

    // --- Dynamic Sizing Effect ---
    useEffect(() => {
        const updateRowCount = () => {
            const calculatedRows = calculateRowsFromHeight();
            setRowCount(prev => Math.max(calculatedRows, initialData.rows.length + 5));
        };

        updateRowCount();
        window.addEventListener('resize', updateRowCount);
        return () => window.removeEventListener('resize', updateRowCount);
    }, [initialData.rows.length]);

    // --- Interaction Handlers ---

    /**
     * Handles single cell selection.
     */
    const handleCellClick = (r: number, c: number) => {
        setSelectedCell({ r, c });
        setEditingCell(null);
    };

    /**
     * Enters editing mode for a specific cell.
     */
    const handleDoubleClick = (r: number, c: number) => {
        if (isReadOnly) return;
        setSelectedCell({ r, c });
        setEditingCell({ r, c });
    };

    /**
     * Updates cell value locally and persists to the server.
     * Includes auto-expansion logic if near edges.
     */
    const handleCellChange = (r: number, c: number, value: string) => {
        if (isReadOnly) return;
        const key = `${r},${c}`;
        const existing = data[key];

        const newData = { ...data };
        newData[key] = {
            ...existing,
            value,
            rowId: existing?.rowId || "temp",
            colIndex: c
        };
        setData(newData);

        // Auto-expand grid if near edges
        if (r >= rowCount - 3) {
            setRowCount(prev => prev + 10);
        }
        if (c >= colCount - 3) {
            setColCount(prev => prev + 5);
        }

        updateCellMutation.mutate({
            sheetId: sheetId,
            rowIndex: r,
            colIndex: c,
            value: value
        });
    };

    // --- Keyboard Navigation ---
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (!selectedCell) return;

        const { r, c } = selectedCell;

        // Special handling if currently editing
        if (editingCell) {
            if (e.key === 'Escape') {
                e.preventDefault();
                setEditingCell(null);
            } else if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                setEditingCell(null);
                const newR = Math.min(r + 1, rowCount - 1);
                setSelectedCell({ r: newR, c });
                if (newR >= rowCount - 3) {
                    setRowCount(prev => prev + 10);
                }
            } else if (e.key === 'Tab') {
                e.preventDefault();
                setEditingCell(null);
                const newC = e.shiftKey ? Math.max(c - 1, 0) : Math.min(c + 1, colCount - 1);
                setSelectedCell({ r, c: newC });
                if (newC >= colCount - 3) {
                    setColCount(prev => prev + 5);
                }
            }
            return;
        }

        // Standard navigation
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedCell({ r: Math.max(r - 1, 0), c });
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            const newR = Math.min(r + 1, rowCount - 1);
            setSelectedCell({ r: newR, c });
            if (newR >= rowCount - 3) {
                setRowCount(prev => prev + 10);
            }
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            setSelectedCell({ r, c: Math.max(c - 1, 0) });
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            const newC = Math.min(c + 1, colCount - 1);
            setSelectedCell({ r, c: newC });
            if (newC >= colCount - 3) {
                setColCount(prev => prev + 5);
            }
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (!isReadOnly) setEditingCell({ r, c });
        } else if (e.key === 'Tab') {
            e.preventDefault();
            const newC = e.shiftKey ? Math.max(c - 1, 0) : Math.min(c + 1, colCount - 1);
            setSelectedCell({ r, c: newC });
            if (newC >= colCount - 3) {
                setColCount(prev => prev + 5);
            }
        } else if (e.key === 'Escape') {
            e.preventDefault();
            setSelectedCell(null);
        } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
            // Typing directly logic
            if (isReadOnly) return;
            setEditingCell({ r, c });
            const key = `${r},${c}`;
            const newData = { ...data };
            newData[key] = {
                ...newData[key],
                value: "",
                rowId: newData[key]?.rowId || "temp",
                colIndex: c
            };
            setData(newData);
        }
    }, [selectedCell, editingCell, rowCount, colCount, data]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    // --- Dimensions & Persistence Handlers ---

    const updateColumnWidth = useCallback((index: number, width: number) => {
        setColumnWidths(prev => ({ ...prev, [index]: Math.max(width, 40) }));
    }, []);

    const persistColumnWidth = useCallback((index: number, width: number) => {
        if (isReadOnly) return;
        updateColumnWidthMutation.mutate({ sheetId, colIndex: index, width: Math.max(width, 40) });
    }, [sheetId, updateColumnWidthMutation, isReadOnly]);

    const updateRowHeight = useCallback((index: number, height: number) => {
        setRowHeights(prev => ({ ...prev, [index]: Math.max(height, 20) }));
    }, []);

    const persistRowHeight = useCallback((index: number, height: number) => {
        if (isReadOnly) return;
        updateRowHeightMutation.mutate({ sheetId, rowIndex: index, height: Math.max(height, 20) });
    }, [sheetId, updateRowHeightMutation, isReadOnly]);

    /**
     * Updates the text alignment of the selected cell.
     */
    const handleAlignmentChange = (align: 'left' | 'center' | 'right') => {
        if (!selectedCell || isReadOnly) return;
        const { r, c } = selectedCell;
        const key = `${r},${c}`;
        const existing = data[key];

        const newData = { ...data };
        newData[key] = {
            ...existing,
            rowId: existing?.rowId || "temp",
            colIndex: c,
            value: existing?.value || "",
            align
        };
        setData(newData);

        updateCellMutation.mutate({
            sheetId: sheetId,
            rowIndex: r,
            colIndex: c,
            align: align
        });
    };

    return {
        rowCount,
        colCount,
        data,
        selectedCell,
        editingCell,
        columnWidths,
        rowHeights,
        setEditingCell,
        setSelectedCell,
        handleCellClick,
        handleDoubleClick,
        handleCellChange,
        updateColumnWidth,
        persistColumnWidth,
        updateRowHeight,
        persistRowHeight,
        handleAlignmentChange,
        isReadOnly
    };
}

