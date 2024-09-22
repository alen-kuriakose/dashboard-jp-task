import { Navbar, NotificationPanel } from "@/components";
import { SideBarLayout } from "./SideBarLayout";

export function DashboardLayout() {
  return (
    <div className=" grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[212px_1fr] overflow-hidden">
      <SideBarLayout />
      <div className="w-full">
        <div className="flex w-full">
          <header className="w-full">
            <Navbar className="hidden md:flex flex-grow " />
          </header>
          <NotificationPanel />
        </div>
      </div>
    </div>
  );
}
