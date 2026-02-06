"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { api } from "~/trpc/react";
import { type Sheet, type Row, type Cell, type Column } from "@prisma/client";
import { ChartDialog } from "~/components/visualization/ChartDialog";

// Types for our grid data structure
type GridCell = {
    id?: string;
    value: string;
    rowId: string;
    colIndex: number;
};

type SpreadsheetProps = {
    sheetId: string;
    initialData: Sheet & { rows: (Row & { cells: Cell[] })[], Column: Column[] };
};

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Helper to get column name from index (0 -> A, 1 -> B, ..., 26 -> AA)
const getColumnLabel = (index: number): string => {
    let label = "";
    let i = index;
    while (i >= 0) {
        label = ALPHABET[i % 26] + label;
        i = Math.floor(i / 26) - 1;
    }
    return label;
};

// Calculate initial row count based on screen height
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

export function Spreadsheet({ sheetId, initialData }: SpreadsheetProps) {
    // We'll maintain a local state for the grid to ensure fast UI updates
    // and then sync to backend.

    // Initialize grid size - use a safe default to avoid hydration mismatch
    // Will be updated to screen height after mount
    const [rowCount, setRowCount] = useState(() => {
        return Math.max(25, initialData.rows.length + 5); // Safe default for SSR
    });
    const [colCount, setColCount] = useState(Math.max(10, initialData.Column.length + 5));

    // Data map: string key "rowIndex,colIndex" -> Cell value
    const [data, setData] = useState<Record<string, GridCell>>({});

    // State for selection, active cell
    const [selectedCell, setSelectedCell] = useState<{ r: number, c: number } | null>(null);
    const [editingCell, setEditingCell] = useState<{ r: number, c: number } | null>(null);

    const utils = api.useUtils();
    const updateCellMutation = api.sheet.updateCell.useMutation({
        onMutate: async (newCell) => {
            // Optimistic updating
            await utils.sheet.get.cancel();
            // We could update cache here but local state is already updated
        }
    });

    // Load initial data into map
    useEffect(() => {
        const newData: Record<string, GridCell> = {};
        initialData.rows.forEach(row => {
            row.cells.forEach(cell => {
                newData[`${row.index},${cell.colIndex}`] = {
                    id: cell.id,
                    value: cell.value || "",
                    rowId: row.id,
                    colIndex: cell.colIndex
                };
            });
        });
        setData(newData);
    }, [initialData]);

    // Update row count based on screen height after mount (client-side only)
    useEffect(() => {
        const updateRowCount = () => {
            const calculatedRows = calculateRowsFromHeight();
            setRowCount(prev => Math.max(calculatedRows, initialData.rows.length + 5));
        };

        // Initial calculation after mount
        updateRowCount();

        // Update on window resize
        window.addEventListener('resize', updateRowCount);
        return () => window.removeEventListener('resize', updateRowCount);
    }, [initialData.rows.length]);

    // Handle cell click
    const handleCellClick = (r: number, c: number) => {
        setSelectedCell({ r, c });
        setEditingCell(null); // Stop editing if we click elsewhere
    };

    // Handle double click to edit
    const handleDoubleClick = (r: number, c: number) => {
        setSelectedCell({ r, c });
        setEditingCell({ r, c });
    };

    // Handle cell value change
    const handleCellChange = (r: number, c: number, value: string) => {
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

        // Debounce or immediate save? For now immediate.
        updateCellMutation.mutate({
            sheetId: sheetId,
            rowIndex: r,
            colIndex: c,
            value: value
        });
    };

    // Keyboard navigation handler
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (!selectedCell) return;

        const { r, c } = selectedCell;

        // If editing, only handle Escape and Enter
        if (editingCell) {
            if (e.key === 'Escape') {
                e.preventDefault();
                setEditingCell(null);
            } else if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                setEditingCell(null);
                // Move down
                const newR = Math.min(r + 1, rowCount - 1);
                setSelectedCell({ r: newR, c });
                if (newR >= rowCount - 3) {
                    setRowCount(prev => prev + 10);
                }
            } else if (e.key === 'Tab') {
                e.preventDefault();
                setEditingCell(null);
                // Move right (or left if Shift)
                const newC = e.shiftKey ? Math.max(c - 1, 0) : Math.min(c + 1, colCount - 1);
                setSelectedCell({ r, c: newC });
                if (newC >= colCount - 3) {
                    setColCount(prev => prev + 5);
                }
            }
            return;
        }

        // Arrow key navigation
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
            setEditingCell({ r, c });
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
            // Any printable character - start editing
            setEditingCell({ r, c });
            // Clear the cell and let the character be typed
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

    // Attach keyboard listener
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    // Render Grid
    // Using simple table for MVP
    // Ideally use canvas or virtualized list for performance
    return (
        <div className="flex flex-col h-full w-full overflow-hidden text-sm">
            {/* Toolbar Placeholder */}
            <div className="bg-gray-100 border-b p-2 flex gap-2 items-center">
                <div className="font-bold text-gray-500">Fx</div>
                <input
                    className="flex-1 border px-2 py-1 rounded-sm"
                    value={selectedCell ? (data[`${selectedCell.r},${selectedCell.c}`]?.value || "") : ""}
                    onChange={(e) => {
                        if (selectedCell) {
                            handleCellChange(selectedCell.r, selectedCell.c, e.target.value);
                        }
                    }}
                    disabled={!selectedCell}
                />
                <div className="w-px h-6 bg-gray-300 mx-2"></div>
                <ChartDialog
                    data={data}
                    rowCount={rowCount}
                    colCount={colCount}
                    trigger={
                        <button className="flex items-center gap-1 px-3 py-1 bg-white border rounded shadow-sm hover:bg-gray-50 text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-3"><path d="M3 3v18h18" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" /></svg>
                            Chart
                        </button>
                    }
                />
            </div>

            <div className="flex-1 overflow-auto relative">
                <table className="border-collapse w-full relative">
                    <thead>
                        <tr>
                            <th className="bg-gray-100 border w-10 sticky top-0 left-0 z-20"></th>
                            {Array.from({ length: colCount }).map((_, i) => (
                                <th key={i} className="bg-gray-100 border min-w-[80px] px-1 font-normal text-gray-600 sticky top-0 z-10 selection-none">
                                    {getColumnLabel(i)}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: rowCount }).map((_, r) => (
                            <tr key={r}>
                                <td className="bg-gray-100 border text-center text-gray-500 font-mono text-xs sticky left-0 z-10">
                                    {r + 1}
                                </td>
                                {Array.from({ length: colCount }).map((_, c) => {
                                    const cellKey = `${r},${c}`;
                                    const cell = data[cellKey];
                                    const isSelected = selectedCell?.r === r && selectedCell?.c === c;
                                    const isEditing = editingCell?.r === r && editingCell?.c === c;

                                    return (
                                        <td
                                            key={c}
                                            className={`border min-w-[80px] h-6 outline-none relative ${isSelected ? 'border-blue-500 border-2 z-10' : 'border-gray-200'}`}
                                            onClick={() => handleCellClick(r, c)}
                                            onDoubleClick={() => handleDoubleClick(r, c)}
                                        >
                                            {isEditing ? (
                                                <input
                                                    className="w-full h-full absolute top-0 left-0 px-1 border-none outline-none z-20"
                                                    autoFocus
                                                    value={cell?.value || ""}
                                                    onChange={(e) => handleCellChange(r, c, e.target.value)}
                                                    onBlur={() => setEditingCell(null)}
                                                    onKeyDown={(e) => {
                                                        if (e.key === 'Enter') {
                                                            setEditingCell(null);
                                                            setSelectedCell({ r: r + 1, c }); // Move down
                                                        }
                                                    }}
                                                />
                                            ) : (
                                                <div className="px-1 w-full h-full truncate pointer-events-none">
                                                    {cell?.value}
                                                </div>
                                            )}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
