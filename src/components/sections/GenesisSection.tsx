import { ChevronDown } from 'lucide-react';
import palaceMosqueGoldenHour from '@/assets/palace-mosque-golden-hour.jpg';

export const GenesisSection = () => {
  const scrollToNext = () => {
    document.getElementById('manuscript')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="genesis" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${palaceMosqueGoldenHour})`,
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-6 animate-fade-in drop-shadow-2xl">
          MANIAL PALACE
        </h1>
        <h2 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-8 animate-fade-in drop-shadow-xl">
          The Architects of a Dream
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 max-w-3xl mx-auto mb-12 animate-fade-in leading-relaxed drop-shadow-lg">
          "The story of a palace that began not in an architect's office, but within the pages of a single, powerful book."
        </p>
        
        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="inline-flex flex-col items-center gap-2 text-primary hover:text-primary/80 transition-colors group animate-fade-in"
          aria-label="Scroll to next section"
        >
          <span className="font-playfair text-lg">Begin the Chapter</span>
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
