"use client";

import React from 'react';
import { getColumnLabel } from "../../hooks/useSpreadsheet";

type HeaderCellProps = {
    type: 'row' | 'col';
    label?: string;
    index?: number;
    width?: number;
    height?: number;
    onResizeStart?: (e: React.MouseEvent, index: number, type: 'row' | 'col') => void;
    isReadOnly?: boolean;
};

export function HeaderCell({ type, label, index, width, height, onResizeStart, isReadOnly }: HeaderCellProps) {
    if (type === 'row') {
        return (
            <td
                className="bg-gray-100 border text-center text-gray-500 font-mono text-xs sticky left-0 z-10 select-none relative"
                style={{ height }}
            >
                {(index ?? 0) + 1}
                {!isReadOnly && (
                    <div
                        className="absolute bottom-0 left-0 right-0 h-1 cursor-row-resize hover:bg-blue-400 z-20"
                        onMouseDown={(e) => index !== undefined && onResizeStart?.(e, index, 'row')}
                    />
                )}
            </td>
        );
    }

    return (
        <th
            className="bg-gray-100 border min-w-[40px] px-1 font-normal text-gray-600 sticky top-0 z-10 select-none text-sm relative"
            style={{ width }}
        >
            {label ?? (index !== undefined ? getColumnLabel(index) : "")}
            {!isReadOnly && (
                <div
                    className="absolute top-0 bottom-0 right-0 w-1 cursor-col-resize hover:bg-blue-400 z-20"
                    onMouseDown={(e) => index !== undefined && onResizeStart?.(e, index, 'col')}
                />
            )}
        </th>
    );
}
