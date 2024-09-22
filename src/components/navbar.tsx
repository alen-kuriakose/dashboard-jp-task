"use client";
import bell from "@/assets/icons/Bell.svg";
import clock from "@/assets/icons/ClockCounterClockwise.svg";
import sidebar from "@/assets/icons/Sidebar.svg";
import star from "@/assets/icons/Star.svg";
import sun from "@/assets/icons/Sun.svg";

import { cn } from "@/lib/utils";
import { ActiveIndexServicesCard } from "@/states/GlobalState";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { Search } from "./search";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { useTheme } from "next-themes";
import { Theme } from "@/utils/constants";

type NavbaeProps = {
  className?: string;
};

export const Navbar = ({ className }: NavbaeProps) => {
  const activeCardIndex = useRecoilValue(ActiveIndexServicesCard);
  const { theme, setTheme } = useTheme();
  const handleThemeChange = () => {
    if (theme == Theme.dark) {
      setTheme(Theme.light);
    } else {
      setTheme(Theme.dark);
    }
  };
  return (
    <nav
      className={cn(
        "md:px-[1.75rem]  md:py-5 md:border-b flex md:justify-between justify-center w-full md:w-auto ",
        className
      )}
    >
      <div className="flex gap-2">
        <div className="p-1 dark:invert hover:scale-105 transition-transform duration-200 ease-in-out hidden md:block">
          <Image src={star} alt="" width={20} height={20} />
        </div>
        <div className="p-1 dark:invert hover:scale-105 transition-transform duration-200 ease-in-out hidden md:block">
          <Image src={sidebar} alt="" width={20} height={20} />
        </div>
        <Breadcrumb className="px-2 hidden lg:block">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/"
                className="font-inter text-sm font-normal text-dark/40 dark:text-white/40"
              >
                Dashboard
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-inter text-sm font-normal text-dark dark:text-white">
                {activeCardIndex}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex gap-2 w-full md:w-auto">
        <Search keyboardActionReq={true} />

        <div
          className={cn(
            "p-1 dark:invert hover:scale-105 transition-transform duration-200 ease-in-out  h-auto  ",
            theme == Theme.dark ? "rotate-90 " : "rotate-0 "
          )}
          onClick={() => handleThemeChange()}
        >
          <Image src={sun} alt="" width={20} height={20} />
        </div>
        <div className="p-1 dark:invert hover:scale-105 transition-transform duration-200 ease-in-out">
          <Image src={clock} alt="" width={20} height={20} />
        </div>
        <div className="p-1 dark:invert hover:scale-105 transition-transform duration-200 ease-in-out">
          <Image src={bell} alt="" width={20} height={20} />
        </div>
        <div className="p-1 dark:invert hover:scale-105 transition-transform duration-200 ease-in-out hidden md:block">
          <Image src={sidebar} alt="" width={20} height={20} />
        </div>
      </div>
    </nav>
  );
};
