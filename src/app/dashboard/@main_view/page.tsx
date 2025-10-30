import React from "react";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

async function MainView() {
  const session = await auth();
  const data = await api.project.findFirst({
    where:{
      userId: session?.user.id
    }
  });
  console.log(data)
  return (
    <HydrateClient>
      <div className="h-full w-4/5 bg-amber-300">MainView</div>
    </HydrateClient>
  );
}

export default MainView;
