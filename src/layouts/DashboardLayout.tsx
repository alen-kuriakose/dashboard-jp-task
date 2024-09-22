"use client";
import { Navbar, NotificationPanel } from "@/components";
import { DashboardSection } from "@/components/sections";
import { EnableNotificationPanel } from "@/states/GlobalState";
import { useRecoilValue } from "recoil";
import { SideBarLayout } from "./SideBarLayout";

export function DashboardLayout() {
  const isNotificationPanelActive = useRecoilValue(EnableNotificationPanel);

  return (
    <div className=" grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[212px_1fr] overflow-hidden">
      <SideBarLayout />
      <div className="w-full flex">
        <div className="flex w-full">
          <div className="w-full">
            <Navbar className="hidden md:flex flex-grow h-fit" />
            <DashboardSection />
          </div>
          {isNotificationPanelActive && <NotificationPanel />}
        </div>
      </div>
    </div>
  );
}
