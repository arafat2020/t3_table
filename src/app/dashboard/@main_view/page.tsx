import React from "react";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import { SheetList } from "~/app/_components/SheetList";

async function MainView() {
  const session = await auth();
  const data = await api.project.findFirst({
    where: {
      userId: session?.user?.id
    }
  });
  console.log(data)
  return (
    <HydrateClient>
      <div className="h-full w-full p-6">
        <h1 className="text-2xl font-bold mb-6">Project Dashboard</h1>
        {data && <SheetList projectId={data.id} initialSheets={data.sheets} />}
        {!data && <div className="text-red-500">Project not found</div>}
      </div>
    </HydrateClient>
  );
}

export default MainView;
