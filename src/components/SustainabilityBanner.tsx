import { Leaf } from 'lucide-react';

export const SustainabilityBanner = () => {
  return (
    <div className="bg-accent/20 border border-accent/50 rounded-xl p-4 sm:p-6 backdrop-blur-sm animate-fade-in">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
          <Leaf className="w-6 h-6 text-accent" />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-accent mb-1">
            Green Museums Initiative
          </h3>
          <p className="text-accent/90 text-sm leading-relaxed">
            Preserving heritage through sustainable practices and environmental stewardship - 
            traditional wisdom meeting modern conservation
          </p>
        </div>
      </div>
    </div>
  );
};
