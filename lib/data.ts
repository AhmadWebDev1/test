import { Locale } from './translations';

export const travelerData = {
  images: {
    logo: '/images/logo.png',
    picture: '/images/profile.jpg',
    hero: '/images/hero.jpg',
    about: '/images/about.jpg',
  },
  ar: {
    name: "أحمد السفار",
    title: "مستكشف العالم ومحب للمغامرات",
    email: "ahmed.traveler@email.com",
    phone: "+966 50 123 4567",
    address: "الرياض، المملكة العربية السعودية",
  },
  en: {
    name: "Ahmad Al-Saffar",
    title: "World Explorer & Adventure Lover", 
    email: "ahmed.traveler@email.com",
    phone: "+966 50 123 4567",
    address: "Riyadh, Saudi Arabia",
  },
  de: {
    name: "Ahmad Al-Saffar",
    title: "Weltentdecker & Abenteuerliebhaber",
    email: "ahmed.traveler@email.com", 
    phone: "+966 50 123 4567",
    address: "Riad, Saudi-Arabien",
  },
  social: {
    instagram: "https://instagram.com/ahmed_traveler",
    twitter: "https://twitter.com/ahmed_traveler",
    facebook: "https://facebook.com/ahmed.traveler",
    youtube: "https://youtube.com/@ahmedtraveler",
    tiktok: "https://tiktok.com/@ahmed_traveler",
    whatsapp: "https://wa.me/966501234567"
  }
};

export const travels = [
  {
    id: 1,
    city: {
      ar: "باريس",
      en: "Paris", 
      de: "Paris"
    },
    country: {
      ar: "فرنسا",
      en: "France",
      de: "Frankreich"
    },
    lat: 48.8566,
    lng: 2.3522,
    date: {
      ar: "مارس 2023",
      en: "March 2023",
      de: "März 2023"
    },
    duration: {
      ar: "7 أيام",
      en: "7 days",
      de: "7 Tage"
    },
    description: {
      ar: "رحلة ساحرة إلى مدينة النور. زرت برج إيفل ومتحف اللوفر، وتذوقت أشهى المعجنات الفرنسية في الشوارع الضيقة لمونمارتر.",
      en: "A magical journey to the City of Light. I visited the Eiffel Tower and the Louvre Museum, and tasted the most delicious French pastries in the narrow streets of Montmartre.",
      de: "Eine magische Reise in die Stadt des Lichts. Ich besuchte den Eiffelturm und das Louvre-Museum und probierte die köstlichsten französischen Gebäcke in den engen Straßen von Montmartre."
    },
    image: "https://picsum.photos/400/250?random=3"
  },
  {
    id: 2,
    city: {
      ar: "بحيرة سيلبسي",
      en: "Seealpsee",
      de: "Seealpsee"
    },
    country: {
      ar: "سويسرا",
      en: "Switzerland",
      de: "Schweiz"
    },
    lat: 47.2684,
    lng: 9.4008,
    date: {
      ar: "يونيو 2023",
      en: "June 2023",
      de: "Juni 2023"
    },
    duration: {
      ar: "10 أيام",
      en: "10 days",
      de: "10 Tage"
    },
    description: {
      ar: "تجربة مذهلة في جبال الألب السويسرية. استكشفت البحيرات الصافية والقمم المغطاة بالثلوج، وتنفست الهواء النقي في أحد أجمل المناظر الطبيعية في العالم.",
      en: "An amazing experience in the Swiss Alps. I explored crystal-clear lakes and snow-capped peaks, breathing pure air in one of the world's most beautiful natural landscapes.",
      de: "Ein erstaunliches Erlebnis in den Schweizer Alpen. Ich erkundete kristallklare Seen und schneebedeckte Gipfel und atmete reine Luft in einer der schönsten Naturlandschaften der Welt."
    },
    image: "https://picsum.photos/400/250?random=4"
  },
  {
    id: 3,
    city: {
      ar: "نيويورك",
      en: "New York",
      de: "New York"
    },
    country: {
      ar: "أمريكا",
      en: "United States",
      de: "Vereinigte Staaten"
    },
    lat: 40.7128,
    lng: -74.0060,
    date: {
      ar: "سبتمبر 2023",
      en: "September 2023",
      de: "September 2023"
    },
    duration: {
      ar: "5 أيام",
      en: "5 days",
      de: "5 Tage"
    },
    description: {
      ar: "المدينة التي لا تنام! زرت تمثال الحرية وسنترال بارك، وشاهدت عرضاً موسيقياً في برودواي. تجربة لا تُنسى!",
      en: "The city that never sleeps! I visited the Statue of Liberty and Central Park, and watched a musical on Broadway. An unforgettable experience!",
      de: "Die Stadt, die niemals schläft! Ich besuchte die Freiheitsstatue und den Central Park und sah ein Musical am Broadway. Ein unvergessliches Erlebnis!"
    },
    image: "https://picsum.photos/400/250?random=5"
  },
  {
    id: 4,
    city: {
      ar: "روما",
      en: "Rome",
      de: "Rom"
    },
    country: {
      ar: "إيطاليا",
      en: "Italy",
      de: "Italien"
    },
    lat: 41.9028,
    lng: 12.4964,
    date: {
      ar: "نوفمبر 2023",
      en: "November 2023",
      de: "November 2023"
    },
    duration: {
      ar: "6 أيام",
      en: "6 days",
      de: "6 Tage"
    },
    description: {
      ar: "رحلة عبر التاريخ في المدينة الخالدة. زرت الكولوسيوم والفاتيكان، وتذوقت أشهى البيتزا والباستا الإيطالية الأصلية.",
      en: "A journey through history in the Eternal City. I visited the Colosseum and Vatican, and tasted the most delicious authentic Italian pizza and pasta.",
      de: "Eine Reise durch die Geschichte in der Ewigen Stadt. Ich besuchte das Kolosseum und den Vatikan und probierte die köstlichste authentische italienische Pizza und Pasta."
    },
    image: "https://picsum.photos/400/250?random=6"
  },
  {
    id: 5,
    city: {
      ar: "دبي",
      en: "Dubai",
      de: "Dubai"
    },
    country: {
      ar: "الإمارات",
      en: "UAE",
      de: "VAE"
    },
    lat: 25.2048,
    lng: 55.2708,
    date: {
      ar: "يناير 2024",
      en: "January 2024",
      de: "Januar 2024"
    },
    duration: {
      ar: "4 أيام",
      en: "4 days",
      de: "4 Tage"
    },
    description: {
      ar: "مدينة المستقبل في قلب الصحراء. صعدت إلى برج خليفة وتسوقت في دبي مول، وخضت مغامرة سفاري في الصحراء العربية.",
      en: "The city of the future in the heart of the desert. I went up to Burj Khalifa and shopped at Dubai Mall, and had a safari adventure in the Arabian desert.",
      de: "Die Stadt der Zukunft im Herzen der Wüste. Ich fuhr zum Burj Khalifa hoch und kaufte in der Dubai Mall ein und hatte ein Safari-Abenteuer in der arabischen Wüste."
    },
    image: "https://picsum.photos/400/250?random=7"
  },
  {
    id: 6,
    city: {
      ar: "بالي",
      en: "Bali",
      de: "Bali"
    },
    country: {
      ar: "إندونيسيا",
      en: "Indonesia",
      de: "Indonesien"
    },
    lat: -8.3405,
    lng: 115.0920,
    date: {
      ar: "أبريل 2024",
      en: "April 2024",
      de: "April 2024"
    },
    duration: {
      ar: "8 أيام",
      en: "8 days",
      de: "8 Tage"
    },
    description: {
      ar: "جنة استوائية بشواطئها الذهبية ومعابدها القديمة. استمتعت بالغطس وزرت مدرجات الأرز الخضراء في تيجالالانغ.",
      en: "A tropical paradise with golden beaches and ancient temples. I enjoyed diving and visited the green rice terraces in Tegallalang.",
      de: "Ein tropisches Paradies mit goldenen Stränden und alten Tempeln. Ich genoss das Tauchen und besuchte die grünen Reisterrassen in Tegallalang."
    },
    image: "https://picsum.photos/400/250?random=8"
  }
];

export const stats = [
  { 
    label: {
      ar: "دولة زرتها",
      en: "Countries Visited",
      de: "Besuchte Länder"
    }, 
    value: 25, 
    icon: "plane" 
  },
  { 
    label: {
      ar: "مدينة استكشفتها",
      en: "Cities Explored", 
      de: "Erkundete Städte"
    }, 
    value: 100, 
    icon: "city" 
  },
  { 
    label: {
      ar: "قارات",
      en: "Continents",
      de: "Kontinente"
    }, 
    value: 5, 
    icon: "globe" 
  },
  { 
    label: {
      ar: "كيلومتر",
      en: "Kilometers",
      de: "Kilometer"
    }, 
    value: 250, 
    suffix: "k+", 
    icon: "route" 
  }
];

// Helper function to get localized content
export const getLocalizedContent = (content: any, locale: Locale) => {
  if (typeof content === 'object' && content[locale]) {
    return content[locale];
  }
  return content;
};