import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import { type ChartConfig, ChartContainer } from "@/components/ui/chart";
import type React from "react";

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "#0000FF",
  },
} satisfies ChartConfig;

interface ChartProps {
  to: string;
  from: string;
  header: string;
  footer: string;
  icon: React.ReactNode;
  num?: number;
  endAngle?: number;
  percentage?: number;
}

const Chart = ({
  to,
  from,
  header,
  footer,
  icon,
  num,
  endAngle,
  percentage,
}: ChartProps) => {
  const chartData = [{ browser: "safari", visitors: 20, fill: `${from}` }];

  return (
    <div className="bg-white shadow-lg rounded-lg py-0.5 px-3">
      <div className="flex justify-between">
        <div
          style={{ background: `linear-gradient(to right, ${from}, ${to})` }}
          className={`w-fit h-fit rounded-md text-white p-1 self-end`}
        >
          {icon}
        </div>

        <div className="text-right">
          <span className="font-bold">{num}</span>
          <p className="text-[9px] text-gray-600 font-semibold">{header}</p>
        </div>
      </div>

      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[90px] min-w-[150px]"
      >
        <RadialBarChart
          data={chartData}
          // a barra inicia aqui
          startAngle={0}
          // a barra termina aqui
          endAngle={endAngle}
          innerRadius={35}
          outerRadius={60}
        >
          <PolarGrid
            gridType="circle"
            radialLines={false}
            stroke="none"
            className="first:fill-muted last:fill-background"
            polarRadius={[40, 30]}
          />
          <RadialBar dataKey="visitors" background cornerRadius={10} />
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-[#252525] text-lg font-bold "
                      >
                        {/* {chartData[0].visitors.toLocaleString()} */}
                        {percentage}%
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground text-[10px]"
                      >
                        {/* Disponiveis */}
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </PolarRadiusAxis>
        </RadialBarChart>
      </ChartContainer>

      <div className="bg-[#F3F4F6] rounded-md text-gray-600 text-[11px] px-1.5 py-1.5 mb-4">
        {footer}
      </div>
    </div>
  );
};

export default Chart;
