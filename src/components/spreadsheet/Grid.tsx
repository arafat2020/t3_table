"use client";

import React from 'react';
import { HeaderCell } from "./HeaderCell";
import { Cell } from "./Cell";
import { type GridCell, type Selection } from "../../hooks/useSpreadsheet";

type GridProps = {
    rowCount: number;
    colCount: number;
    data: Record<string, GridCell>;
    selectedCell: Selection;
    editingCell: Selection;
    onCellClick: (r: number, c: number) => void;
    onDoubleClick: (r: number, c: number) => void;
    onCellChange: (r: number, c: number, value: string) => void;
    setEditingCell: (selection: Selection) => void;
    setSelectedCell: (selection: Selection) => void;
    columnWidths: Record<number, number>;
    rowHeights: Record<number, number>;
    updateColumnWidth: (index: number, width: number) => void;
    updateRowHeight: (index: number, height: number) => void;
    persistColumnWidth: (index: number, width: number) => void;
    persistRowHeight: (index: number, height: number) => void;
};

export function Grid({
    rowCount,
    colCount,
    data,
    selectedCell,
    editingCell,
    onCellClick,
    onDoubleClick,
    onCellChange,
    setEditingCell,
    setSelectedCell,
    columnWidths,
    rowHeights,
    updateColumnWidth,
    updateRowHeight,
    persistColumnWidth,
    persistRowHeight
}: GridProps) {
    const [resizing, setResizing] = React.useState<{ type: 'row' | 'col'; index: number; startPos: number; startSize: number } | null>(null);

    const handleResizeStart = (e: React.MouseEvent, index: number, type: 'row' | 'col') => {
        e.preventDefault();
        const startPos = type === 'col' ? e.pageX : e.pageY;
        const startSize = type === 'col'
            ? (columnWidths[index] ?? 100)
            : (rowHeights[index] ?? 24);

        setResizing({ type, index, startPos, startSize });
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!resizing) return;

        if (resizing.type === 'col') {
            const currentPos = e.pageX;
            const newWidth = resizing.startSize + (currentPos - resizing.startPos);
            updateColumnWidth(resizing.index, newWidth);
        } else {
            const currentPos = e.pageY;
            const newHeight = resizing.startSize + (currentPos - resizing.startPos);
            updateRowHeight(resizing.index, newHeight);
        }
    };

    const handleMouseUp = () => {
        if (resizing) {
            if (resizing.type === 'col') {
                persistColumnWidth(resizing.index, columnWidths[resizing.index] ?? 100);
            } else {
                persistRowHeight(resizing.index, rowHeights[resizing.index] ?? 24);
            }
        }
        setResizing(null);
    };

    return (
        <div
            className="flex-1 overflow-auto relative"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <table className="border-collapse w-full relative table-fixed">
                <thead>
                    <tr>
                        <th className="bg-gray-100 border w-10 sticky top-0 left-0 z-20"></th>
                        {Array.from({ length: colCount }).map((_, i) => (
                            <HeaderCell
                                key={i}
                                type="col"
                                index={i}
                                width={columnWidths[i] ?? 100}
                                onResizeStart={handleResizeStart}
                            />
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: rowCount }).map((_, r) => (
                        <tr key={r}>
                            <HeaderCell
                                type="row"
                                index={r}
                                height={rowHeights[r] ?? 24}
                                onResizeStart={handleResizeStart}
                            />
                            {Array.from({ length: colCount }).map((_, c) => {
                                const cellKey = `${r},${c}`;
                                const cell = data[cellKey];
                                const isSelected = selectedCell?.r === r && selectedCell?.c === c;
                                const isEditing = editingCell?.r === r && editingCell?.c === c;

                                return (
                                    <Cell
                                        key={c}
                                        r={r}
                                        c={c}
                                        cell={cell}
                                        isSelected={isSelected}
                                        isEditing={isEditing}
                                        width={columnWidths[c] ?? 100}
                                        height={rowHeights[r] ?? 24}
                                        onCellClick={onCellClick}
                                        onDoubleClick={onDoubleClick}
                                        onCellChange={onCellChange}
                                        setEditingCell={setEditingCell}
                                        setSelectedCell={setSelectedCell}
                                    />
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
