interface Step {
  id: number;
  name: string;
}

interface StepsProps {
  steps: Step[];
  currentStep: number;
}

export function Steps({ steps, currentStep }: StepsProps) {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="space-y-4 md:flex md:space-y-0 md:space-x-8">
        {steps.map((step) => (
          <li key={step.name} className="md:flex-1">
            <div
              className={`group flex flex-col border-l-4 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4 ${
                step.id <= currentStep
                  ? 'border-primary'
                  : 'border-border'
              }`}
            >
              <span className="text-sm font-medium text-primary">
                Step {step.id}
              </span>
              <span className="text-sm font-medium">{step.name}</span>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}