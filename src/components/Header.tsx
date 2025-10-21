import { BookOpen, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  showBackButton?: boolean;
}

export const Header = ({ showBackButton }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="bg-glass border-b sticky top-0 z-50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center shadow-glow">
              <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg sm:text-2xl font-bold text-foreground">
                Prince Mohamed Ali Palace
              </h1>
              <p className="text-primary text-xs sm:text-sm hidden sm:block">
                A Story That Started From the Book
              </p>
            </div>
          </div>
          
          {showBackButton && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate('/')}
              className="gap-2 border-primary/50 hover:border-primary hover:bg-primary/10"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
