"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PieChart } from "@/components/PieChart";

interface StepOneProps {
  onNext: () => void;
  chartData: any;
  setChartData: (data: any) => void;
}

export function StepOne({ onNext, chartData, setChartData }: StepOneProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="prompt">Chart Prompt</Label>
            <Textarea
              id="prompt"
              placeholder="Describe the chart you want to generate..."
              className="h-32"
              defaultValue="Create a pie chart showing the voter percentage for Democratic and Republican parties in the 2024 US elections. Democratic Party:52% Republican Party:48% "
            />
          </div>
          <Button onClick={onNext} className="w-full">
            Generate Chart
          </Button>
        </Card>

        <Card className="p-6">
          <PieChart data={chartData.data} colors={chartData.colors} />
        </Card>
      </div>
    </div>
  );
}