import { BookOpen, Building2, Palette, Package, Leaf, Shield } from 'lucide-react';

export interface LayerContent {
  title: string;
  quote?: string;
  features?: string[];
  details: string;
  sustainability: string;
  additionalInfo?: string;
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
      details: 'Written between 1901-1929, Prince Mohamed Ali Tewfik (1875-1955), uncle of King Farouk, documented his architectural vision with meticulous detail. Drawing profound inspiration from "L\'Art Arabe" by Émile Prisse d\'Avennes, one of the most important books on Islamic antiquities in Egypt, the prince personally designed every architectural and decorative element. He supervised the selection of materials, furniture, and antiques from Arab and foreign countries, intending his palace to revive and honor Islamic arts while presenting them in a refined, modern context.',
      sustainability: 'The prince\'s writings reveal deep appreciation for natural ventilation, water conservation, and harmonious integration with the landscape - principles that align with modern sustainable architecture.',
      additionalInfo: 'The prince was not satisfied with just painting or finishing; he chose every detail himself, presenting the palace as an Arab/Islamic masterpiece that revives past Islamic decorations in a contemporary context of exquisite execution.'
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
      features: ['Ottoman-inspired facades', 'Mashrabiya screens for natural cooling', 'Clock tower inspired by Hassan Mosque', 'Persian garden integration', 'Fusion of European Art Nouveau and Rococo with Islamic traditions'],
      details: 'The palace complex showcases Islamic architectural excellence built between 1899-1929 on Manial Island. It features five distinctive structures: the Residence Palace (first built in 1903), Reception Palace, Throne Palace, the Mosque, and the Clock Tower. The design integrates European Art Nouveau and Rococo with traditional Islamic architectural traditions inspired by the arts of the Fatimids, Mamluks, and Ottomans. The palace combines several Islamic decorative styles - from Mamluk to Ottoman to Andalusian - with influences from Moroccan, Syrian, and Persian architecture.',
      sustainability: 'Traditional passive cooling systems reduce energy consumption by up to 40%. Mashrabiya screens provide natural ventilation while maintaining privacy. The strategic orientation maximizes natural light and minimizes heat gain. These time-tested techniques demonstrate how historical architecture incorporated sustainable principles centuries before modern green building standards.',
      additionalInfo: 'All structures are surrounded by an outer wall and set within remarkable gardens, creating a unified artistic complex that represents a comprehensive school of Islamic art.'
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
      title: 'The Golden Throne Hall & Decorative Spaces',
      features: ['Persian tile mosaics by David Ohannessian', 'Hand-painted ceilings with golden sunburst', 'Moroccan Hall with colorful windows', 'Syrian Hall with Ottoman carved wood', 'Intricate arabesques and geometric patterns', 'Qashani tiles with floral decorations'],
      details: 'The palace\'s interiors are lavishly adorned with colored tiles, intricate geometric and floral motifs, plaster and wood carvings, silver inlays, and mirrors. Each hall represents a different cultural influence - from Mamluk geometric patterns to Persian floral motifs, Syrian carved wooden panels (sadaib), and Andalusian elements. The Throne Hall features a striking golden sunburst ceiling, while the Aubusson Room displays prized French tapestries. The Mirror Hall and Shell Salon showcase intricate decorative techniques that unite multiple elements of Islamic art within a single monumental complex.',
      sustainability: 'Natural light maximization through strategic window placement reduces artificial lighting needs by up to 60%. Traditional materials and artisan techniques ensure longevity and reduce replacement cycles. Stained glass provides beautiful illumination while managing heat transfer. The use of natural, local materials reduces environmental impact.',
      additionalInfo: 'The decorative details highlight the strong influence of traditional Islamic art, adapted with contemporary touches. These spaces form a unified artistic and cultural narrative that distinguishes the palace as a comprehensive school of Islamic decorative arts.'
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
      features: ['Persian miniatures and manuscripts', 'Ottoman calligraphy collection', 'Royal family portraits and furniture', '1000-piece silver service set', 'Bronze objects and arms collection', 'Artistic treasures from multiple Islamic dynasties'],
      details: 'The museum houses over 1,500 precious artifacts including rare manuscripts, textiles, carpets, brass, crystal, and bronze objects, forming a unified artistic and cultural narrative. The Hunting Museum displays the prince\'s extensive personal collection. Notable items include a unique table made of elephant ears, royal family heirlooms donated in 1955, and artistic treasures spanning multiple Islamic dynasties. The collections represent centuries of Islamic craftsmanship and royal heritage.',
      sustainability: 'Digital documentation and archiving reduce physical handling of delicate artifacts. Climate-controlled displays use energy-efficient LED lighting systems. Conservation practices prioritize non-toxic, sustainable materials and traditional restoration techniques. Advanced monitoring systems ensure proper storage conditions while minimizing energy consumption. Virtual exhibits allow global access without physical strain on the collections.',
      additionalInfo: 'The collections reflect Prince Mohamed Ali\'s dedication to preserving Islamic cultural heritage and his personal interests in hunting and natural history.'
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
      features: ['200+ year old banyan trees', 'Rare palm species collection', 'Persian garden design layout', 'Historic citrus groves and medicinal herbs', 'English landscape elements along the Nile', 'Living seed bank for rare species'],
      details: 'The gardens contain over 100 rare and historic plant species, including endangered varieties preserved since the palace\'s founding in 1899. Surrounded by lush greenery that enhances the palace\'s serene atmosphere, the gardens follow traditional Persian design principles integrated with English landscape elements along the Nile branch. The botanical collection represents the prince\'s appreciation for harmonious integration with the natural landscape.',
      sustainability: 'Native and adapted species require minimal irrigation, reducing water consumption by up to 70%. Historic trees sequester significant carbon dioxide annually. The garden serves as a living seed bank for rare species preservation and biodiversity protection. Traditional irrigation systems utilizing the Nile minimize water waste through centuries-old sustainable techniques. Organic maintenance practices protect local ecosystems and wildlife habitats.',
      additionalInfo: 'The gardens reflect the prince\'s documented philosophy of harmonious integration with nature, where every garden element breathes life into the palace\'s historical narrative.'
    }
  },
  {
    id: 'preservation',
    title: 'Preservation & Conservation',
    subtitle: 'Sustainable Heritage Management',
    icon: Shield,
    description: 'Modern preservation strategies protecting cultural heritage',
    imageUrl: 'https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=800&q=80',
    content: {
      title: 'Sustainable Preservation Strategy',
      features: [
        'Digital archiving and 3D scanning technology',
        'Smart sensors for climate monitoring',
        'Visitor management systems',
        'Traditional restoration techniques',
        'Community engagement programs',
        'Advanced risk management protocols'
      ],
      details: 'The palace faces preservation challenges including environmental factors (rising temperatures, humidity, air pollution), urban development pressures, tourism impact, and funding limitations. A comprehensive sustainable management approach addresses these through conservation over replacement, energy efficiency, adaptive reuse, and community engagement. Advanced technologies like 3D scanning, drone imaging, smart sensors, and virtual reality experiences enable accurate monitoring while minimizing physical strain on the structure. The preservation strategy emphasizes collaboration among government agencies, heritage organizations, academic institutions, and local communities.',
      sustainability: 'The preservation framework integrates preventive and "green" conservation practices. Solar-powered lighting and energy-efficient climate control systems reduce the site\'s carbon footprint. Flood prevention measures and protective coatings shield vulnerable surfaces. Limited daily visitor numbers reduce structural wear while ticket revenue funds ongoing maintenance. Educational programs raise awareness and inspire future generations to protect cultural heritage. Digital preservation ensures long-term accessibility without physical handling of artifacts.',
      additionalInfo: 'Located on Rhoda Island (Manial Island), Cairo • Built 1899-1929 by Prince Mohamed Ali Tewfik • Opened as museum in 1955 after royal family donations • Open Daily 9 AM - 4 PM • UNESCO-recognized cultural heritage site'
    }
  }
];
