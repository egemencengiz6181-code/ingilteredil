// Google Ads açılış sayfası tanımları. Reklam metniyle aynı vaadi taşır (mesaj eşleşmesi → Kalite Puanı).
import { schools, schoolsInCity, minCoursePrice, sampleTotal } from './index';
import { allInclusive } from './content';
import type { School } from './types';

export type Lp = {
  slug: string; h1: string; sub: string; bullets: string[]; city?: string; program?: string;
  pool: () => School[]; wa: string; title: string;
};

const cheapest = (list: School[], n = 6) =>
  [...list].filter((s) => minCoursePrice(s)).sort((a, b) => sampleTotal(a).total - sampleTotal(b).total).slice(0, n);

export const lps: Lp[] = [
  {
    slug: 'ingiltere-dil-okulu',
    title: 'İngiltere Dil Okulu Fiyatları ve Ücretsiz Teklif',
    h1: 'İngiltere’de dil okulu: size özel fiyat teklifi aynı gün',
    sub: `${schools.length} akredite okul arasından bütçenize ve hedefinize uygun 3 okulu, kurs + konaklama + ek ücretler dahil toplam maliyetle karşılaştıralım.`,
    bullets: ['Danışmanlık ücretsiz, okulun resmi fiyatı', 'Vize dosyası ve konaklama tek elden', 'Havalimanında isminizle karşılama'],
    pool: () => cheapest(schools),
    wa: 'Merhaba, İngiltere’de dil okulu için fiyat teklifi almak istiyorum.',
  },
  {
    slug: 'londra-dil-okulu',
    city: 'londra',
    title: 'Londra Dil Okulu Fiyatları 2027 ve Ücretsiz Teklif',
    h1: 'Londra’da dil okulu: haftalık fiyatlar ve size özel teklif',
    sub: 'Londra’daki akredite okulları kurs, aile yanı veya yurt ve tüm ek ücretlerle birlikte karşılaştırın; kaydınızı ve vize dosyanızı biz hazırlayalım.',
    bullets: ['Zone 1’de British Council onaylı okullar', 'Aile yanı ve faturalar dahil öğrenci yurtları', 'Heathrow’da karşılama ve transfer'],
    pool: () => cheapest(schoolsInCity('londra')),
    wa: 'Merhaba, Londra’da dil okulu için fiyat teklifi almak istiyorum.',
  },
  {
    slug: 'her-sey-dahil-londra',
    city: 'londra',
    program: 'Her şey dahil Londra paketi',
    title: `Her Şey Dahil Londra Dil Okulu Paketi: £${allInclusive.prices[0].price.toLocaleString('tr-TR')}’dan`,
    h1: `Her şey dahil Londra dil okulu: 2 hafta £${allInclusive.prices[0].price.toLocaleString('tr-TR')}’dan`,
    sub: 'Uçak, vize ücreti, sigorta, özel banyolu yurt odası, VIP karşılama ve Londra eğlence paketi tek fiyatta. Sürpriz masraf yok.',
    bullets: ['Tek kişilik, özel banyolu oda', 'Uçak + vize + sigorta dahil', 'London Eye, Thames turu, şehir turu dahil'],
    pool: () => [],
    wa: 'Merhaba, her şey dahil Londra paketi için tarih ve kontenjan bilgisi almak istiyorum.',
  },
  {
    slug: 'uygun-fiyatli-ingiltere-dil-okulu',
    title: 'Uygun Fiyatlı İngiltere Dil Okulları: Manchester, Liverpool, Leeds',
    h1: 'İngiltere’de uygun fiyatlı dil okulu arayanlara',
    sub: 'Manchester, Liverpool, Leeds, Birmingham ve sahil şehirlerinde Londra’dan %30’a varan daha düşük toplam maliyetle akredite okullar.',
    bullets: ['Kurs + aile yanı 4 hafta için en uygun seçenekler', 'İstanbul’dan Manchester ve Birmingham’a direkt uçuş', 'Uzun programlarda haftalık indirimli fiyatlar'],
    pool: () => cheapest(schools.filter((s) => ['manchester', 'liverpool', 'leeds', 'birmingham', 'bournemouth', 'eastbourne'].includes(s.city))),
    wa: 'Merhaba, İngiltere’de uygun fiyatlı dil okulu seçenekleri hakkında bilgi almak istiyorum.',
  },
  {
    slug: '30-yas-ustu-ingiltere-dil-okulu',
    program: '30 yaş üstü program',
    title: '30 Yaş Üstü İngiltere Dil Okulları ve Programları',
    h1: '30 yaş üstü için İngiltere’de dil okulu',
    sub: 'Yetişkin ve profesyonellerle aynı sınıfta, sakin tempolu 30+ programlar ve iş İngilizcesi. Size uygun okulu ve konaklamayı birlikte seçelim.',
    bullets: ['30+ ve 25+ yaş sınıfları', 'İş İngilizcesi ve birebir ders seçenekleri', 'Stüdyo ve özel banyolu konaklama'],
    pool: () => cheapest(schools.filter((s) => s.courses.some((c) => /30|executive|mature|25\+|adult|business|iş/i.test(`${c.name} ${c.nameEn ?? ''}`)))),
    wa: 'Merhaba, 30 yaş üstü İngiltere dil okulu programları hakkında bilgi almak istiyorum.',
  },
];
