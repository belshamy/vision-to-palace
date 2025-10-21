import { BookOpen, Building2, Palette, Package, Leaf } from 'lucide-react';

export interface LayerContent {
  title: string;
  quote?: string;
  features?: string[];
  details: string;
  sustainability: string;
}

export interface Layer {
  id: string;
  title: string;
  subtitle: string;
  icon: typeof BookOpen;
  description: string;
  imageUrl: string;
  content: LayerContent;
}

export const layers: Layer[] = [
  {
    id: 'book',
    title: 'The Book',
    subtitle: 'Prince Mohamed Ali\'s Vision',
    icon: BookOpen,
    description: 'Explore the prince\'s original manuscripts and inspirations',
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80',
    content: {
      title: 'The Prince\'s Manuscript',
      quote: '"I envision a palace that harmonizes the beauty of Islamic architecture with the wisdom of nature, where every hall tells a story and every garden breathes life into history."',
      details: 'Written between 1901-1929, Prince Mohamed Ali Tawfik documented his architectural vision, drawing inspiration from Ottoman, Mamluk, Persian, and Moorish traditions. The prince personally designed every architectural and decorative element, intending his palace to revive and honor Islamic arts.',
      sustainability: 'The prince\'s writings reveal deep appreciation for natural ventilation, water conservation, and harmonious integration with the landscape - principles that align with modern sustainable architecture.'
    }
  },
  {
    id: 'building',
    title: 'Building Design',
    subtitle: 'Architectural Masterpiece',
    icon: Building2,
    description: 'Discover the architectural elements and structural design',
    imageUrl: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=800&q=80',
    content: {
      title: 'The Palace Complex',
      features: ['Ottoman-inspired facades', 'Mashrabiya screens for natural cooling', 'Clock tower inspired by Hassan Mosque', 'Persian garden integration'],
      details: 'The palace complex showcases Islamic architectural excellence built between 1899-1929. It features five distinctive structures including the Residence Palace (1903), Reception Palace, Throne Palace, the Mosque, and the Clock Tower. The design harmonizes Ottoman, Moorish, Persian and European influences.',
      sustainability: 'Traditional passive cooling systems reduce energy consumption by up to 40%. Mashrabiya screens provide natural ventilation while maintaining privacy. The strategic orientation maximizes natural light and minimizes heat gain.'
    }
  },
  {
    id: 'interior',
    title: 'Interior Spaces',
    subtitle: 'Decorative Halls',
    icon: Palette,
    description: 'Experience the ornate halls and decorative elements',
    imageUrl: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80',
    content: {
      title: 'The Golden Throne Hall',
      features: ['Persian tile mosaics by David Ohannessian', 'Hand-painted ceilings with golden sunburst', 'Moroccan Hall with colorful windows', 'Syrian Hall with Ottoman carved wood'],
      details: 'Each hall represents a different cultural influence, from Mamluk geometric patterns to Persian floral motifs. The Throne Hall features a striking golden sunburst ceiling, while the Aubusson Room displays prized French tapestries. The Mirror Hall and Shell Salon showcase intricate decorative techniques.',
      sustainability: 'Natural light maximization through strategic window placement reduces artificial lighting needs. Traditional materials and techniques ensure longevity and reduce replacement cycles. Stained glass provides illumination while managing heat.'
    }
  },
  {
    id: 'artifacts',
    title: 'Museum Artifacts',
    subtitle: 'Royal Collections',
    icon: Package,
    description: 'View the precious artifacts and royal collections',
    imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&q=80',
    content: {
      title: 'Royal Collections & Hunting Museum',
      features: ['Persian miniatures and manuscripts', 'Ottoman calligraphy collection', 'Royal family portraits and furniture', '1000-piece silver service set'],
      details: 'The museum houses over 1,500 artifacts including rare manuscripts, textiles, carpets, brass, and crystal. The Hunting Museum displays the prince\'s extensive collection reflecting his interests. Items include a table made of elephant ears, royal family heirlooms donated in 1955, and artistic treasures spanning multiple Islamic dynasties.',
      sustainability: 'Digital documentation reduces physical handling. Climate-controlled displays use energy-efficient LED lighting. Conservation practices prioritize non-toxic, sustainable materials. Proper storage conditions reduce energy consumption while preserving artifacts.'
    }
  },
  {
    id: 'garden',
    title: 'Historic Garden',
    subtitle: 'Botanical Heritage',
    icon: Leaf,
    description: 'Explore the rare plants and historic botanical species',
    imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
    content: {
      title: 'The Palace Gardens',
      features: ['200+ year old banyan trees', 'Rare palm species collection', 'Persian garden design layout', 'Historic citrus groves and medicinal herbs'],
      details: 'The gardens contain over 100 rare and historic plant species, including endangered varieties preserved since the palace\'s founding. Surrounded by lush greenery that enhances its serene atmosphere, the gardens follow traditional Persian design principles with English landscape elements along the Nile branch.',
      sustainability: 'Native and adapted species require minimal irrigation. Historic trees sequester significant carbon annually. The garden serves as a living seed bank for rare species preservation. Traditional irrigation systems from the Nile minimize water waste. Organic maintenance practices protect biodiversity.'
    }
  }
];
