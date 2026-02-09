"use client";

import React from 'react';
import { type Sheet, type Row, type Cell, type Column } from "@prisma/client";
import { useSpreadsheet } from "../../hooks/useSpreadsheet";
import { Toolbar } from "./Toolbar";
import { Grid } from "./Grid";

type SpreadsheetProps = {
    sheetId: string;
    initialData: Sheet & { rows: (Row & { cells: Cell[] })[], Column: Column[] };
};

export function Spreadsheet({ sheetId, initialData }: SpreadsheetProps) {
    const {
        rowCount,
        colCount,
        data,
        selectedCell,
        editingCell,
        handleCellClick,
        handleDoubleClick,
        handleCellChange,
        setEditingCell,
        setSelectedCell,
        columnWidths,
        rowHeights,
        updateColumnWidth,
        persistColumnWidth,
        updateRowHeight,
        persistRowHeight,
        handleAlignmentChange
    } = useSpreadsheet({ sheetId, initialData });

    return (
        <div className="flex flex-col h-full w-full overflow-hidden text-sm">
            <Toolbar
                selectedCell={selectedCell}
                data={data}
                rowCount={rowCount}
                colCount={colCount}
                onCellChange={handleCellChange}
                onAlignmentChange={handleAlignmentChange}
            />

            <Grid
                rowCount={rowCount}
                colCount={colCount}
                data={data}
                selectedCell={selectedCell}
                editingCell={editingCell}
                onCellClick={handleCellClick}
                onDoubleClick={handleDoubleClick}
                onCellChange={handleCellChange}
                setEditingCell={setEditingCell}
                setSelectedCell={setSelectedCell}
                columnWidths={columnWidths}
                rowHeights={rowHeights}
                updateColumnWidth={updateColumnWidth}
                updateRowHeight={updateRowHeight}
                persistColumnWidth={persistColumnWidth}
                persistRowHeight={persistRowHeight}
            />
        </div>
    );
}
