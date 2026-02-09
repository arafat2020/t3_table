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
    setSelectedCell
}: GridProps) {
    return (
        <div className="flex-1 overflow-auto relative">
            <table className="border-collapse w-full relative">
                <thead>
                    <tr>
                        <th className="bg-gray-100 border w-10 sticky top-0 left-0 z-20"></th>
                        {Array.from({ length: colCount }).map((_, i) => (
                            <HeaderCell key={i} type="col" index={i} />
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: rowCount }).map((_, r) => (
                        <tr key={r}>
                            <HeaderCell type="row" index={r} />
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
