import { Card } from '@/components/ui/card';
import { Clock, MapPin, Phone, Mail } from 'lucide-react';

export const LegacySection = () => {
  return (
    <section id="legacy" className="min-h-screen py-20 bg-gradient-to-b from-[hsl(222_45%_8%)] to-background">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-primary mb-6">
            A LASTING CHAPTER
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Preservation Column */}
          <Card className="bg-card/60 backdrop-blur-sm border-primary/20 p-8">
            <h3 className="font-playfair text-3xl font-bold text-primary mb-6">
              Preservation & Sustainability
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-8 text-lg">
              The future is secured by a comprehensive Sustainable Management Approach that prioritizes long-term ecological, economic, and cultural viability.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-playfair text-xl font-bold text-primary mb-3">
                  Key Strategies:
                </h4>
                <ul className="space-y-4 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <strong className="text-foreground">Digital Archiving:</strong> Using 3D scanning and smart sensors for structural monitoring, preserving every detail for future generations.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <strong className="text-foreground">Sustainable Tourism:</strong> Controlling visitor numbers to fund maintenance while protecting the site's integrity.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <strong className="text-foreground">Conservation over Replacement:</strong> Prioritizing skilled restoration of original historical materials, honoring the palace's authentic heritage.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Visit Information Column */}
          <Card className="bg-card/60 backdrop-blur-sm border-primary/20 p-8">
            <h3 className="font-playfair text-3xl font-bold text-primary mb-6">
              Plan Your Visit
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-foreground mb-2">Opening Hours</h4>
                  <p className="text-foreground/80">9:00 AM – 4:00 PM</p>
                  <p className="text-sm text-muted-foreground mt-1">Daily except Fridays</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-foreground mb-2">Location</h4>
                  <p className="text-foreground/80">
                    Manial Island, Saray El Manial Street<br />
                    Cairo, Egypt
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-foreground mb-2">Contact</h4>
                  <p className="text-foreground/80">+20 2 2368 7495</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-foreground mb-2">Email</h4>
                  <p className="text-foreground/80">info@manialpalace.gov.eg</p>
                </div>
              </div>

              {/* Ticket Information */}
              <div className="mt-8 pt-6 border-t border-primary/20">
                <h4 className="font-bold text-foreground mb-3">Admission</h4>
                <div className="space-y-2 text-foreground/80">
                  <p>Egyptian Nationals: 20 EGP</p>
                  <p>International Visitors: 100 EGP</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Students with valid ID receive 50% discount
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
