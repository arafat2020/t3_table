"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { api } from "~/trpc/react";
import { CreateSheetButton } from '~/app/_components/CreateSheetButton';
import { CreateProjectDialog } from '~/app/_components/CreateProjectDialog';
import { ConfirmDeleteDialog } from '~/app/_components/ConfirmDeleteDialog';
import { useRouter, usePathname } from 'next/navigation';
import { Skeleton } from "~/components/ui/skeleton";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { data: projects = [], isLoading } = api.project.getAll.useQuery();
  const utils = api.useUtils();

  // Track which projects are expanded (all expanded by default)
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(
    new Set(projects.map(p => p.id))
  );

  const deleteSheetMutation = api.sheet.delete.useMutation({
    onSuccess: async () => {
      await utils.project.getAll.invalidate();
      if (pathname.startsWith('/sheet/')) {
        router.push('/dashboard');
      }
    }
  });

  const deleteProjectMutation = api.project.delete.useMutation({
    onSuccess: async () => {
      await utils.project.getAll.invalidate();
      router.push('/dashboard');
    }
  });

  const toggleProject = (projectId: string) => {
    setExpandedProjects(prev => {
      const next = new Set(prev);
      if (next.has(projectId)) {
        next.delete(projectId);
      } else {
        next.add(projectId);
      }
      return next;
    });
  };

  if (isLoading) {
    return (
      <div className="p-4 flex flex-col gap-4 h-full">
        <div className="flex items-center justify-between border-b pb-4">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-8 w-8 rounded" />
        </div>
        <div className="flex flex-col gap-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="flex items-center justify-between">
                <Skeleton className="h-5 w-full" />
              </div>
              <div className="pl-6 space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 flex flex-col gap-4 h-full">
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="font-bold text-xl text-gray-800">Workspaces</h1>
        <CreateProjectDialog
          trigger={
            <button className="p-1.5 hover:bg-gray-200 rounded transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </button>
          }
          onSuccess={() => router.refresh()}
        />
      </div>

      {projects.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <p className="text-sm text-gray-500 mb-4">No projects yet</p>
          <CreateProjectDialog onSuccess={() => router.refresh()} />
        </div>
      ) : (
        <div className="flex flex-col gap-4 overflow-y-auto">
          {projects.map((project) => {
            const isExpanded = expandedProjects.has(project.id);

            return (
              <div key={project.id} className="flex flex-col gap-2">
                <div className="flex items-center justify-between group">
                  <button
                    onClick={() => toggleProject(project.id)}
                    className="flex items-center gap-2 flex-1 hover:bg-gray-100 rounded px-2 py-1 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                    <h2 className="font-semibold text-gray-700 text-sm uppercase tracking-wider">
                      {project.name}
                    </h2>
                  </button>
                  <div className="flex items-center gap-1">
                    <CreateSheetButton projectId={project.id} />
                    <ConfirmDeleteDialog
                      trigger={
                        <button
                          className="p-1 hover:bg-red-100 rounded transition opacity-0 group-hover:opacity-100"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
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
                </div>

                {isExpanded && (
                  <div className="flex flex-col pl-6 gap-1">
                    {project.sheets.map((sheet) => (
                      <div key={sheet.id} className="flex items-center justify-between group/sheet hover:bg-gray-100 rounded transition-colors">
                        <Link
                          href={`/sheet/${sheet.id}`}
                          className="flex-1 text-sm text-gray-600 hover:text-blue-600 px-2 py-1 flex items-center gap-2"
                        >
                          <span className="w-4 h-4 rounded-sm bg-green-100 border border-green-300 flex items-center justify-center text-[10px] text-green-700">
                            S
                          </span>
                          <span className="truncate">{sheet.name}</span>
                        </Link>
                        <ConfirmDeleteDialog
                          trigger={
                            <button
                              className="p-1 hover:bg-red-100 rounded transition opacity-0 group-hover/sheet:opacity-100 mr-2"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
                                <path d="M3 6h18" />
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                              </svg>
                            </button>
                          }
                          title="Delete Sheet"
                          description={`Are you sure you want to delete "${sheet.name}"? This action cannot be undone.`}
                          onConfirm={() => deleteSheetMutation.mutate({ id: sheet.id })}
                          isLoading={deleteSheetMutation.isPending}
                        />
                      </div>
                    ))}
                    {project.sheets.length === 0 && (
                      <span className="text-xs text-gray-400 italic pl-2">No sheets</span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}