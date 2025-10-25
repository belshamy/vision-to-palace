import { Header } from '@/components/Header';
import { LayerCard } from '@/components/LayerCard';
import { SustainabilityBanner } from '@/components/SustainabilityBanner';
import { layers } from '@/data/layers';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-16">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Where Vision Meets Reality
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Journey through the layers of Prince Mohamed Ali Tewfik's masterpiece on Manial Island, 
            from his written inspirations in L'Art Arabe to the living legacy of sustainable heritage preservation. 
            Discover the documented connections between historical references and architectural reality.
          </p>
        </div>

        {/* Sustainability Banner */}
        <div className="mb-8 sm:mb-12">
          <SustainabilityBanner />
        </div>

        {/* Layer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {layers.map((layer, index) => (
            <LayerCard
              key={layer.id}
              {...layer}
              onClick={() => navigate(`/layer/${layer.id}`)}
              className="animation-delay-[${index * 100}ms]"
            />
          ))}
        </div>

        {/* Footer Info */}
        <div className="text-center animate-fade-in">
          <div className="inline-block bg-glass rounded-lg px-6 sm:px-8 py-4">
            <p className="text-muted-foreground text-sm">
              Located on Rhoda Island, Cairo • Built 1899-1929 • Open Daily 9 AM - 4 PM
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
