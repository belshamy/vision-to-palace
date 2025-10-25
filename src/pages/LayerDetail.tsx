import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { layers } from '@/data/layers';
import { BookOpen, Leaf, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

const LayerDetail = () => {
  const { layerId } = useParams();
  const navigate = useNavigate();
  const layer = layers.find(l => l.id === layerId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [layerId]);

  if (!layer) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Layer not found</h2>
          <button
            onClick={() => navigate('/')}
            className="text-primary hover:underline"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  const Icon = layer.icon;
  const content = layer.content;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <Header showBackButton />

      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Hero Image */}
            <div className="rounded-xl overflow-hidden border-2 border-primary/30 shadow-2xl animate-fade-in">
              <img 
                src={layer.imageUrl} 
                alt={layer.title}
                className="w-full h-64 sm:h-96 object-cover"
              />
            </div>

            {/* Image Gallery Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i} 
                  className="relative h-24 sm:h-32 rounded-lg overflow-hidden border border-primary/30 bg-card animate-fade-in"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary/50 mx-auto mb-2" />
                      <p className="text-primary/60 text-xs hidden sm:block">Image {i}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Content Details */}
            <div className="bg-glass rounded-xl p-6 sm:p-8 animate-fade-in">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">{content.title}</h3>
              
              {content.quote && (
                <div className="bg-primary/10 border-l-4 border-primary rounded-r-lg p-4 sm:p-6 mb-6 italic">
                  <p className="text-foreground text-base sm:text-lg leading-relaxed">{content.quote}</p>
                  <p className="text-primary text-sm mt-3">— Prince Mohamed Ali Tawfik</p>
                </div>
              )}

              {content.features && (
                <div className="mb-6">
                  <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {content.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm sm:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <p className="text-muted-foreground leading-relaxed text-sm sm:text-lg">{content.details}</p>
              
              {content.additionalInfo && (
                <div className="mt-6 bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <p className="text-foreground text-sm sm:text-base leading-relaxed">{content.additionalInfo}</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* From the Book Connection */}
            <div className="bg-glass rounded-xl p-6 animate-fade-in">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
                <h4 className="text-lg font-semibold text-foreground">From the Book</h4>
              </div>
              <div className="bg-card/80 rounded-lg p-4 mb-4 border border-primary/20">
                <img 
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&q=80"
                  alt="Manuscript"
                  className="w-full h-32 object-cover rounded mb-3"
                />
                <p className="text-muted-foreground text-sm italic">
                  Prince's manuscript reference connecting his documented vision to this architectural element
                </p>
              </div>
              <p className="text-muted-foreground text-sm">
                Each element traces back to the prince's meticulously documented architectural philosophy and design intentions.
              </p>
            </div>

            {/* Sustainability Info */}
            <div className="bg-accent/10 border border-accent/50 rounded-xl p-6 animate-fade-in">
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-6 h-6 text-accent" />
                <h4 className="text-lg font-semibold text-accent">Sustainability Impact</h4>
              </div>
              <p className="text-accent/90 text-sm leading-relaxed mb-4">{content.sustainability}</p>
              <div className="bg-accent/20 rounded p-3 border border-accent/30">
                <p className="text-accent text-xs font-semibold">Traditional wisdom meets modern conservation</p>
              </div>
            </div>

            {/* Navigation to Other Layers */}
            <div className="bg-glass rounded-xl p-6 animate-fade-in">
              <h4 className="text-lg font-semibold text-foreground mb-4">Explore Other Layers</h4>
              <div className="space-y-2">
                {layers.filter(l => l.id !== layerId).map(l => {
                  const LayerIcon = l.icon;
                  return (
                    <button
                      key={l.id}
                      onClick={() => navigate(`/layer/${l.id}`)}
                      className="w-full flex items-center gap-3 p-3 bg-card hover:bg-card/80 rounded-lg transition-all text-left group border border-transparent hover:border-primary/30"
                    >
                      <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center flex-shrink-0">
                        <LayerIcon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-foreground text-sm font-semibold truncate">{l.title}</p>
                        <p className="text-muted-foreground text-xs truncate">{l.subtitle}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LayerDetail;
