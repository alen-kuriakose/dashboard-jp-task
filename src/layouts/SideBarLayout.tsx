"use client";
import avatar from "@/assets/images/ByeWind.png";
import { SidebarMenu } from "@/components";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { dashboardSidemenuContent, pageSidemenuContent } from "@/utils/helper";

export function SideBarLayout() {
  return (
    <div>
      <div className="hidden border-r md:block pt-5 h-full max-h-screen">
        <div className="flex h-full max-h-screen flex-col gap-4 px-4 lg:px-4">
          <div className="flex justify-start p-1">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image
                src={avatar}
                alt={"profile_avatar"}
                width={24}
                height={24}
              />
              <span className="text-sm text-dark dark:text-white font-normal">
                ByeWind
              </span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start text-sm font-medium gap-4">
              <SidebarMenu
                header="Dashboard"
                content={dashboardSidemenuContent}
              />
              <SidebarMenu header="Pages" content={pageSidemenuContent} />
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:hidden bg-white ">
        <header className="flex h-14 items-center gap-4 border-b px-4 lg:h-[60px] lg:px-6 bg-white dark:bg-black">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5 text-primary  " />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="flex flex-col bg-white dark:bg-black"
            >
              <nav className="grid gap-2 text-lg font-medium ">
                <div className="flex justify-start p-1">
                  <Link
                    href="/"
                    className="flex items-center gap-2 font-semibold"
                  >
                    <Image
                      src={avatar}
                      alt={"profile_avatar"}
                      width={24}
                      height={24}
                    />
                    <span className="text-sm text-dark dark:text-white font-normal">
                      ByeWind
                    </span>
                  </Link>
                </div>
                <SidebarMenu
                  header="Dashboard"
                  content={dashboardSidemenuContent}
                />
                <SidebarMenu header="Pages" content={pageSidemenuContent} />
              </nav>
              {/* <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                      Unlock all features and get unlimited access to our
                      support team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      Upgrade
                    </Button>
                  </CardContent>
                </Card>
              </div> */}
            </SheetContent>
          </Sheet>
        </header>
      </div>
    </div>
  );
}
{
  /* }
import Link from "next/link";
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const description =
  "A products dashboard with a sidebar navigation and a main content area. The dashboard has a header with a search input and a user menu. The sidebar has a logo, navigation links, and a card with a call to action. The main content area shows an empty state with a call to action.";

export function SideBarLayout() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">Acme Inc</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <ShoppingCart className="h-4 w-4" />
                Orders
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
              >
                <Package className="h-4 w-4" />
                Products{" "}
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Users className="h-4 w-4" />
                Customers
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <LineChart className="h-4 w-4" />
                Analytics
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card x-chunk="dashboard-02-chunk-0">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      </div>
    </div>
  );
} */
}
