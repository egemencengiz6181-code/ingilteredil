import type { City, School, Course, Accommodation } from './types';
import { londra } from './cities/londra';
import { brighton, eastbourne, bournemouth, canterbury } from './cities/south';
import { oxford, cambridge, bath, bristol } from './cities/academic';
import { manchester, liverpool, leeds, york, birmingham, edinburgh } from './cities/north';

// Sıralama = sitedeki gösterim sırası (arama hacmine göre)
export const cities: City[] = [
  londra, brighton, oxford, cambridge, manchester, bournemouth, edinburgh,
  liverpool, bristol, bath, eastbourne, york, birmingham, leeds, canterbury,
];

export const cityBySlug = (slug: string) => cities.find((c) => c.slug === slug);

// Türkçe bulunma eki, okunuşa göre (Leeds → "liids" → 'te', Cambridge → "keymbriç" → 'de')
const LOC: Record<string, string> = {
  londra: 'da', brighton: 'da', oxford: 'da', cambridge: 'de', manchester: 'da', bournemouth: 'ta',
  edinburgh: 'ta', liverpool: 'da', bristol: 'da', bath: 'ta', eastbourne: 'da', york: 'ta',
  birmingham: 'da', leeds: 'te', canterbury: 'de',
};
/** "Londra’da", "Leeds’te" */
export const cityIn = (c: City) => `${c.name}’${LOC[c.slug] ?? 'da'}`;
export const cityPath = (c: City | string) => `/${typeof c === 'string' ? c : c.slug}-dil-okullari/`;
export const schoolPath = (s: School) => `/dil-okullari/${s.slug}/`;

// Okul verileri src/data/schools/<şehir>.json dosyalarından okunur.
// EC English hiçbir koşulda listelenmez.
const files = import.meta.glob<{ city: string; schools: Omit<School, 'city'>[] }>('./schools/*.json', {
  eager: true,
  import: 'default',
});

export const schools: School[] = Object.values(files)
  // priceYear yayımlanmamışsa (yıl belirtmeyen fiyat sayfaları) kontrol yılı kabul edilir
  .flatMap((f) => f.schools.map((s) => ({ ...s, city: f.city, priceYear: s.priceYear ?? Number(s.lastChecked?.slice(0, 4) ?? 2026) }) as School))
  .filter((s) => !/\bEC (English|London|Brighton|Cambridge|Oxford|Manchester|Bristol)\b|ec-english/i.test(`${s.name} ${s.brand ?? ''} ${s.slug}`))
  .filter((s) => cityBySlug(s.city))
  .sort((a, b) => cities.indexOf(cityBySlug(a.city)!) - cities.indexOf(cityBySlug(b.city)!) || a.name.localeCompare(b.name, 'tr'));

export const schoolsInCity = (slug: string) => schools.filter((s) => s.city === slug);
export const schoolBySlug = (slug: string) => schools.find((s) => s.slug === slug);

// --- Fiyat yardımcıları ---

export const gbp = (n: number | null | undefined) => (n == null ? '—' : `£${Math.round(n).toLocaleString('tr-TR')}`);

const tierPrices = (c: Course) => c.prices.map((p) => p.perWeek).filter((n): n is number => typeof n === 'number' && n > 0);

/** Genel İngilizce (ya da ilk kurs) için en yüksek kademe = kısa süreli haftalık fiyat */
export function mainCourse(s: School): Course | undefined {
  return (
    s.courses.find((c) => /general english/i.test(c.nameEn ?? '') && !/intensive|plus|30/i.test(c.nameEn ?? '')) ??
    s.courses.find((c) => /genel/i.test(c.name)) ??
    s.courses[0]
  );
}

// Akşam/yarı zamanlı kurslar "başlangıç fiyatı"nı yanıltıcı biçimde düşürmesin
const fullTime = (c: Course) =>
  (c.lessonsPerWeek ?? 0) >= 15 || (c.hoursPerWeek ?? 0) >= 12 || (c.lessonsPerWeek == null && c.hoursPerWeek == null);

/** Tam zamanlı kursların en düşük haftalık fiyatı ("haftalık £X'den başlayan") */
export function minCoursePrice(s: School): number | null {
  const pool = s.courses.some(fullTime) ? s.courses.filter(fullTime) : s.courses;
  const all = pool.flatMap(tierPrices);
  return all.length ? Math.min(...all) : null;
}

/** Ana kursun 1-11 hafta (en yüksek) haftalık fiyatı */
export function shortCoursePrice(s: School): number | null {
  const c = mainCourse(s);
  if (!c) return null;
  const p = tierPrices(c);
  return p.length ? Math.max(...p) : null;
}

export function minAccPrice(list: Accommodation[], type?: Accommodation['type']): number | null {
  const p = list.filter((a) => !type || a.type === type).map((a) => a.perWeek).filter((n): n is number => typeof n === 'number' && n > 0);
  return p.length ? Math.min(...p) : null;
}

/** Bir kurs için verilen hafta sayısında geçerli haftalık fiyat */
export function priceForWeeks(c: Course, weeks: number): number | null {
  const parsed = c.prices
    .map((p) => {
      const m = p.weeks.match(/(\d+)\s*(?:[-–]\s*(\d+)|\+)?/);
      if (!m) return null;
      const lo = Number(m[1]);
      const hi = m[2] ? Number(m[2]) : p.weeks.includes('+') ? 99 : lo;
      return { lo, hi, v: p.perWeek };
    })
    .filter((x): x is { lo: number; hi: number; v: number | null } => !!x && x.v != null);
  const hit = parsed.find((p) => weeks >= p.lo && weeks <= p.hi);
  if (hit) return hit.v;
  if (!parsed.length) return null;
  // kademeler arasında boşluk varsa hafta sayısına en yakın alt kademe (yoksa ilk kademe)
  const sorted = parsed.sort((a, b) => a.lo - b.lo);
  return [...sorted].reverse().find((p) => p.lo <= weeks)?.v ?? sorted[0].v;
}

/** 4 haftalık örnek toplam: kurs + aile yanı + kayıt + yerleştirme */
export function sampleTotal(s: School, weeks = 4) {
  const c = mainCourse(s);
  const course = c ? (priceForWeeks(c, weeks) ?? 0) * weeks : 0;
  const acc = (minAccPrice(s.accommodation, 'homestay') ?? minAccPrice(s.accommodation) ?? 0) * weeks;
  const fees = (s.fees.registration ?? 0) + (s.fees.accommodationPlacement ?? 0);
  return { course, acc, fees, total: course + acc + fees };
}

export function cityMinPrice(slug: string): number | null {
  const p = schoolsInCity(slug).map(minCoursePrice).filter((n): n is number => n != null);
  return p.length ? Math.min(...p) : null;
}

export function cityMinAcc(slug: string): number | null {
  const p = schoolsInCity(slug).map((s) => minAccPrice(s.accommodation)).filter((n): n is number => n != null);
  return p.length ? Math.min(...p) : null;
}

export const ACC_LABEL: Record<string, string> = {
  homestay: 'Aile yanı',
  residence: 'Öğrenci yurdu',
  studio: 'Stüdyo',
  'shared-flat': 'Paylaşımlı daire',
};
export const BOARD_LABEL: Record<string, string> = {
  none: 'Yemeksiz',
  self: 'Kendi mutfağı',
  bb: 'Oda + kahvaltı',
  half: 'Yarım pansiyon',
  full: 'Tam pansiyon',
};
export const BATH_LABEL: Record<string, string> = { shared: 'Ortak banyo', private: 'Özel banyo' };
