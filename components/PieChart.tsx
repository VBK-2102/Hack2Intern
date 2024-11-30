"use client";

import { PieChart as RechartsChart, Pie, Cell, Legend, Tooltip } from 'recharts';

interface PieChartProps {
  data: Array<{ name: string; value: number }>;
  colors: string[];
  title?: string;
  subtitle?: string;
}

export function PieChart({ data, colors, title, subtitle }: PieChartProps) {
  return (
    <div className="w-full h-full flex flex-col items-center">
      {title && (
        <h2 className="text-xl font-semibold text-center mb-1">{title}</h2>
      )}
      {subtitle && (
        <p className="text-sm text-muted-foreground text-center mb-4">
          {subtitle}
        </p>
      )}
      <RechartsChart width={400} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </RechartsChart>
    </div>
  );
}