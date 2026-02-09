"use client";

import React from 'react';
import { getColumnLabel } from "../../hooks/useSpreadsheet";

type HeaderCellProps = {
    type: 'row' | 'col';
    label?: string;
    index?: number;
};

export function HeaderCell({ type, label, index }: HeaderCellProps) {
    if (type === 'row') {
        return (
            <td className="bg-gray-100 border text-center text-gray-500 font-mono text-xs sticky left-0 z-10">
                {(index ?? 0) + 1}
            </td>
        );
    }

    return (
        <th className="bg-gray-100 border min-w-[80px] px-1 font-normal text-gray-600 sticky top-0 z-10 select-none text-sm">
            {label ?? (index !== undefined ? getColumnLabel(index) : "")}
        </th>
    );
}
