import { useTheme } from "next-themes";
import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Marker } from "react-simple-maps";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { TextSmallSemibold, TextXSmallRegular } from "../typography";
import { locations } from "@/utils/helper";
import { Progress } from "../ui/progress";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export const WorldMap = () => {
  const { theme } = useTheme();
  return (
    <Card className="border-0 bg-primary-light dark:bg-white/15 shadow-none flex flex-col gap-0 ">
      <CardHeader className="pb-4">
        <CardTitle>
          <TextSmallSemibold>Revenue</TextSmallSemibold>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ComposableMap>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={theme == "dark" ? "#A8C5DA" : "#A8C5DA"}
                />
              ))
            }
          </Geographies>
          {locations.map((location) => (
            <Marker key={location.city} coordinates={location.coordinates}>
              <circle
                r={8}
                fill={theme === "dark" ? "#C6C7F8" : "#A8C5DA"}
                stroke="#FFFFFF"
                strokeWidth={4}
              />
            </Marker>
          ))}
        </ComposableMap>
        <div className="flex flex-col gap-4">
          {locations.map((location, index) => {
            return (
              <div key={index}>
                <div className="flex justify-between">
                  <TextXSmallRegular className="leading-[18px]">
                    {location.city}
                  </TextXSmallRegular>
                  <TextXSmallRegular className="leading-[18px]">
                    {location.value}
                  </TextXSmallRegular>
                </div>
                <Progress className="h-[2px] dark:bg-[]" value={location.progress} />
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
