"use client";
import { ActiveIndexServicesCard } from "@/states/GlobalState";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { SidebarMenuItem } from "./sideBarMenuItem";
import { TextSmallRegular } from "./typography";

type SidebarMenuProps = {
  content: Array<any>;
  header: string;
};

export const SidebarMenu = ({ content, header }: SidebarMenuProps) => {
  const [clicked, setclicked] = useState(false);

  const [activeCardIndex, setActiveCardIndex] = useRecoilState(
    ActiveIndexServicesCard
  );

  const handleActiveIndex = (index: string) => {
    if (index != activeCardIndex) {
      setclicked(true);
    } else setclicked(!clicked);
    setActiveCardIndex(index);
  };

  return (
    <div className="flex flex-col gap-2 pb-3">
      <div className="px-3 py-1">
        <TextSmallRegular className="inline-block font-inter text-primary/40 dark:text-white">
          {header}
        </TextSmallRegular>
      </div>
      <div className="flex flex-col gap-1">
        {content.map((item: any, index: number) => {
          return (
            // <div key={index} className="flex">
            // <ServiceCard image={item.image} title={item.title} />
            <SidebarMenuItem
              contents={item.contents}
              title={item.title}
              description={item.description}
              index={index}
              isActive={item.title === activeCardIndex}
              onClick={() => handleActiveIndex(item.title)}
              clicked={clicked}
              key={index + 1}
              url={item.url}
              icon={false}
            />
            // </div>
          );
        })}
      </div>
    </div>
  );
};
