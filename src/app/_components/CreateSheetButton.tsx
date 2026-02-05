"use client";

import React from 'react';
import { api } from "~/trpc/react";
import { useRouter } from 'next/navigation';

export function CreateSheetButton({ projectId }: { projectId: string }) {
    const router = useRouter();
    const utils = api.useUtils();

    const createSheet = api.sheet.create.useMutation({
        onSuccess: async (newSheet) => {
            await utils.project.getAll.invalidate();
            router.refresh(); // Refresh server components (sidebar)
            router.push(`/sheet/${newSheet.id}`);
        }
    });

    const handleCreate = () => {
        createSheet.mutate({
            name: "New Spreadsheet", // Could prompt for name, but keeping it simple
            projectId: projectId
        });
    };

    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                handleCreate();
            }}
            disabled={createSheet.isPending}
            className="text-gray-400 hover:text-blue-600 focus:outline-none"
            title="Create New Sheet"
        >
            {createSheet.isPending ? (
                <span className="animate-spin block">↻</span>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
            )}
        </button>
    );
}
