import { HydrateClient, api } from "~/trpc/server";
import { Spreadsheet } from "~/components/spreadsheet/Spreadsheet";
import Link from "next/link";

export default async function SheetPage({ params }: { params: { sheetId: string } }) {
    const { sheetId } = await params;

    const sheet = await api.sheet.get({
        where: { id: sheetId }
    });

    if (!sheet) {
        return <div>Sheet not found</div>
    }

    // Transform data if needed or pass directly
    // The sheet query includes `rows` and `rows.cells`

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
                        <input className="font-medium text-lg outline-none hover:border hover:border-gray-300 px-2 rounded" defaultValue={sheet.name} />
                    </div>
                </div>
                <div className="flex gap-2">
                    {/* Menu Actions */}
                    <button className="bg-blue-500 text-white px-4 py-1 rounded text-sm font-medium">Share</button>
                </div>
            </div>
            <div className="flex-1 overflow-hidden">

                <Spreadsheet sheetId={sheetId} initialData={sheet} />
            </div>
        </div>
    );
}
