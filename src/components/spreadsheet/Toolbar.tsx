"use client";

import React from 'react';
import { ChartDialog } from "~/components/visualization/ChartDialog";
import { type GridCell, type Selection } from "../../hooks/useSpreadsheet";

type ToolbarProps = {
    selectedCell: Selection;
    data: Record<string, GridCell>;
    rowCount: number;
    colCount: number;
    onCellChange: (r: number, c: number, value: string) => void;
};

export function Toolbar({ selectedCell, data, rowCount, colCount, onCellChange }: ToolbarProps) {
    const cellValue = selectedCell
        ? (data[`${selectedCell.r},${selectedCell.c}`]?.value || "")
        : "";

    return (
        <div className="bg-gray-100 border-b p-2 flex gap-2 items-center">
            <div className="font-bold text-gray-500">Fx</div>
            <input
                className="flex-1 border px-2 py-1 rounded-sm text-sm"
                value={cellValue}
                onChange={(e) => {
                    if (selectedCell) {
                        onCellChange(selectedCell.r, selectedCell.c, e.target.value);
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
                    <button className="flex items-center gap-1 px-3 py-1 bg-white border rounded shadow-sm hover:bg-gray-50 text-gray-700 text-sm font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-3"><path d="M3 3v18h18" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" /></svg>
                        Chart
                    </button>
                }
            />
        </div>
    );
}
