// Okul dışı içerikler: yurtlar, her şey dahil paket, yorumlar, genel SSS.

export const RESIDENCES_UPDATED = '10.10.2026';

// Konaklama partneri yurtları: haftalık "başlayan" fiyatlar, kişi başı
export const residences = [
  { city: 'londra', name: 'Your TRIBE Southwark', area: 'Peckham (Zone 2)', address: '28 Ruby Street, SE15 1LL', perWeek: 238, text: 'Tasarım odaklı, sürdürülebilir bir yurt; ortak yaşam alanları ve güçlü topluluk hayatı.' },
  { city: 'londra', name: 'Sterling Court', area: 'Wembley (Zone 4)', address: '6 Lakeside Way, HA9 0BU', perWeek: 253, text: 'Faturalar dahil, hızlı internet ve 7/24 yerinde ekip desteği sunan uygun fiyatlı yurt.' },
  { city: 'londra', name: 'McMillan Residence', area: 'Greenwich (Zone 2)', address: 'Creek Rd, SE8 3BU', perWeek: 280, text: 'Greenwich istasyonuna 10 dakika; sakin bir bölgede stüdyolar.' },
  { city: 'londra', name: 'Wembley Arthur House', area: 'Wembley Park (Zone 4)', address: '1 Rutherford Way, HA9 0BP', perWeek: 403, text: 'Kafe, kütüphane, spor salonu ve yoga stüdyosu bulunan geniş olanaklı yurt.' },
  { city: 'londra', name: 'Islington Residence', area: 'Caledonian Road (Zone 2)', address: '32-34 Market Rd, N7 9AW', perWeek: 407, text: 'İstasyona 5 dakika; spor salonu ve sinema odası.' },
  { city: 'londra', name: 'White City Residence', area: 'White City (Zone 2)', address: '10 Westway, W12 0DD', perWeek: 445, text: 'Faturalar dahil, güvenli girişli modern stüdyolar.' },
  { city: 'londra', name: 'Shoreditch Residence', area: 'Old Street (Zone 1)', address: '2 Silicon Way, N1 6AT', perWeek: 515, text: 'Old Street’e 5 dakika; spor salonu, sinema ve çalışma alanları.' },
  { city: 'londra', name: 'Highbury Residence II', area: 'Holloway Road (Zone 2)', address: '295 Holloway Road, N7 8HS', perWeek: 518, text: 'Holloway Road istasyonuna 3 dakika; merkeze kolay ulaşım.' },
  { city: 'londra', name: 'Old Street Residence', area: 'Old Street (Zone 1)', address: '18 Paul St, EC2A 4JH', perWeek: 551, text: 'Şehrin kalbinde; sinema odası ve sosyal alanlar.' },
  { city: 'londra', name: 'Spitalfields Residence', area: 'Liverpool Street (Zone 1)', address: '9 Frying Pan Alley, E1 7HS', perWeek: 575, text: 'Şehir manzaralı çatı katı kafesiyle merkezi, lüks yurt.' },
  { city: 'londra', name: 'King’s Cross Residence', area: 'King’s Cross (Zone 1)', address: '200 Pentonville Rd, N1 9JP', perWeek: 595, text: 'King’s Cross St Pancras’a 5 dakika; Eurostar’a yürüme mesafesi.' },
  { city: 'londra', name: 'Westminster Residence', area: 'Lambeth (Zone 1)', address: '200A Lambeth Road, SE1 7LR', perWeek: 598, text: 'Waterloo’ya yakın, Londra’nın simge yapılarının yanı başında.' },
  { city: 'leeds', name: 'Briggate Studios', area: 'Şehir merkezi', address: '12 Briggate, LS1 6AA', perWeek: 179, text: 'Şehir merkezinde özel stüdyolar; kısa ve uzun dönem kalış.' },
  { city: 'brighton', name: 'Brighton Residence', area: 'Lewes Road', address: '7 The Furlong, BN2 4FR', perWeek: null, text: 'University of Brighton kampüsünün yanında; dil okullarına otobüsle kısa mesafe.' },
];

export const allInclusive = {
  name: 'Londra Her Şey Dahil Dil Eğitimi Paketi',
  minAge: 18,
  lessons: 'Haftada 15 saat İngilizce',
  room: 'Tek kişilik, özel banyolu yurt odası',
  prices: [
    { weeks: 2, price: 2950 },
    { weeks: 3, price: 3350 },
    { weeks: 4, price: 4150 },
    { weeks: 6, price: 4750 },
    { weeks: 8, price: 5875 },
    { weeks: 10, price: 6750 },
  ],
  included: [
    'Haftada 15 saat İngilizce eğitimi (akredite okulda)',
    'Tek kişilik, özel banyolu yurt odasında konaklama',
    'Tek yön uçak bileti',
    'Vize başvuru ücreti ve vize dosyası hazırlığı',
    'Sağlık sigortası',
    'VIP havalimanı karşılama ve konaklamaya transfer',
    'İngiltere SIM kart (dakika + 40 GB internet)',
    'Londra – Brighton gidiş-dönüş otobüs bileti',
    'London Eye bileti',
    'Hop On Hop Off şehir turu',
    'Thames Nehri tekne turu',
  ],
  notIncluded: ['Dönüş uçak bileti', 'Yemekler ve kişisel harcamalar', 'Toplu taşıma kartı (Oyster)'],
};

// Öğrenci yorumları: yalnızca gerçek, izinli yorumlar eklenmeli.
export const testimonials = [
  {
    name: 'Serap B.',
    program: 'Yaz okulu · İngiltere & İrlanda (veli)',
    text: 'Kızımı hem İngiltere hem de İrlanda’ya yaz okuluna gönderdik. Her ikisinde de çok memnun kaldık. Bizi doğru yönlendirdikleri ve ilk günden Türkiye’ye dönene kadar tüm süreçleri titizlikle takip ettikleri için çok teşekkür ederiz.',
    source: 'Google yorumu',
  },
  {
    name: 'Kaan K.',
    program: 'Yurt dışı eğitim',
    text: 'Kaliteli danışmanlık alabileceğiniz ve yurt dışına gitme sürecinizde yardımcı olan bir ekip. Çok tecrübeli ve bilgililer; yurt dışında eğitim alma sürecimde bana çok yardımcı oldular. Sizlere de onlarla çalışmanızı tavsiye ediyorum.',
    source: 'Google yorumu',
  },
  {
    name: 'Mert D.',
    program: 'Yurt dışı eğitim',
    text: 'Harika bir eğitim yolculuğuna çıkabilirsiniz. Son derece ilgili, güler yüzlü ve deneyimli bir ekip.',
    source: 'Google yorumu',
  },
];

export const studentPhotos = [
  { src: '/img/ogrenciler/ogrenci-1.jpg', w: 900, h: 900, caption: 'Sertifika töreni', place: 'ES London, Londra' },
  { src: '/img/ogrenciler/ogrenci-2.jpg', w: 506, h: 900, caption: 'Mezuniyet günü', place: 'ES London, Londra' },
  { src: '/img/ogrenciler/ogrenci-3.jpg', w: 675, h: 900, caption: 'Kurs tamamlandı', place: 'ES London, Londra' },
  { src: '/img/ogrenciler/ogrenci-4.jpg', w: 621, h: 900, caption: 'Okulda bir gün', place: 'ES London, Londra' },
];

// Uçtan uca süreç: ana sayfa, paket ve LP'lerde kullanılır
export const steps = [
  { t: 'Ücretsiz ön görüşme', d: 'Hedefinizi, seviyenizi, tarihlerinizi ve bütçenizi konuşuruz; size uygun 2–3 şehir ve okulu belirleriz.' },
  { t: 'Yazılı karşılaştırmalı teklif', d: 'Okulların güncel kurs, konaklama ve ek ücretlerini tek tabloda, toplam maliyetle birlikte iletiriz.' },
  { t: 'Kayıt ve konaklama', d: 'Okul kaydınızı yapar, aile yanı, yurt veya stüdyo rezervasyonunuzu sizin adınıza tamamlarız.' },
  { t: 'Vize dosyası', d: 'Evrak listenizi hazırlar, banka ve sponsor belgelerini kontrol eder, formu doldurur, randevunuzu takip ederiz.' },
  { t: 'Uçuş öncesi oryantasyon', d: 'İlk gün, ulaşım, Oyster kart, SIM kart, bütçe ve İngiltere’de günlük hayat hakkında bilgilendirme.' },
  { t: 'Havalimanı karşılama ve takip', d: 'Sizi havalimanında karşılar, konaklamanıza götürürüz; eğitim boyunca WhatsApp’tan yanınızdayız.' },
];

export const generalFaqs = [
  { q: 'İngiltere’de dil okulu fiyatları ne kadar?', a: 'Akredite okullarda haftada 20 derslik Genel İngilizce kursu şehir ve süreye göre haftalık yaklaşık £230–450 arasındadır. Londra, Oxford ve Cambridge en pahalı; Manchester, Liverpool, Leeds ve Birmingham en uygun şehirlerdir. Konaklama aile yanında haftalık £180–360, yurtta £160–600 arasında değişir. Okul okul tüm fiyatları fiyat listesi sayfamızda bulabilirsiniz.' },
  { q: 'Danışmanlık hizmeti ücretli mi?', a: 'Hayır. Okul seçimi, karşılaştırmalı teklif, kayıt ve konaklama ayarlama danışmanlığı öğrenci için ücretsizdir. Okul ücretleri, okulun resmi fiyat listesindeki tutarlarla aynıdır; çoğu zaman okulların kampanyalarından da yararlanmanızı sağlarız.' },
  { q: 'İngiltere dil okulu için hangi vize gerekir?', a: '6 aya kadar olan dil kursları için Standard Visitor (ziyaretçi) vizesi, 6 aydan uzun ve 11 aya kadar olan İngilizce kursları için Short-term Study vizesi gerekir. İki vize de çalışma izni vermez. Ayrıntılar vize rehberimizde.' },
  { q: 'Dil okulunda okurken İngiltere’de çalışabilir miyim?', a: 'Hayır. Dil kursu için verilen vizeler (Standard Visitor ve Short-term Study) ücretli ya da ücretsiz hiçbir işte çalışmaya izin vermez. Çalışma hakkı yalnızca üniversite düzeyindeki Student vizesinde, belirli koşullarla bulunur.' },
  { q: 'Kaç hafta dil okuluna gitmeliyim?', a: 'Bir seviyeyi tamamlamak genellikle 10–12 hafta sürer. Konuşma özgüveni için 2–4 hafta, belirgin bir seviye atlaması için 8–12 hafta, sıfırdan ileri seviyeye ulaşmak için 24 hafta ve üzeri öneriyoruz.' },
  { q: 'Hangi yaştan itibaren dil okuluna gidilebilir?', a: 'Yetişkin programları çoğu okulda 16 yaş ve üzeri içindir. 30 yaş üstü için ayrı sınıflar sunan okullar da vardır. 7–17 yaş arası için yaz okulları ayrı programlardır.' },
  { q: 'Seviyem çok düşük, yine de gidebilir miyim?', a: 'Evet. Okulların neredeyse tamamı başlangıç (A1) seviyesinden kabul eder. İlk gün yapılan seviye testine göre size uygun sınıfa yerleştirilirsiniz.' },
  { q: 'Aile yanı mı, öğrenci yurdu mu?', a: 'Aile yanı konaklama dil pratiği ve bütçe açısından avantajlıdır; kahvaltı ve akşam yemeği dahildir. Öğrenci yurdu daha bağımsız bir yaşam ve merkezi konum sunar, genellikle 18 yaş üstü içindir. Konaklama rehberimizde ayrıntılı karşılaştırmayı bulabilirsiniz.' },
  { q: 'Ne zaman başlayabilirim?', a: 'Çoğu okulda Genel İngilizce kursları her pazartesi başlar. Başlangıç seviyesi ve sınav kursları belirli tarihlerde açılabilir. Vize süreci için başlangıçtan en az 6–8 hafta önce harekete geçmenizi öneriyoruz.' },
  { q: 'Havalimanında karşılanacak mıyım?', a: 'Evet. Havalimanı karşılama hizmetiyle sizi isminizin yazılı olduğu tabelayla karşılıyor ve doğrudan konaklama adresinize götürüyoruz. Her şey dahil Londra paketinde VIP karşılama fiyata dahildir.' },
  { q: 'Ödemeleri nasıl yapıyorum?', a: 'Kayıt sırasında okulun belirlediği depozito, vize başvurusundan önce de kalan tutar ödenir. Ödeme planı ve kur bilgisi yazılı teklifte açıkça belirtilir; vize reddi durumunda okulların iade politikası teklifle birlikte paylaşılır.' },
  { q: 'Vize reddedilirse ne olur?', a: 'Okulların çoğu vize reddi belgesiyle, kayıt ve bazı idari ücretler düşülerek ödemeyi iade eder. Kesin vize garantisi hiçbir kurum tarafından verilemez; ancak dosyanızı en doğru şekilde hazırlayarak riski en aza indiririz.' },
];
