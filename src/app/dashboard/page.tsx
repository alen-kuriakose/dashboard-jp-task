"use client";
import { DashboardLayout } from "@/layouts";
import { RecoilRoot } from "recoil";

export default function DashboardPage() {
 
  return (
    <RecoilRoot>
      <div className="bg-white dark:bg-black font-inter">
        <DashboardLayout />
      </div>
    </RecoilRoot>
  );
}
