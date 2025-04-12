"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./chart";
const chartData = [
  { browser: "ENT", visitors: 250, fill: "#9747ff" },
  { browser: "Orthopedic", visitors: 200, fill: "rgba(0, 168, 181, 0.5)" },
  { browser: "Cardiology", visitors: 200, fill: " #fc0" },
  { browser: "General Physician", visitors: 502, fill: "#00a8b5" },
  { browser: "Dentist", visitors: 359, fill: "#f7912c" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
};

export function DonutPieChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0"></CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
              fill={(entry) => entry.fill}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <g>
                        <image
                          href="/src/assets/standing-human-body-silhouette.svg"
                          x={viewBox.cx - 48}
                          y={viewBox.cy - 48}
                          width="96"
                          height="96"
                        />
                      </g>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-4 text-sm ">
        <div className="flex justify-between items-center border-b pb-9">
          <div className="flex gap-2 items-center">
            <div className="icon-wrapper flex items-center justify-center rounded-full bg-primary w-8 h-8">
              <img
                src="/src/assets/doctor-stethoscope-sm.svg"
                alt="doctor-stethoscope"
              />
            </div>
            <div className="flex flex-col">
              <p className="font-[poppins] text-sm text-basic">
                General Physician
              </p>
              <p className=" text-xs font-[poppins] text-[#999a9d]">35%</p>
            </div>
          </div>

          <div>
            <img src="/src/assets/chevron-left.svg" alt="chevron-left" />
          </div>
        </div>

        <div className="flex justify-between items-center border-b pb-9">
          <div className="flex gap-2 items-center">
            <div className="icon-wrapper flex items-center justify-center rounded-full bg-[#9747ff] w-8 h-8">
              <img src="/src/assets/ent-vector.svg" alt="doctor-stethoscope" />
            </div>
            <div className="flex flex-col">
              <p className="font-[poppins] text-sm text-basic">ENT</p>
              <p className=" text-xs font-[poppins] text-[#999a9d]">35%</p>
            </div>
          </div>

          <div>
            <img src="/src/assets/chevron-left.svg" alt="chevron-left" />
          </div>
        </div>

        <div className="flex justify-between items-center border-b pb-9">
          <div className="flex gap-2 items-center">
            <div className="icon-wrapper flex items-center justify-center rounded-full bg-[#76cad1] w-8 h-8">
              <img src="/src/assets/Orthopedic.svg" alt="doctor-stethoscope" />
            </div>
            <div className="flex flex-col">
              <p className="font-[poppins] text-sm text-basic">Orthopedic</p>
              <p className=" text-xs font-[poppins] text-[#999a9d]">35%</p>
            </div>
          </div>

          <div>
            <img src="/src/assets/chevron-left.svg" alt="chevron-left" />
          </div>
        </div>

        <div className="flex justify-between items-center border-b pb-9">
          <div className="flex gap-2 items-center">
            <div className="icon-wrapper flex items-center justify-center rounded-full bg-[#F7912C] w-8 h-8">
              <img src="/src/assets/Dentist.svg" alt="doctor-stethoscope" />
            </div>
            <div className="flex flex-col">
              <p className="font-[poppins] text-sm text-basic">Dentist</p>
              <p className=" text-xs font-[poppins] text-[#999a9d]">35%</p>
            </div>
          </div>

          <div>
            <img src="/src/assets/chevron-left.svg" alt="chevron-left" />
          </div>
        </div>

        <div className="flex justify-between items-center pb-9">
          <div className="flex gap-2 items-center">
            <div className="icon-wrapper flex items-center justify-center rounded-full bg-[#FFCC00] w-8 h-8">
              <img src="/src/assets/Cardiology.svg" alt="doctor-stethoscope" />
            </div>
            <div className="flex flex-col">
              <p className="font-[poppins] text-sm text-basic">Cardiology</p>
              <p className=" text-xs font-[poppins] text-[#999a9d]">35%</p>
            </div>
          </div>

          <div>
            <img src="/src/assets/chevron-left.svg" alt="chevron-left" />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
