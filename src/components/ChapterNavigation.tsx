import { useState, useEffect } from 'react';
import { BookOpen, Scroll, Building2, Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';

const chapters = [
  { id: 'genesis', label: 'I. Genesis', icon: BookOpen },
  { id: 'manuscript', label: 'II. Manuscript', icon: Scroll },
  { id: 'illumination', label: 'III. Illumination', icon: Building2 },
  { id: 'legacy', label: 'IV. Legacy', icon: Leaf },
];

export const ChapterNavigation = () => {
  const [activeChapter, setActiveChapter] = useState('genesis');

  useEffect(() => {
    const handleScroll = () => {
      const sections = chapters.map(ch => document.getElementById(ch.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveChapter(chapters[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="bg-glass rounded-full py-4 px-2 space-y-4">
        {chapters.map((chapter) => {
          const Icon = chapter.icon;
          const isActive = activeChapter === chapter.id;
          
          return (
            <button
              key={chapter.id}
              onClick={() => scrollToSection(chapter.id)}
              className={cn(
                "group relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300",
                isActive 
                  ? "bg-primary text-primary-foreground shadow-glow" 
                  : "hover:bg-primary/20 text-foreground/60 hover:text-foreground"
              )}
              aria-label={chapter.label}
            >
              <Icon className="w-5 h-5" />
              
              {/* Tooltip */}
              <span className={cn(
                "absolute right-full mr-4 px-3 py-2 bg-glass rounded-lg whitespace-nowrap text-sm font-playfair",
                "opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
              )}>
                {chapter.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
