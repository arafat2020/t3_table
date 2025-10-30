import React from "react";

function DashboardLayout({
  main_view,
  sidebar,
}: {
  main_view: React.ReactNode;
  sidebar: React.ReactNode;
}): React.JSX.Element {
  return (
    <div className="w-screen, h-screen">
      <>{sidebar}</>
      <>{main_view}</>
    </div>
  );
}

export default DashboardLayout;
