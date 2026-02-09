"use client";

import React from 'react';
import { ChartDialog } from "~/components/visualization/ChartDialog";
import { type GridCell, type Selection } from "../../hooks/useSpreadsheet";
import { AlignLeft, AlignCenter, AlignRight, BarChart3 } from "lucide-react";

type ToolbarProps = {
    selectedCell: Selection;
    data: Record<string, GridCell>;
    rowCount: number;
    colCount: number;
    onCellChange: (r: number, c: number, value: string) => void;
    onAlignmentChange: (align: 'left' | 'center' | 'right') => void;
};

export function Toolbar({
    selectedCell,
    data,
    rowCount,
    colCount,
    onCellChange,
    onAlignmentChange
}: ToolbarProps) {
    const activeCell = selectedCell ? data[`${selectedCell.r},${selectedCell.c}`] : null;
    const cellValue = activeCell?.value || "";
    const currentAlign = activeCell?.align || 'left';

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

            <div className="w-px h-6 bg-gray-300 mx-1"></div>

            <div className="flex border rounded overflow-hidden shadow-sm bg-white">
                <button
                    onClick={() => onAlignmentChange('left')}
                    className={`p-1.5 hover:bg-gray-50 ${currentAlign === 'left' ? 'bg-blue-50 text-blue-600' : 'text-gray-600'}`}
                    title="Align Left"
                    disabled={!selectedCell}
                >
                    <AlignLeft size={16} />
                </button>
                <button
                    onClick={() => onAlignmentChange('center')}
                    className={`p-1.5 border-x hover:bg-gray-50 ${currentAlign === 'center' ? 'bg-blue-50 text-blue-600' : 'text-gray-600'}`}
                    title="Align Center"
                    disabled={!selectedCell}
                >
                    <AlignCenter size={16} />
                </button>
                <button
                    onClick={() => onAlignmentChange('right')}
                    className={`p-1.5 hover:bg-gray-50 ${currentAlign === 'right' ? 'bg-blue-50 text-blue-600' : 'text-gray-600'}`}
                    title="Align Right"
                    disabled={!selectedCell}
                >
                    <AlignRight size={16} />
                </button>
            </div>

            <div className="w-px h-6 bg-gray-300 mx-1"></div>

            <ChartDialog
                data={data}
                rowCount={rowCount}
                colCount={colCount}
                trigger={
                    <button className="flex items-center gap-1 px-3 py-1 bg-white border rounded shadow-sm hover:bg-gray-50 text-gray-700 text-sm font-medium">
                        <BarChart3 size={16} />
                        Chart
                    </button>
                }
            />
        </div>
    );
}
