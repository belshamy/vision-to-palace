import { ChapterNavigation } from '@/components/ChapterNavigation';
import { GenesisSection } from '@/components/sections/GenesisSection';
import { ManuscriptSection } from '@/components/sections/ManuscriptSection';
import { IlluminationSection } from '@/components/sections/IlluminationSection';
import { LegacySection } from '@/components/sections/LegacySection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <ChapterNavigation />
      
      <GenesisSection />
      <ManuscriptSection />
      <IlluminationSection />
      <LegacySection />
      
      {/* Footer */}
      <footer className="bg-card/60 backdrop-blur-sm border-t border-primary/20 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-foreground/60 font-playfair">
            © 2025 Prince Mohamed Ali Palace Museum. A testament to heritage and architectural excellence.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
