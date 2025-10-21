import { ArrowRight, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LayerCardProps {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  description: string;
  imageUrl: string;
  onClick: () => void;
  className?: string;
}

export const LayerCard = ({
  title,
  subtitle,
  icon: Icon,
  description,
  imageUrl,
  onClick,
  className
}: LayerCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group bg-glass rounded-xl overflow-hidden text-left transition-all",
        "hover:scale-105 hover:shadow-2xl hover:border-primary/70",
        "animate-fade-in",
        className
      )}
    >
      {/* Image Header */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute top-4 right-4 w-14 h-14 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-glow">
          <Icon className="w-8 h-8 text-primary-foreground" />
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-primary text-sm mb-4 font-semibold">{subtitle}</p>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{description}</p>
        <div className="flex items-center text-primary text-sm font-semibold">
          Explore 
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
        </div>
      </div>
    </button>
  );
};
