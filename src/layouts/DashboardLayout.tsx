import React from "react";
import { SideBarLayout } from "./SideBarLayout";
import { ThemeToggler } from "@/components";

export function DashboardLayout() {
  return (
    <div className=" grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[212px_1fr]">
      <SideBarLayout />
      <div>DashboardLayout</div>
      <div>
        <ThemeToggler/>
      </div>
    </div>
  );
}
