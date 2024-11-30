import ChartWizard from '@/components/ChartWizard';

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-5xl">
      <h1 className="text-4xl font-bold text-center mb-8">Samespace</h1>
        <h1 className="text-4xl font-bold text-center mb-8">AI Chart Generator</h1>
        <ChartWizard />
      </div>
    </main>
  );
}