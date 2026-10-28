export type PriceTier = { weeks: string; perWeek: number | null };

export type Course = {
  name: string;
  nameEn?: string;
  lessonsPerWeek?: number | null;
  hoursPerWeek?: number | null;
  level?: string | null;
  prices: PriceTier[];
  notes?: string;
};

export type AccType = 'homestay' | 'residence' | 'studio' | 'shared-flat';

export type Accommodation = {
  type: AccType;
  name: string;
  bathroom?: 'shared' | 'private' | null;
  board?: 'none' | 'bb' | 'half' | 'full' | 'self' | null;
  location?: string | null;
  commute?: string | null;
  perWeek: number | null;
  minAge?: number | null;
  notes?: string;
};

export type Fees = {
  registration?: number | null;
  accommodationPlacement?: number | null;
  transferHeathrow?: number | null;
  transferGatwick?: number | null;
  transferLocal?: number | null;
  transferLocalAirport?: string | null;
  summerSupplementPerWeek?: number | null;
  summerPeriod?: string | null;
  materials?: string | number | null;
  other?: string | null;
};

export type School = {
  slug: string;
  name: string;
  brand?: string | null;
  city: string; // şehir slug'ı (londra, brighton...)
  area?: string | null;
  address?: string | null;
  nearestStation?: string | null;
  website?: string | null;
  accreditations: string[];
  minAge?: number | null;
  maxClassSize?: number | null;
  lessonMinutes?: number | null;
  founded?: number | null;
  description: string;
  highlights: string[];
  facilities: string[];
  idealFor: string[];
  courses: Course[];
  accommodation: Accommodation[];
  fees: Fees;
  priceYear: number;
  priceStatus: 'official' | 'estimated';
  sources: string[];
  lastChecked: string;
};

export type City = {
  slug: string;
  name: string;
  nameEn: string;
  code: string; // biniş kartı motifinde kullanılan kısa kod
  country: 'İngiltere' | 'İskoçya';
  region: string;
  tagline: string;
  summary: string; // meta description + kart metni
  population: string;
  fromLondon: string;
  airport: string;
  flight: string;
  climate: string;
  transport: string;
  studentProfile: string;
  budgetLevel: 1 | 2 | 3; // 1 uygun, 3 pahalı
  vibe: string[]; // "Sahil", "Akademik" gibi etiketler
  intro: string[];
  why: { title: string; text: string }[];
  areas: { name: string; text: string }[];
  accommodation: string[];
  costs: { item: string; amount: string; note?: string }[];
  monthlyBudget: string;
  dailyLife: string[];
  trips: { name: string; text: string }[];
  idealFor: string[];
  alternatives: string;
  faqs: { q: string; a: string }[];
};
