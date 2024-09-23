/* eslint-disable */

import { orderHistory } from "@/utils/helper";
import {} from "lucide-react";
import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { StatusIndicator } from "./ui/statusindicator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { cn } from "@/lib/utils";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "./ui/pagination";

import add from "@/assets/icons/Add.svg";
import filter from "@/assets/icons/FunnelSimple.svg";
import sort from "@/assets/icons/ArrowsDownUp.svg";
import Image from "next/image";
import { Search } from "./search";
import { TextSmallSemibold } from "./typography";

export const OderList = () => {
  const [hover, setHoverState] = useState(false);
  const [activeRow, setActiveRow] = useState<number>();
  const handleClick = (index: number) => {
    setActiveRow(index);
    setHoverState(!hover);
  };
  return (
    <div>
      <div className="px-2 py-1 mb-5 ">
        <TextSmallSemibold className="text-dark dark:text-white">
          Order List
        </TextSmallSemibold>
      </div>
      <Card className=" p-0 pb-0 rounded-2xl  shadow-none h-full border-0 gap-3 flex flex-col">
        <CardHeader className="p-0 bg-[#F7F9FB] dark:bg-[#FFFFFF0D]/5 rounded-lg ">
          <div className="flex justify-between w-full p-2">
            <div className="flex gap-2  w-auto">
              <div className="p-1">
                <Image src={add} alt="add" className="dark:invert"/>
              </div>
              <div className="p-1">
                <Image src={filter} alt="filter" className="dark:invert"/>
              </div>
              <div className="p-1">
                <Image src={sort} alt="sort" className="dark:invert"/>
              </div>
            </div>
            <div>
              <Search keyboardActionReq={false} />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0 ">
          <Table className="pb-0">
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Checkbox />
                </TableHead>
                <TableHead className="px-3 py-[11px]">Order ID</TableHead>
                <TableHead className="px-3 py-[11px]">User</TableHead>
                <TableHead className="px-3 py-[11px]">Project</TableHead>
                <TableHead className="px-3 py-[11px]">Address</TableHead>
                <TableHead className="px-3 py-[11px]">Date</TableHead>
                <TableHead className="px-3 py-[11px]">Status</TableHead>
                <TableHead className="px-3 py-[11px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="border-b">
              {orderHistory.map((order, index) => {
                return (
                  <React.Fragment key={index}>
                    <TableRow className={``} onClick={() => handleClick(index)}>
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      <TableCell>
                        <div className="">{order.orderId}</div>
                      </TableCell>
                      <TableCell className="">{order.user}</TableCell>
                      <TableCell className="">{order.project}</TableCell>
                      <TableCell className="">{order.date}</TableCell>
                      <TableCell className="">{order.address}</TableCell>
                      <TableCell className="">
                        <StatusIndicator
                          className="text-xs"
                          variant={
                            order.status.toLowerCase().replace(" ", "-") as any
                          }
                        >
                          {order.status}
                        </StatusIndicator>
                      </TableCell>
                      <TableCell
                        className={cn(
                          activeRow == index ? "opacity-100" : "opacity-0"
                        )}
                      >
                        ...
                      </TableCell>
                    </TableRow>
                  </React.Fragment>
                );
              })}
            </TableBody>
          </Table>
          <div className="pt-3">
            <Pagination className="justify-end">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">5</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
