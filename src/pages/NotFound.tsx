import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background to-muted px-4">
      <div className="text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="text-8xl sm:text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <Button asChild size="lg" className="gap-2">
          <Link to="/">
            <Home className="w-5 h-5" />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
