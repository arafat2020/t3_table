"use client";
import React, { useState } from 'react';
import { api } from "~/trpc/react";
import { useRouter } from 'next/navigation';
import { Button } from "~/components/ui/button";

function CreateFirstProject() {
  const [name, setName] = useState("");
  const router = useRouter();
  const utils = api.useUtils();

  const createProject = api.project.create.useMutation({
    onSuccess: async () => {
      await utils.project.getAll.invalidate();
      router.refresh();
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    createProject.mutate({ name });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-slate-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Welcome to T3 Table</h2>
        <p className="mb-6 text-gray-600 text-center">To get started, please create your first project workspace.</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="My Awesome Project"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <Button
            type="submit"
            disabled={createProject.isPending}
            className="w-full"
          >
            {createProject.isPending ? "Creating..." : "Create Project"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default CreateFirstProject;