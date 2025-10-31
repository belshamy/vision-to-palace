import { Card } from '@/components/ui/card';
import palaceResidentialWide from '@/assets/palace-residential-wide.jpg';
import palaceThroneInterior from '@/assets/palace-throne-interior.jpg';
import palaceMosqueGoldenHour from '@/assets/palace-mosque-golden-hour.jpg';
import palaceGardenPathway from '@/assets/palace-garden-pathway.jpg';

const structures = [
  {
    title: 'Residence Palace',
    image: palaceResidentialWide,
    description: 'A masterful blend of Mamluk woodwork and Ottoman ceramic art, creating harmonious living spaces that honor centuries of Islamic architectural tradition.',
  },
  {
    title: 'Throne Hall',
    image: palaceThroneInterior,
    description: 'Showcases gilded gold and unique Rococo elements framing the ceremonial seat, where Eastern opulence meets European grandeur.',
  },
  {
    title: 'Mosque & Clock Tower',
    image: palaceMosqueGoldenHour,
    description: 'Represents diverse influences, specifically Moroccan and Andalusian styles, creating a spiritual sanctuary of architectural beauty.',
  },
  {
    title: 'The Historical Gardens',
    image: palaceGardenPathway,
    description: 'A botanical refuge—a living contrast to the architecture, renowned for its rare flora collection and peaceful pathways.',
  },
];

export const IlluminationSection = () => {
  return (
    <section id="illumination" className="min-h-screen py-20 bg-gradient-to-b from-background to-[hsl(222_45%_8%)]">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-primary mb-6">
            A FUSION OF STYLES
          </h2>
          <h3 className="font-playfair text-2xl md:text-4xl font-semibold text-foreground mb-8">
            Illuminating the Complex
          </h3>
        </div>

        {/* Structures Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {structures.map((structure, index) => (
            <Card 
              key={index} 
              className="bg-card/60 backdrop-blur-sm border-primary/20 overflow-hidden group hover:border-primary/40 transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={structure.image}
                  alt={structure.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h4 className="font-playfair text-2xl font-bold text-primary mb-4">
                  {structure.title}
                </h4>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  {structure.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
