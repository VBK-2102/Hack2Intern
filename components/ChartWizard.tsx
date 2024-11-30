"use client";

import { useState } from 'react';
import { StepOne } from '@/components/steps/StepOne';
import { StepTwo } from '@/components/steps/StepTwo';
import { Steps } from '@/components/Steps';

const ChartWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [chartData, setChartData] = useState({
    title: 'US Election Results 2024',
    subtitle: 'Voter Percentage by Party',
    data: [
      { name: 'Democratic Party', value: 52 },
      { name: 'Republican Party', value: 48 },
    ],
    colors: ['#0B3D91', '#B31942']
  });

  const steps = [
    { id: 1, name: 'Generate Chart' },
    { id: 2, name: 'Customize' },
  ];

  return (
    <div className="bg-card rounded-lg shadow-lg p-6">
      <Steps steps={steps} currentStep={currentStep} />
      
      <div className="mt-8">
        {currentStep === 1 ? (
          <StepOne 
            onNext={() => setCurrentStep(2)}
            chartData={chartData}
            setChartData={setChartData}
          />
        ) : (
          <StepTwo
            onBack={() => setCurrentStep(1)}
            chartData={chartData}
            setChartData={setChartData}
          />
        )}
      </div>
    </div>
  );
};

export default ChartWizard;