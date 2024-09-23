"use client";
import { Navbar, NotificationPanel } from "@/components";
import { DashboardSection } from "@/components/sections";
import { ActiveIndexServicesCard, EnableNotificationPanel } from "@/states/GlobalState";
import { useRecoilValue } from "recoil";
import { SideBarLayout } from "./SideBarLayout";
import { usePathname } from "next/navigation";



export function DashboardLayout() {
  const isNotificationPanelActive = useRecoilValue(EnableNotificationPanel);
  const pathname = usePathname();
  //   const searchParams = useSearchParams();
  const activeCardIndex = useRecoilValue(ActiveIndexServicesCard);

  const generateBreadcrumbs = () => {
    const pathSegments = pathname.split("/").filter((segment) => segment);
    const url=pathSegments[0]
    const breadcrumbs = pathSegments.map((segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/");
      return { href, label: segment };
    });
    breadcrumbs.splice(1, 0, {
      href: `/${url}`,
      label: activeCardIndex,
    });
    return [...breadcrumbs];
  };
  const breadcrumbs = generateBreadcrumbs();
  return (
    <div className=" grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[212px_1fr] overflow-hidden">
      <SideBarLayout breadcrumbsArray={breadcrumbs} />
      <div className="w-full flex">
        <div className="flex w-full">
          <div className="w-full">
            <Navbar
              className="hidden md:flex flex-grow h-fit"
              breadcrumbs={breadcrumbs}
            />
            <DashboardSection />
          </div>
          {isNotificationPanelActive && <NotificationPanel />}
        </div>
      </div>
    </div>
  );
}
