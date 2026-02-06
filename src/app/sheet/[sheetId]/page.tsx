"use client";

import { api } from "~/trpc/react";
import { Spreadsheet } from "~/components/spreadsheet/Spreadsheet";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import type { Sheet, Row, Cell, Column } from "@prisma/client";

export default function SheetPage() {
    const params = useParams();
    const sheetId = params.sheetId as string;

    const { data: sheet, isLoading } = api.sheet.get.useQuery({
        where: { id: sheetId }
    });

    const [sheetName, setSheetName] = useState("");
    const updateSheetMutation = api.sheet.update.useMutation();
    const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

    // Update local name when sheet data loads
    useEffect(() => {
        if (sheet?.name) {
            setSheetName(sheet.name);
        }
    }, [sheet?.name]);

    const handleNameChange = (newName: string) => {
        setSheetName(newName);

        // Debounce the update
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            updateSheetMutation.mutate({
                id: sheetId,
                name: newName
            });
        }, 500); // Wait 500ms after user stops typing
    };

    if (isLoading) {
        return <div className="h-screen w-screen flex items-center justify-center">Loading...</div>;
    }

    if (!sheet) {
        return <div>Sheet not found</div>
    }

    return (
        <div className="h-screen w-screen flex flex-col bg-white">
            <div className="h-12 border-b flex items-center px-4 justify-between">
                <div className="flex items-center gap-4">
                    <Link
                        href="/dashboard"
                        className="text-gray-600 hover:text-gray-900 flex items-center gap-1 text-sm font-medium"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                        Dashboard
                    </Link>
                    <div className="flex items-center gap-2">
                        <span className="text-green-600 font-bold text-xl">SheetsClone</span>
                        <span className="text-gray-300">|</span>
                        <input
                            className="font-medium text-lg outline-none hover:border hover:border-gray-300 px-2 rounded"
                            value={sheetName}
                            onChange={(e) => handleNameChange(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex gap-2">
                    {/* Menu Actions */}
                    <button className="bg-blue-500 text-white px-4 py-1 rounded text-sm font-medium">Share</button>
                </div>
            </div>
            <div className="flex-1 overflow-hidden">

                <Spreadsheet sheetId={sheetId} initialData={sheet as Sheet & { rows: (Row & { cells: Cell[] })[], Column: Column[] }} />
            </div>
        </div>
    );
}
