import { Card } from '@/components/ui/card';
import { bookComparisons } from '@/data/bookComparisons';

export const ManuscriptSection = () => {
  const buildingComparisons = bookComparisons.find(bc => bc.layerId === 'building')?.comparisons || [];
  const interiorComparisons = bookComparisons.find(bc => bc.layerId === 'interior')?.comparisons || [];

  return (
    <section id="manuscript" className="min-h-screen py-20 bg-gradient-to-b from-[hsl(210_40%_15%)] to-background">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-primary mb-6">
            FROM PAGE TO STONE
          </h2>
          <h3 className="font-playfair text-2xl md:text-4xl font-semibold text-foreground mb-8">
            L'Art Arabe
          </h3>
          <p className="text-lg md:text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
            Prince Mohamed Ali used Émile Prisse d'Avennes' <span className="italic font-playfair">L'Art Arabe</span>—a meticulous compilation of historic Islamic monuments—as his blueprint. Each architectural detail is a page, transcribed in stone, wood, and tile.
          </p>
        </div>

        {/* Comparisons Grid */}
        <div className="space-y-24">
          {/* Exterior Facade Comparisons */}
          <div>
            <h4 className="font-playfair text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
              Exterior Façade
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {buildingComparisons.slice(0, 3).map((comparison, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur-sm border-primary/20 overflow-hidden group hover:border-primary/40 transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={comparison.palaceImageUrl}
                      alt={comparison.description}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h5 className="font-playfair text-lg font-bold text-primary mb-2">
                      {comparison.plate}
                    </h5>
                    <p className="text-sm text-muted-foreground mb-3 italic">
                      {comparison.source}
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      {comparison.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Interior Tiles Comparisons */}
          <div>
            <h4 className="font-playfair text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
              Interior Tiles & Decorations
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {interiorComparisons.slice(0, 3).map((comparison, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur-sm border-primary/20 overflow-hidden group hover:border-primary/40 transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={comparison.palaceImageUrl}
                      alt={comparison.description}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h5 className="font-playfair text-lg font-bold text-primary mb-2">
                      {comparison.plate}
                    </h5>
                    <p className="text-sm text-muted-foreground mb-3 italic">
                      {comparison.source}
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      {comparison.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
