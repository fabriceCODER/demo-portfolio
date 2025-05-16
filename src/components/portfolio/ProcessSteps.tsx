
interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
}

const ProcessSteps = ({ steps }: ProcessStepsProps) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step) => (
        <div key={step.number} className="bg-harper-cream p-6 rounded-lg">
          <span className="block text-5xl font-bold text-harper-terracotta/20 mb-4">{step.number}</span>
          <h3 className="text-xl font-bold text-harper-navy mb-3">{step.title}</h3>
          <p className="text-gray-700">{step.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProcessSteps;
