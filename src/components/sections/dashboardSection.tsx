// import { ActiveIndexServicesCard } from "@/states/GlobalState";
import { WidgetChartData } from "@/utils/helper";
// import { useRecoilValue } from "recoil";
import { AreaChartComponent, StackedBarChart, WidgetChart } from "../charts";
import { TextSmallSemibold } from "../typography";
// type DashboardSectionProps = {};

export function DashboardSection() {
  //   const activeCardIndex = useRecoilValue(ActiveIndexServicesCard);

  return (
    <div className="w-full flex flex-grow p-7 flex-col gap-4 overflow-y-auto">
      <div className="px-2 py-1 ">
        <TextSmallSemibold className="text-dark dark:text-white">
          eCommerce
        </TextSmallSemibold>
      </div>
      <div className="grid grid-cols-12 gap-7">
        <div className="col-span-12 lg:col-span-6 grid md:grid-cols-2 gap-7 ">
          {WidgetChartData.map((item, index) => {
            return (
              <WidgetChart
                widgetName={item.widgetName}
                mainValue={item.mainValue}
                growth={item.growth}
                isRevRelated={item.isRevRelated}
                className={item.className}
                key={index}
                fontClass={item.fontClass}
                iconClr={item.icnClr}
              />
            );
          })}
        </div>
        <div className="col-span-12 lg:col-span-6">
          <StackedBarChart />
        </div>
        <div className="col-span-8">
          <AreaChartComponent />
        </div>
      </div>
    </div>
  );
}
