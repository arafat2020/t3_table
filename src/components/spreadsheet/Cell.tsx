"use client";

import React from 'react';
import { type GridCell, type Selection } from "../../hooks/useSpreadsheet";

type CellProps = {
    r: number;
    c: number;
    cell?: GridCell;
    isSelected: boolean;
    isEditing: boolean;
    onCellClick: (r: number, c: number) => void;
    onDoubleClick: (r: number, c: number) => void;
    onCellChange: (r: number, c: number, value: string) => void;
    setEditingCell: (selection: Selection) => void;
    setSelectedCell: (selection: Selection) => void;
};

export function Cell({
    r,
    c,
    cell,
    isSelected,
    isEditing,
    onCellClick,
    onDoubleClick,
    onCellChange,
    setEditingCell,
    setSelectedCell
}: CellProps) {
    return (
        <td
            className={`border min-w-[80px] h-6 outline-none relative ${isSelected ? 'border-blue-500 border-2 z-10' : 'border-gray-200'}`}
            onClick={() => onCellClick(r, c)}
            onDoubleClick={() => onDoubleClick(r, c)}
        >
            {isEditing ? (
                <input
                    className="w-full h-full absolute top-0 left-0 px-1 border-none outline-none z-20"
                    autoFocus
                    value={cell?.value || ""}
                    onChange={(e) => onCellChange(r, c, e.target.value)}
                    onBlur={() => setEditingCell(null)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            setEditingCell(null);
                            setSelectedCell({ r: r + 1, c }); // Move down
                        }
                    }}
                />
            ) : (
                <div className="px-1 w-full h-full truncate pointer-events-none text-sm">
                    {cell?.value}
                </div>
            )}
        </td>
    );
}
