import type { City } from '../types';

export const oxford: City = {
  slug: 'oxford',
  name: 'Oxford',
  nameEn: 'Oxford',
  code: 'OXF',
  country: 'İngiltere',
  region: 'Güneydoğu (Oxfordshire)',
  tagline: 'Kolejler ve kütüphaneler arasında akademik bir ortamda İngilizce.',
  summary:
    'Oxford dil okulları 2027: akredite okullar, haftalık kurs ve konaklama ücretleri, IELTS ve akademik İngilizce, aile yanı ve yurt seçenekleri. Ücretsiz danışmanlık.',
  population: 'Yaklaşık 165 bin',
  fromLondon: 'Trenle ~1 sa',
  airport: 'Heathrow (LHR) ~1 sa (Airline otobüsü)',
  flight: 'İstanbul → Heathrow ~4 sa',
  climate: 'Ilıman; yaz 20–23°C, kış 2–8°C',
  transport: 'Yürünebilir merkez, bisiklet, otobüs',
  studentProfile: 'Akademik hedefli, üniversite ve yüksek lisans adayları',
  budgetLevel: 3,
  vibe: ['Akademik', 'Tarihi', 'Sınav hazırlık'],
  intro: [
    'Oxford, dünyanın en eski İngilizce konuşulan üniversitesine ev sahipliği yapan, 38 kolejiyle bir “üniversite şehri”. Taş binalar, avlular ve kütüphaneler arasında İngilizce öğrenmek, özellikle akademik hedefi olan öğrenciler için güçlü bir motivasyon kaynağı.',
    'Şehirdeki dil okulları genellikle merkezde veya merkeze yakın; IELTS, Cambridge sınavları ve akademik İngilizce programları öne çıkıyor. Bazı okullar üniversite ortamına yakınlığı kullanarak ders dışında konferans, kolej gezisi ve akademik yazma atölyeleri sunuyor.',
    'Oxford küçük ama pahalı bir şehir; konaklama fiyatları Londra’ya yakın. Buna karşılık ulaşım masrafı düşük, çünkü merkez yürüyerek veya bisikletle kolayca dolaşılıyor. Londra’ya trenle veya Oxford Tube otobüsüyle yaklaşık bir saatte ulaşılıyor.',
  ],
  why: [
    { title: 'Akademik atmosfer', text: 'Kolejler, Bodleian Kütüphanesi ve dünyaca ünlü akademisyenlerin şehri; motivasyonu yüksek bir ortam.' },
    { title: 'Sınav hazırlık', text: 'IELTS ve Cambridge sınavlarına odaklanan güçlü programlar; üniversite başvurusu öncesi ideal.' },
    { title: 'Kompakt şehir', text: 'Okul, kütüphane ve sosyal hayat yürüme mesafesinde.' },
    { title: 'Londra ve Cotswolds’a yakın', text: 'Hafta sonu Londra’ya ya da İngiliz köylerinin en güzellerine kolay ulaşım.' },
  ],
  areas: [
    { name: 'Şehir merkezi', text: 'Kolejler, Carfax ve High Street çevresi; okulların çoğu burada.' },
    { name: 'Jericho', text: 'Kanala yakın, kafeleri ve bağımsız dükkanlarıyla sevilen bir semt.' },
    { name: 'Cowley ve Headington', text: 'Doğuda aile yanı konaklamanın yoğun olduğu, otobüsle merkeze 15–30 dakika süren semtler.' },
    { name: 'Summertown', text: 'Kuzeyde şık ve sakin bir konut bölgesi.' },
  ],
  accommodation: [
    'Aile yanı konaklama genellikle Headington, Cowley, Botley ve Summertown gibi semtlerde; okula otobüsle 20–40 dakika. Yarım pansiyon standart.',
    'Yaz aylarında bazı kolejler ve okullar kendi banyolu yurt odaları sunuyor; yıl boyu ise sınırlı sayıda öğrenci rezidansı var. Oxford’da konaklama talebi yüksek olduğu için erken rezervasyon önemli.',
  ],
  costs: [
    { item: 'Aile yanı (haftalık, yarım pansiyon)', amount: '£230–310' },
    { item: 'Öğrenci yurdu (haftalık)', amount: '£260–420' },
    { item: 'Otobüs haftalık bilet', amount: '£18–22' },
    { item: 'Kafede kahve', amount: '£3,30–4' },
    { item: 'Süpermarket (haftalık)', amount: '£40–60' },
  ],
  monthlyBudget: 'Kurs ücreti hariç; aile yanı ve kişisel harcamalarla aylık yaklaşık £1.350–1.900.',
  dailyLife: [
    'Oxford’da bisiklet en pratik ulaşım aracıdır. Şehir akademik takvime göre şekillenir; dönem içinde etkinlikler, konferanslar ve kolej konserleri yoğundur.',
  ],
  trips: [
    { name: 'Cotswolds', text: 'Bal rengi taş evleriyle ünlü köyler; otobüs veya okul gezisiyle.' },
    { name: 'Blenheim Sarayı', text: 'Winston Churchill’in doğduğu saray; otobüsle ~30 dakika.' },
    { name: 'Londra', text: 'Trenle ~1 saat; Oxford Tube otobüsü 24 saat çalışır.' },
    { name: 'Stratford-upon-Avon', text: 'Shakespeare’in doğduğu kasaba.' },
  ],
  idealFor: [
    'Akademik İngilizce, IELTS veya Cambridge hedefi olanlar',
    'Üniversite ve yüksek lisans öncesi hazırlık yapanlar',
    'Sakin, odaklı ve kültürel olarak zengin bir ortam arayanlar',
  ],
  alternatives:
    'Benzer akademik atmosferi bisiklet kültürüyle birlikte arayanlar Cambridge’i; daha uygun bütçe isteyenler York veya Canterbury’yi değerlendirebilir.',
  faqs: [
    { q: 'Oxford’da dil okulu fiyatları ne kadar?', a: 'Haftada 20 derslik Genel İngilizce kursu süreye göre haftalık yaklaşık £300–440 arasındadır. Okul okul fiyatlar bu sayfada.' },
    { q: 'Oxford dil okulları Oxford Üniversitesi’ne mi bağlı?', a: 'Hayır. Oxford’daki dil okulları bağımsız özel kurumlardır; üniversiteyle resmi bağları yoktur. Ancak bazı okullar kolejlerde yaz programları düzenler.' },
    { q: 'Heathrow’dan Oxford’a nasıl gidilir?', a: 'Heathrow’dan Oxford’a The Airline otobüsüyle yaklaşık 1–1,5 saat sürer. Karşılama hizmetiyle doğrudan konaklama adresinize götürülürsünüz.' },
  ],
};

export const cambridge: City = {
  slug: 'cambridge',
  name: 'Cambridge',
  nameEn: 'Cambridge',
  code: 'CBG',
  country: 'İngiltere',
  region: 'Doğu İngiltere',
  tagline: 'Nehir kenarındaki kolejler, bisiklet ve odaklanmaya uygun sakin bir düzen.',
  summary:
    'Cambridge dil okulları 2027: akredite okullar, haftalık kurs ve konaklama fiyatları, sınav hazırlık ve akademik İngilizce, aile yanı seçenekleri. Ücretsiz danışmanlık.',
  population: 'Yaklaşık 150 bin',
  fromLondon: 'Trenle ~50 dk',
  airport: 'Stansted (STN) ~35 dk; Heathrow ~1,5–2 sa',
  flight: 'İstanbul → Stansted/Heathrow ~4 sa',
  climate: 'İngiltere’nin en kurak bölgelerinden; yaz 21–23°C, kış 2–8°C',
  transport: 'Bisiklet, yürüyüş, şehir içi otobüs',
  studentProfile: 'Akademik hedefli, sınav ve üniversite hazırlık öğrencileri',
  budgetLevel: 3,
  vibe: ['Akademik', 'Bisiklet', 'Sınav hazırlık'],
  intro: [
    'Cambridge, 800 yılı aşkın geçmişe sahip üniversitesi ve Cam Nehri kıyısındaki kolejleriyle dünyanın en tanınan öğrenci şehirlerinden biri. Düz sokakları sayesinde bisiklet hayatın merkezinde; nüfusun büyük kısmı öğrenci ve akademisyen.',
    'Cambridge İngilizce sınavlarının (Cambridge English) doğduğu şehir olması, buradaki okulların sınav hazırlık programlarında güçlü olmasını sağlıyor. Okullar genellikle şehir merkezine yakın, sınıflar küçük ve akademik bir disiplinle yürütülüyor.',
  ],
  why: [
    { title: 'Sınav hazırlıkta uzmanlık', text: 'Cambridge İngilizce sınavlarının merkezinde, IELTS ve FCE/CAE/CPE hazırlıkta deneyimli okullar.' },
    { title: 'Bisikletle yaşanan şehir', text: 'Düz ve kompakt şehir; ulaşım masrafı neredeyse sıfır.' },
    { title: 'Akademik ortam', text: 'Kütüphaneler, müzeler (Fitzwilliam ücretsiz) ve üniversite etkinlikleri.' },
    { title: 'Londra’ya yakın', text: 'King’s Cross’a trenle 50 dakika; Stansted’e 35 dakika.' },
  ],
  areas: [
    { name: 'Şehir merkezi', text: 'Kolejler, Market Square ve okulların çoğu yürüme mesafesinde.' },
    { name: 'Mill Road', text: 'Çok kültürlü dükkanları ve restoranlarıyla canlı bir cadde; aile yanı bölgesine yakın.' },
    { name: 'Chesterton ve Cherry Hinton', text: 'Aile yanı konaklamanın yoğun olduğu sakin semtler; bisikletle merkeze 15–25 dakika.' },
  ],
  accommodation: [
    'Aile yanı konaklama yaygın; okulların çoğu bisiklet kiralamayı kolaylaştırıyor. Yarım pansiyon standart.',
    'Yaz aylarında kolej odaları ve öğrenci rezidansları kullanılabiliyor; yıl boyu seçenekler sınırlı olduğu için erken ayırtmak önemli.',
  ],
  costs: [
    { item: 'Aile yanı (haftalık, yarım pansiyon)', amount: '£230–300' },
    { item: 'Öğrenci yurdu (haftalık)', amount: '£260–400' },
    { item: 'Bisiklet kiralama (aylık)', amount: '£30–50' },
    { item: 'Kafede kahve', amount: '£3,20–4' },
    { item: 'Süpermarket (haftalık)', amount: '£40–60' },
  ],
  monthlyBudget: 'Kurs ücreti hariç; aile yanı ve kişisel harcamalarla aylık yaklaşık £1.300–1.850.',
  dailyLife: [
    'Cambridge’de bisiklet kilidi ve ışığı en önemli eşyanızdır. Yazın Cam Nehri’nde punting, parklarda piknik ve açık hava tiyatroları şehrin klasikleridir.',
  ],
  trips: [
    { name: 'Ely', text: 'Görkemli katedraliyle küçük bir şehir; trenle ~15 dakika.' },
    { name: 'Grantchester', text: 'Nehir boyunca yürüyerek ulaşılan, çay bahçeleriyle ünlü köy.' },
    { name: 'Londra', text: 'Trenle ~50 dakika.' },
    { name: 'Norwich', text: 'Ortaçağ sokakları ve katedrali; trenle ~1 saat.' },
  ],
  idealFor: [
    'Cambridge sınavları ve IELTS’e hazırlananlar',
    'Sakin, düzenli ve akademik bir ortam isteyenler',
    'Bisiklet kültürünü ve küçük şehir hayatını sevenler',
  ],
  alternatives:
    'Benzer akademik ortam için Oxford; daha uygun maliyetli bir üniversite şehri için York veya Leeds değerlendirilebilir.',
  faqs: [
    { q: 'Cambridge’de dil okulu fiyatları ne kadar?', a: 'Haftada 20 derslik Genel İngilizce kursu süreye göre haftalık yaklaşık £300–430 arasındadır. Okul bazlı fiyatlar bu sayfadaki tablolarda.' },
    { q: 'Cambridge mi Oxford mu?', a: 'İkisi de akademik ve pahalıdır. Cambridge daha düz ve bisiklete uygun, Stansted’e yakın; Oxford Heathrow’a daha yakın ve Cotswolds’a açılır. Okul seçimi çoğu zaman şehirden daha belirleyicidir.' },
  ],
};

export const bath: City = {
  slug: 'bath',
  name: 'Bath',
  nameEn: 'Bath',
  code: 'BTH',
  country: 'İngiltere',
  region: 'Güneybatı (Somerset)',
  tagline: 'Roma hamamları ve bal rengi taş binalar arasında güvenli, küçük bir şehir.',
  summary:
    'Bath dil okulları 2027: okullar, haftalık kurs ve konaklama ücretleri, UNESCO mirası bir şehirde İngilizce. Ücretsiz danışmanlık alın.',
  population: 'Yaklaşık 95 bin',
  fromLondon: 'Trenle ~1,5 sa',
  airport: 'Bristol (BRS) ~45 dk; Heathrow ~2 sa',
  flight: 'İstanbul → Bristol/Heathrow ~4 sa',
  climate: 'Ilıman; yaz 20–22°C, kış 3–8°C',
  transport: 'Yürünebilir merkez, otobüs',
  studentProfile: 'Yetişkin ve kültür odaklı öğrenciler',
  budgetLevel: 2,
  vibe: ['Tarihi', 'Güvenli', 'Küçük şehir'],
  intro: [
    'Bath, şehrin tamamı UNESCO Dünya Mirası listesinde yer alan ender yerlerden biri. Roma döneminden kalma hamamları, Georgian mimarisi ve Jane Austen bağlantısıyla İngiltere’nin en zarif şehirlerinden.',
    'Dil okulu seçeneği sınırlı ama kaliteli. Küçük ölçekli ve güvenli yapısı sayesinde özellikle ilk kez yurt dışına çıkanlar, yetişkinler ve kültür odaklı katılımcılar için iyi bir seçim.',
  ],
  why: [
    { title: 'UNESCO mirası şehir', text: 'Roma hamamları, Royal Crescent ve Pulteney Köprüsü arasında günlük yaşam.' },
    { title: 'Güvenli ve kompakt', text: 'Her yere yürüyerek ulaşılıyor; sakin ve düzenli bir şehir.' },
    { title: 'Bristol’e yakınlık', text: 'Büyük şehir imkanları trenle 15 dakika uzaklıkta.' },
  ],
  areas: [
    { name: 'Şehir merkezi', text: 'Okullar, hamamlar ve alışveriş caddeleri.' },
    { name: 'Widcombe ve Bear Flat', text: 'Güney yamaçlarda aile yanı bölgeleri.' },
    { name: 'Larkhall ve Weston', text: 'Sakin, yerel konut bölgeleri; otobüsle merkeze 15–20 dakika.' },
  ],
  accommodation: ['Aile yanı konaklama en yaygın seçenektir. Yaz aylarında üniversite kampüsünde yurt odaları sunulabilir.'],
  costs: [
    { item: 'Aile yanı (haftalık, yarım pansiyon)', amount: '£210–270' },
    { item: 'Kafede kahve', amount: '£3–3,80' },
    { item: 'Süpermarket (haftalık)', amount: '£38–55' },
  ],
  monthlyBudget: 'Kurs ücreti hariç; aylık yaklaşık £1.150–1.600.',
  dailyLife: ['Bath’ta hayat yürüyerek akar; Thermae Bath Spa’nın çatı havuzu ve Noel pazarı şehrin en sevilen deneyimlerindendir.'],
  trips: [
    { name: 'Stonehenge', text: 'Otobüsle ~1 saat.' },
    { name: 'Bristol', text: 'Trenle ~15 dakika.' },
    { name: 'Cotswolds', text: 'Kuzeydeki tarihi köyler.' },
  ],
  idealFor: ['Kültür ve tarih meraklıları', 'Sakin ve güvenli bir ortam isteyen yetişkinler', 'İlk kez yurt dışına çıkanlar'],
  alternatives: 'Daha geniş okul seçeneği ve büyük şehir imkanları için komşu Bristol değerlendirilebilir.',
  faqs: [
    { q: 'Bath’ta dil okulu fiyatları ne kadar?', a: 'Genel İngilizce kursları haftalık yaklaşık £280–380 arasındadır. Güncel okul fiyatları bu sayfada.' },
    { q: 'Bath’a nasıl gidilir?', a: 'Londra Paddington’dan trenle ~1,5 saat; Bristol Havalimanı’ndan ~45 dakika.' },
  ],
};

export const bristol: City = {
  slug: 'bristol',
  name: 'Bristol',
  nameEn: 'Bristol',
  code: 'BRS',
  country: 'İngiltere',
  region: 'Güneybatı',
  tagline: 'Liman kültürü, sokak sanatı ve iki üniversitesiyle yaratıcı bir şehir.',
  summary:
    'Bristol dil okulları 2027: okullar, haftalık kurs ve konaklama ücretleri, yaşam maliyeti, Güneybatı İngiltere’nin yaratıcı başkentinde İngilizce. Ücretsiz danışmanlık.',
  population: 'Yaklaşık 480 bin',
  fromLondon: 'Trenle ~1 sa 40 dk',
  airport: 'Bristol (BRS) ~30 dk; Heathrow ~1,5–2 sa',
  flight: 'İstanbul → Bristol/Heathrow ~4 sa',
  climate: 'Ilıman ve biraz yağışlı; yaz 20–22°C, kış 3–8°C',
  transport: 'Otobüs, bisiklet, feribot (harbour ferry)',
  studentProfile: 'Genç, yaratıcı ve çok uluslu',
  budgetLevel: 2,
  vibe: ['Yaratıcı', 'Öğrenci şehri', 'Büyük şehir'],
  intro: [
    'Bristol, Banksy’nin memleketi olarak bilinen sokak sanatı, liman bölgesi ve iki büyük üniversitesiyle İngiltere’nin en yaşanabilir şehirlerinden biri seçiliyor. Londra’dan daha sakin ama bir o kadar canlı bir kültür hayatı var.',
    'Dil okulu sayısı orta düzeyde; okullar genelde şehir merkezinde, Harbourside ve Clifton’a yakın. Büyük şehir imkanlarını Londra’dan daha uygun bir bütçeyle yaşamak isteyenler için dengeli bir seçenek.',
  ],
  why: [
    { title: 'Yaratıcı kültür', text: 'Sokak sanatı, festivaller, müzik ve canlı liman bölgesi.' },
    { title: 'Dengeli bütçe', text: 'Büyük şehir imkanları, Londra’dan belirgin şekilde daha düşük maliyet.' },
    { title: 'Doğaya yakınlık', text: 'Clifton Asma Köprüsü, Avon Gorge ve yakındaki Galler kıyıları.' },
  ],
  areas: [
    { name: 'Şehir merkezi ve Harbourside', text: 'Okullar, müzeler ve liman kafeleri.' },
    { name: 'Clifton', text: 'Asma köprüsü ve Georgian evleriyle şık bir semt.' },
    { name: 'Stokes Croft ve Gloucester Road', text: 'Bağımsız dükkanlar ve sokak sanatıyla bohem bir bölge.' },
    { name: 'Bishopston ve Redland', text: 'Aile yanı konaklamanın yaygın olduğu konut bölgeleri.' },
  ],
  accommodation: [
    'Aile yanı konaklama otobüsle merkeze 20–40 dakika mesafede. Şehir merkezinde yıl boyu açık öğrenci rezidansları da mevcut; 18 yaş üstü için kendi banyolu oda seçenekleri bulunuyor.',
  ],
  costs: [
    { item: 'Aile yanı (haftalık, yarım pansiyon)', amount: '£200–270' },
    { item: 'Öğrenci yurdu (haftalık)', amount: '£220–340' },
    { item: 'Otobüs haftalık bilet', amount: '£18–22' },
    { item: 'Süpermarket (haftalık)', amount: '£38–55' },
  ],
  monthlyBudget: 'Kurs ücreti hariç; aylık yaklaşık £1.150–1.650.',
  dailyLife: ['Bristol’da ağustostaki Balloon Fiesta (sıcak hava balonu festivali) ve yaz boyu süren liman etkinlikleri öne çıkar.'],
  trips: [
    { name: 'Bath', text: 'Trenle ~15 dakika.' },
    { name: 'Cardiff (Galler)', text: 'Trenle ~50 dakika.' },
    { name: 'Cheddar Gorge', text: 'Kireç taşı kanyonu ve mağaralar.' },
  ],
  idealFor: ['Yaratıcı ve genç bir şehir arayanlar', 'Büyük şehir hayatını uygun bütçeyle yaşamak isteyenler'],
  alternatives: 'Daha küçük ve tarihi bir şehir için Bath; daha büyük okul seçeneği için Londra veya Manchester değerlendirilebilir.',
  faqs: [
    { q: 'Bristol’da dil okulu fiyatları ne kadar?', a: 'Genel İngilizce kursları haftalık yaklaşık £260–360 arasındadır. Güncel fiyatlar bu sayfada.' },
    { q: 'Bristol’a hangi havalimanından gidilir?', a: 'Bristol Havalimanı şehre ~30 dakika; Heathrow’dan karayoluyla 1,5–2 saat sürer.' },
  ],
};
