import React from 'react';
import Link from 'next/link';
import { api, HydrateClient } from "~/trpc/server";
import { CreateSheetButton } from '~/app/_components/CreateSheetButton';

export default async function Sidebar() {
  const projects = await api.project.getAll();

  return (
    <HydrateClient>
      <div className="p-4 flex flex-col gap-6">
        <div className="pt-2 pb-4 border-b">
          <h1 className="font-bold text-xl text-gray-800">Workspaces</h1>
        </div>

        {projects.map((project) => (
          <div key={project.id} className="flex flex-col gap-2">


            <div className="flex items-center justify-between group">
              <h2 className="font-semibold text-gray-700 text-sm uppercase tracking-wider">{project.name}</h2>
              <CreateSheetButton projectId={project.id} />
            </div>

            <div className="flex flex-col pl-2 gap-1">
              {project.sheets.map((sheet) => (
                <Link
                  key={sheet.id}
                  href={`/sheet/${sheet.id}`}
                  className="text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-100 px-2 py-1 rounded transition-colors flex items-center gap-2"
                >
                  <span className="w-4 h-4 rounded-sm bg-green-100 border border-green-300 flex items-center justify-center text-[10px] text-green-700">S</span>
                  <span className="truncate">{sheet.name}</span>
                </Link>
              ))}
              {project.sheets.length === 0 && (
                <span className="text-xs text-gray-400 italic pl-2">No sheets</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </HydrateClient>
  );
}