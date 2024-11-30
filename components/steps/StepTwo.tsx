"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PieChart } from "@/components/PieChart";
import { Download, ArrowLeft } from "lucide-react";

interface StepTwoProps {
  onBack: () => void;
  chartData: any;
  setChartData: (data: any) => void;
}

export function StepTwo({ onBack, chartData, setChartData }: StepTwoProps) {
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChartData({ ...chartData, title: e.target.value });
  };

  const handleSubtitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChartData({ ...chartData, subtitle: e.target.value });
  };

  const handleColorChange = (index: number, color: string) => {
    const newColors = [...chartData.colors];
    newColors[index] = color;
    setChartData({ ...chartData, colors: newColors });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 space-y-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Chart Title</Label>
              <Input
                id="title"
                value={chartData.title}
                onChange={handleTitleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subtitle">Subtitle</Label>
              <Input
                id="subtitle"
                value={chartData.subtitle}
                onChange={handleSubtitleChange}
              />
            </div>
            <div className="space-y-2">
              <Label>Colors</Label>
              <div className="flex gap-4">
                {chartData.colors.map((color: string, index: number) => (
                  <div key={index} className="space-y-1">
                    <Input
                      type="color"
                      value={color}
                      onChange={(e) => handleColorChange(index, e.target.value)}
                      className="h-10 w-20"
                    />
                    <p className="text-xs text-muted-foreground text-center">
                      {chartData.data[index].name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" onClick={onBack}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button className="flex-1">
              <Download className="mr-2 h-4 w-4" />
              Export Chart
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <PieChart 
            data={chartData.data}
            colors={chartData.colors}
            title={chartData.title}
            subtitle={chartData.subtitle}
          />
        </Card>
      </div>
    </div>
  );
}