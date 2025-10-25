import { useState } from 'react';
import { BookOpen, ArrowRight, Info } from 'lucide-react';
import { BookReference } from '@/data/bookComparisons';
import { Card } from '@/components/ui/card';

interface BookComparisonProps {
  comparisons: BookReference[];
}

export const BookComparison = ({ comparisons }: BookComparisonProps) => {
  const [selectedComparison, setSelectedComparison] = useState(0);

  if (comparisons.length === 0) {
    return null;
  }

  const current = comparisons[selectedComparison];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3 mb-4">
        <BookOpen className="w-6 h-6 text-primary" />
        <div>
          <h4 className="text-lg font-semibold text-foreground">From L'Art Arabe to Reality</h4>
          <p className="text-sm text-muted-foreground">Visual connections between the book and the palace</p>
        </div>
      </div>

      {/* Main Comparison Display */}
      <Card className="overflow-hidden border-2 border-primary/30 bg-card">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Book Image */}
          <div className="relative group">
            <div className="absolute top-4 left-4 z-10 bg-primary/90 text-primary-foreground px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm">
              Book Reference
            </div>
            <img
              src={current.bookImageUrl}
              alt={`L'Art Arabe ${current.plate}`}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Arrow Separator (visible on desktop) */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="bg-background border-2 border-primary rounded-full p-3 shadow-glow">
              <ArrowRight className="w-6 h-6 text-primary" />
            </div>
          </div>

          {/* Palace Image */}
          <div className="relative group">
            <div className="absolute top-4 right-4 z-10 bg-accent/90 text-accent-foreground px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm">
              Palace Element
            </div>
            <img
              src={current.palaceImageUrl}
              alt="Palace implementation"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Description */}
        <div className="p-6 bg-glass border-t border-primary/20">
          <div className="flex items-start gap-3 mb-3">
            <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-sm font-bold text-primary">{current.plate}</span>
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">{current.source}</span>
              </div>
              <p className="text-sm text-foreground leading-relaxed">{current.description}</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Navigation Dots */}
      {comparisons.length > 1 && (
        <div className="flex justify-center gap-2">
          {comparisons.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedComparison(index)}
              className={`transition-all ${
                index === selectedComparison
                  ? 'w-8 h-2 bg-primary'
                  : 'w-2 h-2 bg-primary/30 hover:bg-primary/50'
              } rounded-full`}
              aria-label={`View comparison ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Thumbnail Navigation */}
      {comparisons.length > 1 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {comparisons.map((comparison, index) => (
            <button
              key={index}
              onClick={() => setSelectedComparison(index)}
              className={`relative rounded-lg overflow-hidden border-2 transition-all hover:scale-105 ${
                index === selectedComparison
                  ? 'border-primary shadow-glow'
                  : 'border-primary/20 hover:border-primary/50'
              }`}
            >
              <img
                src={comparison.bookImageUrl}
                alt={comparison.plate}
                className="w-full h-20 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-2">
                <span className="text-white text-xs font-semibold truncate">{comparison.plate}</span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Info Banner */}
      <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
        <p className="text-sm text-foreground leading-relaxed">
          <span className="font-semibold text-primary">Historical Attribution:</span> Prince Mohamed Ali personally selected each design element from Émile Prisse d'Avennes' comprehensive documentation of Cairo's Islamic monuments, carefully adapting them to create a unified architectural masterpiece.
        </p>
      </div>
    </div>
  );
};
