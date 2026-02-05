"use client";

import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";
import { Button } from "~/components/ui/button";
import { type Sheet } from "@prisma/client";

export function SheetList({ projectId, initialSheets }: { projectId: string; initialSheets: Sheet[] }) {
    const router = useRouter();
    const utils = api.useUtils();

    const createSheet = api.sheet.create.useMutation({
        onSuccess: async (newSheet) => {
            await utils.project.findFirst.invalidate();
            router.push(`/sheet/${newSheet.id}`);
        },
    });

    const handleCreate = () => {
        createSheet.mutate({
            name: "Untitled Spreadsheet",
            projectId: projectId,
        });
    }

    // Note: ownerId in Schema is String. 
    // In `createProject.service.ts`, userId is taken from session.
    // Here, we should arguably take it from session too on server side.
    // But for now let's see how to pass it. 
    // Maybe I should update `sheet.service.ts` to inject currentUser id?
    // Since `protectedProcedure` gives us `ctx.session.user.id`.

    return (
        <div className="flex flex-col gap-4 p-4">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Sheets</h2>
                <Button onClick={handleCreate} disabled={createSheet.isPending}>
                    {createSheet.isPending ? "Creating..." : "New Spreadsheet"}
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {initialSheets.map((sheet) => (
                    <div
                        key={sheet.id}
                        className="p-4 border rounded-lg hover:shadow-md cursor-pointer bg-white transition-all"
                        onClick={() => router.push(`/sheet/${sheet.id}`)}
                    >
                        <h3 className="font-semibold">{sheet.name}</h3>
                        <p className="text-sm text-gray-500">Updated: {new Date(sheet.updatedAt).toLocaleDateString()}</p>
                    </div>
                ))}
                {initialSheets.length === 0 && (
                    <div className="col-span-3 text-center text-gray-400 py-10">
                        No spreadsheets yet. Create one to get started.
                    </div>
                )}
            </div>
        </div>
    );
}
