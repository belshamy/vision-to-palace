import palaceResidentialExterior from '@/assets/palace-residential-exterior.jpg';
import palaceGardenPavilion from '@/assets/palace-garden-pavilion.jpg';
import palaceMosqueExterior from '@/assets/palace-mosque-exterior.jpg';
import palaceEntranceDetail from '@/assets/palace-entrance-detail.jpg';
import palaceMosqueMinaret from '@/assets/palace-mosque-minaret.jpg';
import palaceMihrabInterior from '@/assets/palace-mihrab-interior.jpg';
import palaceCalligraphyPanel from '@/assets/palace-calligraphy-panel.jpg';
import palaceCeilingPattern from '@/assets/palace-ceiling-pattern.jpg';
import palaceThroneHall from '@/assets/palace-throne-hall.jpg';
import palaceFountainRoom from '@/assets/palace-fountain-room.jpg';

export interface BookReference {
  plate: string;
  source: string;
  description: string;
  bookImageUrl: string;
  palaceImageUrl: string;
}

export interface LayerBookComparisons {
  layerId: string;
  comparisons: BookReference[];
}

export const bookComparisons: LayerBookComparisons[] = [
  {
    layerId: 'book',
    comparisons: [
      {
        plate: 'Cover & Introduction',
        source: 'L\'Art Arabe - Prisse d\'Avennes',
        description: 'The foundational reference book that inspired Prince Mohamed Ali\'s entire architectural vision',
        bookImageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80',
        palaceImageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80'
      }
    ]
  },
  {
    layerId: 'building',
    comparisons: [
      {
        plate: 'PL.XCVII',
        source: 'Gama Barqouq',
        description: 'Main door design of Residential Palace (Haramlik) inspired by Barqouq Mosque ornamental patterns',
        bookImageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80',
        palaceImageUrl: palaceEntranceDetail
      },
      {
        plate: 'PL.LXXXVIII',
        source: 'Mimbar de la Qeycoun',
        description: 'Intricate woodwork patterns from historic mimbar adapted for palace entrance',
        bookImageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80',
        palaceImageUrl: palaceResidentialExterior
      },
      {
        plate: 'PL.C',
        source: 'Gama Sid Youcouf - Elmaz',
        description: 'Architectural elements and proportions from Mamluk-era mosque',
        bookImageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80',
        palaceImageUrl: palaceMosqueExterior
      },
      {
        plate: 'PL.CVIII',
        source: 'Mihrab de la Mosquée de Cheykhoun',
        description: 'Exterior facade decoration next to main door inspired by mihrab ornamental designs',
        bookImageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80',
        palaceImageUrl: palaceGardenPavilion
      },
      {
        plate: 'PL.XCIV',
        source: 'Compartiments et Bordures de Bois Assemblés',
        description: 'Wooden assembly techniques and geometric patterns for exterior facades',
        bookImageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80',
        palaceImageUrl: palaceMosqueMinaret
      }
    ]
  },
  {
    layerId: 'interior',
    comparisons: [
      {
        plate: 'PL.CX',
        source: 'Faïences Murales',
        description: 'Ceramic tile work patterns for Residential Saray interior walls',
        bookImageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80',
        palaceImageUrl: palaceMihrabInterior
      },
      {
        plate: 'PL.CXX',
        source: 'Faïences Murales de la Mosquée d\'Ibrahym Agha',
        description: 'Throne Hall ceramic tile designs inspired by Ibrahim Agha Mosque',
        bookImageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80',
        palaceImageUrl: palaceThroneHall
      },
      {
        plate: 'PL.CXXII',
        source: 'Mosquée d\'Ibrahym Agha',
        description: 'Additional decorative elements from Ibrahim Agha Mosque for Residential Saray',
        bookImageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80',
        palaceImageUrl: palaceCalligraphyPanel
      },
      {
        plate: 'PL.CXXI',
        source: 'Mosquée d\'Ibrahym Agha',
        description: 'Ornamental ceiling and wall patterns for residential halls',
        bookImageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80',
        palaceImageUrl: palaceCeilingPattern
      },
      {
        plate: 'PL.CXXXI',
        source: 'Couronnement de la Porte du Mimbar de Gama Sysaryeh',
        description: 'Doorway crown and decorative arch designs for Residential Saray',
        bookImageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80',
        palaceImageUrl: palaceFountainRoom
      },
      {
        plate: 'PL.LXIX',
        source: 'Mosquée d\'El-Bordeyny',
        description: 'The Prince\'s Office design elements inspired by El-Bordeyny Mosque',
        bookImageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80',
        palaceImageUrl: palaceThroneHall
      },
      {
        plate: 'PL.LXXVII',
        source: 'Mosquée Cathédrale de Qous',
        description: 'Cathedral mosque patterns adapted for Residential Saray spaces',
        bookImageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80',
        palaceImageUrl: palaceFountainRoom
      },
      {
        plate: 'PL.LXXII',
        source: 'Maison Appelée Beyt El-Tcheleby',
        description: 'Residential house decorative elements for palace interior design',
        bookImageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80',
        palaceImageUrl: palaceCeilingPattern
      }
    ]
  },
  {
    layerId: 'artifacts',
    comparisons: [
      {
        plate: 'Various Plates',
        source: 'L\'Art Arabe Collection',
        description: 'Manuscript illuminations, calligraphy styles, and decorative motifs documented in the book influenced the selection and display of artifacts',
        bookImageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80',
        palaceImageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&q=80'
      }
    ]
  },
  {
    layerId: 'garden',
    comparisons: [
      {
        plate: 'PL.CIV, PL.CVL',
        source: 'Palace Mosque',
        description: 'The palace mosque design integrating harmoniously with garden layouts, inspired by traditional Islamic garden-mosque relationships',
        bookImageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80',
        palaceImageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80'
      }
    ]
  }
];

export const getComparisonsForLayer = (layerId: string): BookReference[] => {
  const layerComparisons = bookComparisons.find(lc => lc.layerId === layerId);
  return layerComparisons?.comparisons || [];
};
