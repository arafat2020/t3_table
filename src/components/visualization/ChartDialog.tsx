"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import {
    BarChart,
    Bar,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell as RechartsCell
} from "recharts";

type GridCell = {
    id?: string;
    value: string;
    rowId: string;
    colIndex: number;
};

type ChartDialogProps = {
    data: Record<string, GridCell>;
    rowCount: number;
    colCount: number;
    trigger?: React.ReactNode;
};

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const getColumnLabel = (index: number): string => {
    let label = "";
    let i = index;
    while (i >= 0) {
        label = ALPHABET[i % 26] + label;
        i = Math.floor(i / 26) - 1;
    }
    return label;
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

export function ChartDialog({ data, rowCount, colCount, trigger }: ChartDialogProps) {
    const [open, setOpen] = useState(false);
    const [chartType, setChartType] = useState<"bar" | "line" | "pie">("bar");
    const [xAxisCol, setXAxisCol] = useState<string>("0"); // Store as string index
    const [yAxisCol, setYAxisCol] = useState<string>("1"); // Store as string index

    // Prepare options for columns based on current grid size
    const columnOptions = useMemo(() => {
        return Array.from({ length: colCount }).map((_, i) => ({
            value: i.toString(),
            label: `Column ${getColumnLabel(i)}`
        }));
    }, [colCount]);

    // Transform data for Recharts
    const chartData = useMemo(() => {
        const preparedData = [];
        const xIndex = parseInt(xAxisCol);
        const yIndex = parseInt(yAxisCol);

        for (let r = 0; r < rowCount; r++) {
            const xKey = `${r},${xIndex}`;
            const yKey = `${r},${yIndex}`;

            const xCell = data[xKey];
            const yCell = data[yKey];

            // Only include rows where we have at least one value
            if ((xCell?.value !== undefined && xCell.value !== "") || (yCell?.value !== undefined && yCell.value !== "")) {
                const yValue = parseFloat(yCell?.value || "0");

                preparedData.push({
                    name: xCell?.value || `Row ${r + 1}`,
                    value: isNaN(yValue) ? 0 : yValue,
                    originalValue: yCell?.value // Keep original for tooltip if not number
                });
            }
        }
        return preparedData;
    }, [data, rowCount, xAxisCol, yAxisCol]);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {trigger || <Button variant="outline" size="sm">Chart</Button>}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] w-[90vw] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Create Chart</DialogTitle>
                </DialogHeader>

                <div className="grid gap-6 py-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <Label>Chart Type</Label>
                            <select
                                className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                value={chartType}
                                onChange={(e) => setChartType(e.target.value as any)}
                            >
                                <option value="bar">Bar Chart</option>
                                <option value="line">Line Chart</option>
                                <option value="pie">Pie Chart</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <Label>X-Axis (Category)</Label>
                            <select
                                className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                value={xAxisCol}
                                onChange={(e) => setXAxisCol(e.target.value)}
                            >
                                {columnOptions.map(opt => (
                                    <option key={`x-${opt.value}`} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="space-y-2">
                            <Label>Y-Axis (Value)</Label>
                            <select
                                className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                value={yAxisCol}
                                onChange={(e) => setYAxisCol(e.target.value)}
                            >
                                {columnOptions.map(opt => (
                                    <option key={`y-${opt.value}`} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="border rounded-lg p-4 bg-white h-[400px] w-full flex items-center justify-center">
                        {chartData.length === 0 ? (
                            <div className="text-gray-400">No data found in selected columns</div>
                        ) : (
                            <ResponsiveContainer width="100%" height="100%">
                                {chartType === 'bar' ? (
                                    <BarChart data={chartData}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="value" fill="#8884d8" name="Value" />
                                    </BarChart>
                                ) : chartType === 'line' ? (
                                    <LineChart data={chartData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="value" stroke="#8884d8" name="Value" strokeWidth={2} />
                                    </LineChart>
                                ) : (
                                    <PieChart>
                                        <Pie
                                            data={chartData}
                                            cx="50%"
                                            cy="50%"
                                            labelLine={false}
                                            label={({ name, percent }: { name?: string, percent?: number }) => `${name || ''} ${((percent || 0) * 100).toFixed(0)}%`}
                                            outerRadius={150}
                                            fill="#8884d8"
                                            dataKey="value"
                                        >
                                            {chartData.map((entry, index) => (
                                                <RechartsCell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                )}
                            </ResponsiveContainer>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
