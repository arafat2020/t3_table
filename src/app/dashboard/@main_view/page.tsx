"use client";

import React from "react";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";
import { CreateProjectDialog } from "~/app/_components/CreateProjectDialog";
import { ConfirmDeleteDialog } from "~/app/_components/ConfirmDeleteDialog";

export default function MainView() {
  const router = useRouter();
  const utils = api.useUtils();
  const { data: projects = [], isLoading } = api.project.getAll.useQuery();

  const deleteProjectMutation = api.project.delete.useMutation({
    onSuccess: async () => {
      await utils.project.getAll.invalidate();
    }
  });

  if (isLoading) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-auto mb-4 text-gray-400"
          >
            <path d="M3 3v18h18" />
            <path d="M18 17V9" />
            <path d="M13 17V5" />
            <path d="M8 17v-3" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome to T3 Table</h2>
          <p className="text-gray-600 mb-6">
            Create your first project workspace to start building spreadsheets.
          </p>
          <CreateProjectDialog onSuccess={() => router.refresh()} />
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full p-6 overflow-y-auto">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Project Dashboard</h1>
        <CreateProjectDialog onSuccess={() => router.refresh()} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow group relative"
          >
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <ConfirmDeleteDialog
                trigger={
                  <button className="p-1 hover:bg-red-100 rounded transition text-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    </svg>
                  </button>
                }
                title="Delete Project"
                description={`Are you sure you want to delete "${project.name}"? This will also delete all sheets in this project. This action cannot be undone.`}
                onConfirm={() => deleteProjectMutation.mutate({ id: project.id })}
                isLoading={deleteProjectMutation.isPending}
              />
            </div>

            <div className="flex items-start justify-between mb-4 pr-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {project.sheets.length} {project.sheets.length === 1 ? 'sheet' : 'sheets'}
                </p>
              </div>
              <div className="p-2 bg-blue-50 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <path d="M3 3v18h18" />
                  <path d="M18 17V9" />
                  <path d="M13 17V5" />
                  <path d="M8 17v-3" />
                </svg>
              </div>
            </div>

            <div className="space-y-2">
              {project.sheets.slice(0, 3).map((sheet) => (
                <div
                  key={sheet.id}
                  onClick={() => router.push(`/sheet/${sheet.id}`)}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 px-2 py-1.5 rounded cursor-pointer transition-colors"
                >
                  <span className="w-4 h-4 rounded-sm bg-green-100 border border-green-300 flex items-center justify-center text-[10px] text-green-700">
                    S
                  </span>
                  <span className="truncate">{sheet.name}</span>
                </div>
              ))}

              {project.sheets.length === 0 && (
                <p className="text-sm text-gray-400 italic px-2">No sheets yet</p>
              )}

              {project.sheets.length > 3 && (
                <p className="text-xs text-gray-400 px-2 pt-1">
                  +{project.sheets.length - 3} more
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
