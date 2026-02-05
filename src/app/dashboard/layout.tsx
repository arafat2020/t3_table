import React from "react";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import CreateFirstProject from "~/app/_components/CreateFirstProject";
import { redirect } from "next/navigation";

// Layouts can be async in Next.js 13+
export default async function DashboardLayout({
  main_view,
  sidebar,
}: {
  main_view: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
  }

  const projects = await api.project.getAll();

  if (!projects || projects.length === 0) {
    return (
      <HydrateClient>
        <div className="h-screen w-screen">
          <CreateFirstProject />
        </div>
      </HydrateClient>
    );
  }

  return (
    <HydrateClient>
      <div className="flex w-screen h-screen overflow-hidden">
        {/* Sidebar Area */}
        <div className="w-64 border-r bg-gray-50 flex-none h-full overflow-y-auto">
          {sidebar}
        </div>

        {/* Main Content Area */}
        <div className="flex-1 h-full overflow-hidden relative">
          {main_view}
        </div>
      </div>
    </HydrateClient>
  );
}
