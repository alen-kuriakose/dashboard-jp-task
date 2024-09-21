"use client";
import bell from "@/assets/icons/Bell.svg";
import clock from "@/assets/icons/ClockCounterClockwise.svg";
import sidebar from "@/assets/icons/Sidebar.svg";
import star from "@/assets/icons/Star.svg";
import sun from "@/assets/icons/Sun.svg";

import { ActiveIndexServicesCard } from "@/states/GlobalState";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { Search } from "./search";

export const Navbar = () => {
  const activeCardIndex = useRecoilValue(ActiveIndexServicesCard);
  return (
    <nav className="px-[1.75rem] py-5 border-b flex justify-between">
      <div className="flex gap-2">
        <div className="p-1">
          <Image src={star} alt="" width={20} height={20} />
        </div>
        <div className="p-1">
          <Image src={sidebar} alt="" width={20} height={20} />
        </div>
        <Breadcrumb className="px-2">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/"
                className="font-inter text-sm font-normal"
              >
                Dashboard
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-inter text-sm font-normal">
                {activeCardIndex}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex gap-2">
        <Search/>
        <div className="p-1">
          <Image src={sun} alt="" width={20} height={20} />
        </div>
        <div className="p-1">
          <Image src={clock} alt="" width={20} height={20} />
        </div>
        <div className="p-1">
          <Image src={bell} alt="" width={20} height={20} />
        </div>
        <div className="p-1">
          <Image src={sidebar} alt="" width={20} height={20} />
        </div>
      </div>
    </nav>
  );
};
