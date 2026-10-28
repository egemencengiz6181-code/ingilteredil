import type { City } from '../types';

export const brighton: City = {
  slug: 'brighton',
  name: 'Brighton',
  nameEn: 'Brighton',
  code: 'BTN',
  country: 'İngiltere',
  region: 'Güney sahili (East Sussex)',
  tagline: 'Deniz kenarında, yürüyerek yaşanan, genç ve rahat bir öğrenci şehri.',
  summary:
    'Brighton dil okulları 2027: akredite okullar, haftalık kurs ve konaklama ücretleri, aile yanı ve yurt seçenekleri, yaşam maliyeti, Londra ile karşılaştırma. Ücretsiz danışmanlık.',
  population: 'Yaklaşık 290 bin (Brighton & Hove)',
  fromLondon: 'Trenle ~1 sa',
  airport: 'Gatwick (LGW) 30 dk; Heathrow (LHR) ~1,5 sa',
  flight: 'İstanbul → Gatwick ~4 sa',
  climate: 'İngiltere ortalamasından güneşli; yaz 19–23°C, kış 4–9°C',
  transport: 'Şehir merkezi yürünebilir; Brighton & Hove otobüsleri, bisiklet',
  studentProfile: 'Avrupa ağırlıklı, yazın çok uluslu; genç ve sosyal',
  budgetLevel: 2,
  vibe: ['Sahil', 'Sosyal hayat', 'Londra’ya yakın'],
  intro: [
    'Brighton, Londra’dan trenle bir saat uzaklıkta, İngiltere’nin güney sahilinde yer alan canlı bir şehir. İki üniversitesi, sanat ve müzik sahnesiyle nüfusunun önemli bir kısmı genç; bu da dil öğrencileri için rahat ve açık fikirli bir ortam yaratıyor. Şehir merkezi küçük olduğu için okul, sahil, kafe ve alışveriş sokakları birbirine yürüme mesafesinde.',
    'Brighton’daki dil okullarının çoğu şehir merkezinde, tren istasyonu ile deniz arasındaki bölgede. Okul sayısı Londra kadar fazla olmasa da büyük uluslararası zincirlerin şubeleri ve köklü bağımsız okullar birlikte bulunuyor. Yaz aylarında öğrenci sayısı belirgin şekilde artıyor; sakin bir sınıf istiyorsanız bahar veya sonbahar dönemleri daha uygun.',
    'Konaklama ve günlük harcamalar Londra’dan daha uygun, ama İngiltere ortalamasının üzerinde. Buna karşılık ulaşıma neredeyse hiç para harcamadan yaşamak mümkün. Hafta sonları Londra’yı günübirlik görmek, Seven Sisters kayalıklarında yürüyüş yapmak ya da South Downs’ta bisiklete binmek Brighton’da öğrenci hayatının olağan parçası.',
  ],
  why: [
    { title: 'Deniz ve şehir bir arada', text: 'Ders çıkışı sahil yürüyüşü, iskele ve sahil kafeleri. İngiltere’nin en güneşli şehirlerinden biri.' },
    { title: 'Yürünebilir şehir merkezi', text: 'Okullar, North Laine ve The Lanes çarşıları, sahil 15 dakikalık yürüme alanında; ulaşım masrafı düşük.' },
    { title: 'Londra’ya bir saat', text: 'Victoria veya London Bridge’e saatte birden fazla tren; hafta sonu Londra kolayca görülüyor.' },
    { title: 'Gatwick’e 30 dakika', text: 'Türkiye’den Gatwick’e direkt uçuşlar var; havalimanından okula yolculuk kısa ve ucuz.' },
    { title: 'Sosyal ve kapsayıcı atmosfer', text: 'Festivaller, canlı müzik ve rahat yaşam tarzıyla yeni insanlarla tanışmak ve İngilizce konuşmak kolay.' },
  ],
  areas: [
    { name: 'Şehir merkezi ve North Laine', text: 'Okulların çoğunun bulunduğu bölge; renkli dükkanlar, kafeler ve canlı sokak hayatı.' },
    { name: 'Hove', text: 'Brighton’ın batısındaki daha sakin ve aile ağırlıklı semt; aile yanı konaklama için sık tercih ediliyor.' },
    { name: 'Kemptown', text: 'Sahilin doğu yakası; bohem atmosferi, restoranları ve deniz manzaralı Viktorya dönemi evleriyle bilinir.' },
    { name: 'Preston Park ve Withdean', text: 'Kuzeyde yeşil, sakin konut bölgeleri; otobüsle merkeze 15–25 dakika.' },
  ],
  accommodation: [
    'Aile yanı konaklama Brighton’da en yaygın seçenek. Aileler genelde Hove, Preston Park, Patcham ve Moulsecoomb gibi semtlerde; okula yürüyerek veya otobüsle 20–40 dakika. Yarım pansiyon standart, hafta içi kahvaltı ve akşam yemeği dahil.',
    'Öğrenci yurtları sınırlı sayıda ve çoğunlukla Lewes Road hattında, üniversite kampüslerine yakın. Yaz aylarında bazı okullar şehir merkezinde ek rezidanslar açıyor; bu odalar erken doluyor, kayıt aşamasında ayırtmanızı öneriyoruz.',
  ],
  costs: [
    { item: 'Aile yanı konaklama (haftalık, yarım pansiyon)', amount: '£220–290' },
    { item: 'Öğrenci yurdu (haftalık)', amount: '£240–380' },
    { item: 'Otobüs haftalık bilet', amount: '£20–25', note: 'Merkezde çoğu yer yürünebilir' },
    { item: 'Kafede kahve', amount: '£3,20–4' },
    { item: 'Öğle yemeği (dışarıda)', amount: '£8–13' },
    { item: 'Süpermarket (haftalık)', amount: '£40–60' },
    { item: 'Londra günübirlik tren (gidiş-dönüş)', amount: '£20–35', note: 'Railcard ile daha uygun' },
  ],
  monthlyBudget: 'Kurs ücreti hariç; aile yanı konaklama ve kişisel harcamalarla aylık yaklaşık £1.250–1.750.',
  dailyLife: [
    'Brighton’da günlük hayat yürüyerek ve otobüsle akar; Brighton & Hove otobüsleri temassız kartla kullanılır ve günlük tavan ücreti vardır. Bisiklet paylaşımı (BTN BikeShare) sahil boyunca pratik bir alternatif.',
    'Yazları sahil kalabalık ve hareketli, kışları rüzgarlı ama sakin. Şehir festivalleriyle bilinir: mayısta Brighton Festival ve Fringe, ağustosta Pride en büyük etkinlikler.',
  ],
  trips: [
    { name: 'Londra', text: 'Trenle bir saat; günübirlik müze, alışveriş ve gösteri.' },
    { name: 'Seven Sisters ve Beachy Head', text: 'Beyaz tebeşir kayalıklarında yürüyüş; otobüsle ~1 saat.' },
    { name: 'Lewes ve South Downs', text: 'Tarihi kasaba ve milli parkta doğa yürüyüşleri.' },
    { name: 'Arundel', text: 'Ortaçağ kalesi ve küçük bir İngiliz kasabası; trenle ~1 saat.' },
  ],
  idealFor: [
    'Deniz kenarında, sosyal bir ortamda öğrenmek isteyenler',
    'Londra’ya yakın ama Londra kadar yorucu olmayan bir şehir arayanlar',
    'Genç ve rahat bir atmosferde arkadaş edinmek isteyen öğrenciler',
    'Ulaşım masrafını en aza indirmek isteyenler',
  ],
  alternatives:
    'Daha sakin ve aile yanı ağırlıklı bir sahil şehri isteyenler Eastbourne veya Bournemouth’u; büyük şehir ve kariyer bağlantıları isteyenler Londra’yı değerlendirebilir.',
  faqs: [
    { q: 'Brighton’da dil okulu fiyatları ne kadar?', a: 'Haftada 20 derslik Genel İngilizce kursu süreye göre haftalık yaklaşık £260–380 arasındadır. Uzun programlarda haftalık ücret düşer. Okul okul fiyatlar bu sayfadaki tablolarda yer alıyor.' },
    { q: 'Brighton’dan Londra’ya nasıl gidilir?', a: 'Brighton istasyonundan Londra Victoria veya London Bridge’e trenle yaklaşık bir saat sürer. Önceden alınan biletler ve 16–25 Railcard ile ücret belirgin şekilde düşer.' },
    { q: 'Brighton güvenli mi?', a: 'Brighton, İngiltere’nin genel olarak güvenli öğrenci şehirlerinden biridir. Her büyük şehirde olduğu gibi gece geç saatlerde kalabalık bölgelerde kişisel eşyalarınıza dikkat etmeniz yeterli.' },
    { q: 'Brighton’a hangi havalimanından gidilir?', a: 'En yakın havalimanı Gatwick’tir (trenle ~30 dakika). Heathrow’dan geliyorsanız karayoluyla yaklaşık 1,5 saat sürer; havalimanı karşılama hizmetimizle doğrudan konaklama adresinize götürülürsünüz.' },
  ],
};

export const eastbourne: City = {
  slug: 'eastbourne',
  name: 'Eastbourne',
  nameEn: 'Eastbourne',
  code: 'EBN',
  country: 'İngiltere',
  region: 'Güney sahili (East Sussex)',
  tagline: 'Beyaz kayalıklar, Viktorya dönemi sahil yolu ve sakin bir İngiliz kasabası.',
  summary:
    'Eastbourne dil okulları 2027: okullar, haftalık kurs ve aile yanı konaklama ücretleri, güvenli ve sakin sahil kasabasında İngilizce. Ücretsiz danışmanlık alın.',
  population: 'Yaklaşık 105 bin',
  fromLondon: 'Trenle ~1,5 sa',
  airport: 'Gatwick (LGW) ~1 sa',
  flight: 'İstanbul → Gatwick ~4 sa',
  climate: 'İngiltere’nin en güneşli kıyılarından; yaz 18–22°C, kış 4–9°C',
  transport: 'Yürünebilir merkez, şehir içi otobüsler',
  studentProfile: 'Yetişkin ve 30 yaş üstü katılımcı oranı yüksek; Avrupa ağırlıklı',
  budgetLevel: 1,
  vibe: ['Sahil', 'Sakin', 'Aile yanı', '30+'],
  intro: [
    'Eastbourne, East Sussex sahilinde, South Downs Milli Parkı’nın denize kavuştuğu noktada yer alan sakin bir sahil kasabası. Viktorya döneminden kalma sahil yolu, bakımlı parkları ve Beachy Head kayalıklarıyla İngiltere’nin en güvenli ve huzurlu öğrenim adreslerinden biri.',
    'Şehirdeki dil okulları küçük ölçekli ve köklü; sınıflar genellikle küçük, öğretmen–öğrenci ilişkisi yakın. Öğrencilerin büyük kısmı aile yanında kaldığı için gün boyunca İngilizce konuşma pratiği yapmak kaçınılmaz oluyor. Özellikle yetişkinler, 30 yaş üstü katılımcılar ve gürültüden uzak odaklanmak isteyenler için iyi bir seçim.',
  ],
  why: [
    { title: 'Güvenli ve sakin', text: 'Düşük suç oranı, düzenli sokaklar ve yürünebilir merkez; ilk kez yurt dışına çıkanlar için rahat.' },
    { title: 'Yoğun dil pratiği', text: 'Türk öğrenci oranı düşük, aile yanı konaklama yaygın; günün her anında İngilizce.' },
    { title: 'Uygun yaşam maliyeti', text: 'Konaklama ve günlük harcamalar Londra ve Brighton’dan belirgin şekilde daha düşük.' },
    { title: 'Doğa ve yürüyüş', text: 'Beachy Head, Seven Sisters ve South Downs yürüyüş parkurları kapınızın önünde.' },
  ],
  areas: [
    { name: 'Şehir merkezi ve sahil yolu', text: 'Okullar, alışveriş merkezi ve iskele birbirine yakın; deniz kenarı boyunca uzanan uzun bir promenad.' },
    { name: 'Meads', text: 'Kayalıklara yakın, yeşil ve şık bir konut bölgesi; bazı okullar bu sakin semtte.' },
    { name: 'Old Town ve Hampden Park', text: 'Aile yanı konaklamanın yoğun olduğu, otobüsle merkeze 15–25 dakika süren semtler.' },
  ],
  accommodation: [
    'Eastbourne’da konaklamanın büyük kısmı aile yanıdır. Aileler okula genellikle yürüme mesafesinde ya da kısa bir otobüs yolculuğu uzaklığında. Yarım pansiyon standart, bazı okullar tam pansiyon da sunuyor.',
    'Yurt seçeneği sınırlı; bazı okullar yetişkinler için yakın konuk evleri veya stüdyolar ayarlayabiliyor.',
  ],
  costs: [
    { item: 'Aile yanı (haftalık, yarım pansiyon)', amount: '£190–250' },
    { item: 'Otobüs haftalık bilet', amount: '£15–20' },
    { item: 'Kafede kahve', amount: '£3–3,80' },
    { item: 'Öğle yemeği (dışarıda)', amount: '£7–12' },
    { item: 'Süpermarket (haftalık)', amount: '£35–55' },
  ],
  monthlyBudget: 'Kurs ücreti hariç; aile yanı konaklama ve kişisel harcamalarla aylık yaklaşık £1.050–1.450.',
  dailyLife: [
    'Eastbourne’da hayat sakin ve düzenli akar; mağazalar 17.30–18.00’de kapanır, akşamları sahil ve pub’lar hareketlidir. Haziran sonunda düzenlenen Eastbourne tenis turnuvası ve ağustostaki Airbourne hava gösterisi şehrin en kalabalık dönemleridir.',
  ],
  trips: [
    { name: 'Beachy Head ve Seven Sisters', text: 'İngiltere’nin en ikonik kayalıkları; şehirden yürüyerek başlanabilir.' },
    { name: 'Brighton', text: 'Trenle ~35 dakika; daha hareketli bir sahil şehri.' },
    { name: 'Hastings ve Battle', text: '1066 savaşının yaşandığı yer ve tarihi balıkçı kasabası.' },
    { name: 'Londra', text: 'Trenle ~1,5 saat; günübirlik gezi.' },
  ],
  idealFor: [
    'Sakin bir ortamda odaklanarak çalışmak isteyenler',
    '30 yaş üstü ve yetişkin katılımcılar',
    'Aile yanında yoğun konuşma pratiği isteyenler',
    'Bütçesini kontrol altında tutmak isteyenler',
  ],
  alternatives:
    'Daha hareketli bir sahil şehri isteyenler Brighton’ı, daha büyük bir sahil şehri ve geniş okul seçeneği isteyenler Bournemouth’u değerlendirebilir.',
  faqs: [
    { q: 'Eastbourne kimler için uygun?', a: 'Sakin, güvenli ve doğayla iç içe bir ortam isteyen yetişkinler, 30 yaş üstü katılımcılar ve aile yanında yoğun pratik yapmak isteyen öğrenciler için idealdir.' },
    { q: 'Eastbourne’da dil okulu fiyatları ne kadar?', a: 'Genel İngilizce kursları süreye ve ders saatine göre haftalık yaklaşık £250–360 arasındadır. Okul bazlı güncel fiyatları bu sayfada görebilirsiniz.' },
    { q: 'Eastbourne’dan Londra’ya ulaşım nasıl?', a: 'Londra Victoria’ya direkt trenle yaklaşık 1,5 saat sürer.' },
  ],
};

export const bournemouth: City = {
  slug: 'bournemouth',
  name: 'Bournemouth',
  nameEn: 'Bournemouth',
  code: 'BOH',
  country: 'İngiltere',
  region: 'Güney sahili (Dorset)',
  tagline: '11 kilometrelik kumsal, sakin tempo ve köklü dil okulları.',
  summary:
    'Bournemouth dil okulları 2027: akredite okullar, haftalık kurs ve konaklama fiyatları, aile yanı seçenekleri, yaşam maliyeti. Sahilde İngilizce için ücretsiz danışmanlık.',
  population: 'Yaklaşık 200 bin',
  fromLondon: 'Trenle ~2 sa',
  airport: 'Bournemouth (BOH); Heathrow ~1,5–2 sa',
  flight: 'İstanbul → Heathrow ~4 sa',
  climate: 'Ilıman ve güneşli; yaz 19–22°C, kış 4–9°C',
  transport: 'Yürünebilir merkez, otobüs ağı',
  studentProfile: 'Çok uluslu; uzun dönem öğrenci oranı yüksek',
  budgetLevel: 1,
  vibe: ['Sahil', 'Uzun dönem', 'Aile yanı'],
  intro: [
    'Bournemouth, İngiltere’nin güney sahilinde, 11 kilometre uzunluğundaki altın kumsalıyla bilinen bir sahil şehri. 1950’lerden bu yana dil okullarına ev sahipliği yapıyor; nüfusuna oranla en fazla dil okulu bulunan İngiliz şehirlerinden biri. Bu köklü gelenek, aile yanı konaklama ağının da çok gelişmiş olduğu anlamına geliyor.',
    'Şehir, Londra’ya göre daha sakin ve uygun maliyetli; buna karşılık üniversite öğrencileri sayesinde canlı bir gece hayatı da var. Uzun dönem (12 hafta ve üzeri) program yapmak isteyenler, bütçesini korumak isteyenler ve sahilde yaşamayı sevenler için öne çıkan bir seçim.',
  ],
  why: [
    { title: 'Kumsal ve doğa', text: 'Uzun kumsal, Jurassic Coast ve New Forest milli parkı birkaç dakika uzaklıkta.' },
    { title: 'Köklü okul geleneği', text: 'Onlarca yıllık deneyime sahip okullar ve gelişmiş bir aile yanı ağı.' },
    { title: 'Uzun dönem için uygun', text: 'Konaklama ve günlük giderler daha düşük; 12–24 haftalık programlar için bütçe dostu.' },
    { title: 'Güvenli ve düzenli', text: 'Sakin semtler, yürünebilir merkez ve dost canlısı yerel halk.' },
  ],
  areas: [
    { name: 'Şehir merkezi (Lansdowne ve Square)', text: 'Okulların büyük kısmı, alışveriş caddeleri ve sahile inen yürüyüş yolları.' },
    { name: 'Boscombe ve Southbourne', text: 'Doğu yakasında, sahile yakın ve daha yerel semtler; bazı okullar ve çok sayıda aile yanı.' },
    { name: 'Westbourne ve Poole sınırı', text: 'Batı yakasında daha sakin, şık kafeleriyle bilinen konut bölgeleri.' },
    { name: 'Winton ve Charminster', text: 'Üniversiteye yakın, uygun fiyatlı aile yanı bölgeleri; otobüsle merkeze 15–25 dakika.' },
  ],
  accommodation: [
    'Bournemouth’ta aile yanı konaklama çok yaygın ve kaliteli; okullar uzun yıllardır çalıştıkları ailelerle iş birliği yapıyor. Aileler genelde okula yürüme veya 20–30 dakikalık otobüs mesafesinde.',
    'Yaz aylarında okullara bağlı rezidanslar ve şehir merkezinde öğrenci yurtları da kullanılabiliyor; 18 yaş üstü için kendi banyolu oda seçenekleri mevcut.',
  ],
  costs: [
    { item: 'Aile yanı (haftalık, yarım pansiyon)', amount: '£190–260' },
    { item: 'Öğrenci yurdu (haftalık)', amount: '£220–330' },
    { item: 'Otobüs haftalık bilet', amount: '£17–22' },
    { item: 'Kafede kahve', amount: '£3–3,80' },
    { item: 'Süpermarket (haftalık)', amount: '£35–55' },
  ],
  monthlyBudget: 'Kurs ücreti hariç; aile yanı konaklama ve kişisel harcamalarla aylık yaklaşık £1.050–1.500.',
  dailyLife: [
    'Bournemouth’ta yaz aylarında sahil festivalleri ve Bournemouth Air Festival gibi etkinlikler şehri canlandırır. Kışın daha sakindir ama okulların sosyal programları yıl boyu devam eder.',
  ],
  trips: [
    { name: 'Jurassic Coast ve Durdle Door', text: 'UNESCO Dünya Mirası kıyı şeridi; otobüs veya okul gezisiyle.' },
    { name: 'New Forest', text: 'Yaban atlarının dolaştığı milli park; bisiklet ve yürüyüş.' },
    { name: 'Salisbury ve Stonehenge', text: 'Katedral şehri ve dünyaca ünlü taş anıt; günübirlik gezi.' },
    { name: 'Londra', text: 'Trenle ~2 saat.' },
  ],
  idealFor: [
    'Uzun dönem program yapmak isteyenler',
    'Sahilde, sakin ama sosyal bir ortam arayanlar',
    'Aile yanında kalarak pratik yapmak isteyenler',
    'Bütçe dostu bir İngiliz şehri arayanlar',
  ],
  alternatives:
    'Londra’ya daha yakın bir sahil şehri isteyenler Brighton’ı; daha küçük ve sakin bir kasaba isteyenler Eastbourne’u değerlendirebilir.',
  faqs: [
    { q: 'Bournemouth’ta dil okulu fiyatları ne kadar?', a: 'Haftada 20 derslik Genel İngilizce kursu süreye göre haftalık yaklaşık £240–350 arasındadır. Okul okul fiyatlar bu sayfadaki tablolarda yer alıyor.' },
    { q: 'Bournemouth’a nasıl gidilir?', a: 'Heathrow’dan karayoluyla 1,5–2 saat sürer; National Express otobüsleri ve havalimanı karşılama hizmetiyle ulaşım kolaydır. Bournemouth Havalimanı’na yaz aylarında bazı Avrupa uçuşları vardır.' },
    { q: 'Bournemouth uzun dönem için uygun mu?', a: 'Evet. Konaklama ve yaşam maliyetinin Londra’ya göre düşük olması, 12–24 haftalık programlar için Bournemouth’u öne çıkarır.' },
  ],
};

export const canterbury: City = {
  slug: 'canterbury',
  name: 'Canterbury',
  nameEn: 'Canterbury',
  code: 'CBW',
  country: 'İngiltere',
  region: 'Güneydoğu (Kent)',
  tagline: 'Katedrali, ortaçağ sokakları ve üniversiteleriyle kompakt bir tarih şehri.',
  summary:
    'Canterbury dil okulları 2027: okullar, haftalık kurs ve konaklama fiyatları, güvenli ve tarihi bir öğrenci şehrinde İngilizce. Ücretsiz danışmanlık alın.',
  population: 'Yaklaşık 55 bin (şehir)',
  fromLondon: 'Hızlı trenle ~1 sa',
  airport: 'Gatwick (LGW) ~1,5 sa; Heathrow ~2 sa',
  flight: 'İstanbul → Gatwick ~4 sa',
  climate: 'Ilıman; yaz 20–23°C, kış 3–8°C',
  transport: 'Yürünebilir merkez, otobüs; St Pancras’a hızlı tren',
  studentProfile: 'Avrupa ve Asya ağırlıklı, üniversite hazırlık öğrencileri',
  budgetLevel: 2,
  vibe: ['Tarihi', 'Güvenli', 'Akademik'],
  intro: [
    'Canterbury, UNESCO Dünya Mirası listesindeki katedrali ve surlarla çevrili ortaçağ merkeziyle İngiltere’nin en karakterli küçük şehirlerinden biri. Üç üniversitesi sayesinde nüfusunun önemli bir kısmı öğrenci; bu da şehre genç ve hareketli bir hava katıyor.',
    'Şehirdeki dil okulları az sayıda ama köklü; bazıları üniversite hazırlık ve akademik İngilizce programlarıyla öne çıkıyor. Londra St Pancras’a hızlı trenle bir saat uzaklıkta olması, sakin bir şehirde yaşayıp başkenti sık sık görmeyi mümkün kılıyor.',
  ],
  why: [
    { title: 'Tarihi atmosfer', text: 'Katedral, kanal kenarı yürüyüşleri ve ortaçağ sokakları arasında öğrenim.' },
    { title: 'Kompakt ve güvenli', text: 'Her yere yürüyerek ulaşılıyor; ilk kez yurt dışına çıkanlar için rahat.' },
    { title: 'Londra’ya hızlı tren', text: 'Southeastern High Speed ile St Pancras’a yaklaşık 1 saat.' },
    { title: 'Akademik programlar', text: 'Üniversite hazırlık ve IELTS odaklı kurslar için iyi bir ortam.' },
  ],
  areas: [
    { name: 'Şehir merkezi (surların içi)', text: 'Okullar, katedral, kafeler ve alışveriş caddeleri yürüme mesafesinde.' },
    { name: 'St Dunstan’s ve Westgate', text: 'Merkeze yakın, sakin konut bölgeleri.' },
    { name: 'Üniversite tepesi', text: 'University of Kent kampüsü çevresi; yurt seçenekleri.' },
  ],
  accommodation: [
    'Aile yanı konaklama yaygın; aileler merkeze yürüme veya kısa otobüs mesafesinde. Yaz aylarında üniversite kampüslerinde kendi banyolu yurt odaları da sunuluyor.',
  ],
  costs: [
    { item: 'Aile yanı (haftalık, yarım pansiyon)', amount: '£200–260' },
    { item: 'Öğrenci yurdu (haftalık, yaz)', amount: '£220–320' },
    { item: 'Kafede kahve', amount: '£3–3,80' },
    { item: 'Süpermarket (haftalık)', amount: '£35–55' },
  ],
  monthlyBudget: 'Kurs ücreti hariç; aile yanı ve kişisel harcamalarla aylık yaklaşık £1.100–1.550.',
  dailyLife: [
    'Canterbury’de yaşam yürüyerek akar; nehir üzerinde punting (sandal turu), sokak müzisyenleri ve pub’lar şehrin sosyal hayatının merkezidir.',
  ],
  trips: [
    { name: 'Dover Kayalıkları', text: 'Trenle ~30 dakika; beyaz kayalıklar ve kale.' },
    { name: 'Whitstable', text: 'İstiridyeleriyle ünlü sahil kasabası; otobüsle ~30 dakika.' },
    { name: 'Londra', text: 'Hızlı trenle ~1 saat.' },
  ],
  idealFor: [
    'Tarihi ve sakin bir şehirde odaklanmak isteyenler',
    'Akademik İngilizce ve üniversite hazırlık hedefi olanlar',
    'Londra’ya yakın, güvenli bir şehir arayan aileler ve öğrenciler',
  ],
  alternatives:
    'Benzer akademik havayı daha büyük ölçekte isteyenler Oxford veya Cambridge’i; sahil isteyenler Brighton’ı değerlendirebilir.',
  faqs: [
    { q: 'Canterbury’de kaç dil okulu var?', a: 'Canterbury’de sınırlı sayıda ama köklü, akredite dil okulu bulunur. Güncel listeyi ve fiyatları bu sayfada görebilirsiniz.' },
    { q: 'Canterbury’den Londra’ya ulaşım nasıl?', a: 'Canterbury West’ten Londra St Pancras’a hızlı trenle yaklaşık bir saat sürer.' },
  ],
};
