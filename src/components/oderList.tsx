import { orderHistory } from "@/utils/helper";
import { } from "lucide-react";
import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
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

export const OderList = () => {
    const [hover,setHoverState]=useState(false)
    const [activeRow,setActiveRow]=useState<number>()
    const handleClick=(index)=>{
        setActiveRow(index);
        setHoverState(!hover)
    }
  return (
    <Card>
      <CardContent>
        <Table>
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
          <TableBody>
            {orderHistory.map((order, index) => {
              return (
                <React.Fragment key={index}>
                  <TableRow className={`group/${order.orderId}:`} onClick={()=>handleClick(index)}>
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
                      className={cn(hover?"opacity-100":"opacity-0")}
                    >
                      ...
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
