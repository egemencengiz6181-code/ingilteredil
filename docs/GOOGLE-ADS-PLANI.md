# Google Ads planı: ingilterededilegitimi

Amaç: İngiltere'de dil okulu arayan kişilerden form, WhatsApp ve telefon lead'i toplamak. Lead başına maliyeti (CPL) düşürmek ve satışa dönen lead'leri Ads'e geri bildirmek.

## 1. Dönüşüm kurulumu (GTM)

Site, bütün olayları `dataLayer`'a gönderiyor. GTM'de şunları kurun:

| Olay (`event`) | Ne zaman tetiklenir | Ads dönüşümü | Tür |
|---|---|---|---|
| `generate_lead` | Form gönderildiğinde | **Lead – Form** | Birincil |
| `whatsapp_click` | wa.me linkine tıklandığında | Lead – WhatsApp | Birincil |
| `phone_click` | tel: linkine tıklandığında | Lead – Telefon tıklaması | İkincil |
| `calendly_click` | Online görüşme linkine tıklandığında | Lead – Görüşme | İkincil |

- `generate_lead` olayında `user_data.phone_number` E.164 formatında (+90…) geliyor. GTM'deki Ads dönüşüm etiketinde **Gelişmiş dönüşümler (Enhanced conversions)** seçeneğini açın ve kullanıcı verisi olarak bu değişkeni bağlayın.
- Ek parametreler: `form_location` (hangi form), `lead_city`, `lead_program`. Raporlamada şehir ve program kırılımı için GA4'e de aynı olayı gönderin.
- **Teşekkür sayfası** `/tesekkurler/` noindex'tir. Ayrıca sayfa görüntüleme tabanlı bir yedek dönüşüm olarak da kullanılabilir.
- **Consent Mode v2** kurulu. Çerez onayı gelene kadar `ad_storage` ve `analytics_storage` "denied" durumunda kalır, onay gelince güncellenir. GTM etiketlerinde "Consent Overview" ayarını açın.
- **Offline dönüşüm:** Her lead `gclid`, `gbraid` ve `wbraid` değeriyle Google Sheets'e yazılır. Kayıt olan öğrencileri "Kayıt" adlı dönüşüm olarak haftalık yükleyin; teklif stratejisi zamanla kayıt değerine göre optimize olur.

## 2. Kampanya yapısı

| Kampanya | Reklam grupları | Açılış sayfası |
|---|---|---|
| **S – İngiltere Genel** | dil okulu genel · fiyat · kaç para · ingilizce kursu ingiltere | `/lp/ingiltere-dil-okulu/` |
| **S – Londra** | londra dil okulu · londra dil okulu fiyat · londra ingilizce kursu | `/lp/londra-dil-okulu/` |
| **S – Her Şey Dahil** | her şey dahil dil okulu · londra paket · uçak dahil dil okulu | `/lp/her-sey-dahil-londra/` |
| **S – Şehirler** | Her şehir için ayrı reklam grubu (Brighton, Oxford, Cambridge, Manchester, Bournemouth, Edinburgh…) | `/[şehir]-dil-okullari/` |
| **S – Uygun Fiyat** | ucuz / uygun fiyatlı / ekonomik ingiltere dil okulu | `/lp/uygun-fiyatli-ingiltere-dil-okulu/` |
| **S – 30+** | 30 yaş üstü dil okulu · yetişkin ingilizce kursu ingiltere | `/lp/30-yas-ustu-ingiltere-dil-okulu/` |
| **S – Okul Markaları** (isteğe bağlı) | Kaplan, St Giles, ES London… "okul adı + fiyat" | `/dil-okullari/[okul]/` |
| **Remarketing / PMax** (2. ay) | Site ziyaretçileri, form başlatıp göndermeyenler | Ana sayfa, fiyat hesaplama |

Şehir sayfaları indekslenir ve Ads'te açılış sayfası olarak kullanılabilir. Bu sayfalarda form üst kısımda; ayrıca fiyat tablosu, SSS ve okul listesi Kalite Puanı'nı destekler.

## 3. Anahtar kelimeler (başlangıç)

Eşleme türleri: tam eşleme `[ ]` ve sıralı eşleme `" "`. Geniş eşlemeyi, dönüşüm verisi birikip akıllı teklif devreye girdikten sonra açın.

**Genel:** [ingiltere dil okulu], [ingilterede dil okulu], "ingiltere dil okulu fiyatları", "ingiltere dil okulları", "ingiltere ingilizce kursu", "ingiltere dil eğitimi", "ingilterede dil eğitimi", "yurtdışı dil okulu ingiltere", "ingiltere dil okulu 1 aylık"

**Londra:** [londra dil okulu], "londra dil okulu fiyatları", "londra dil okulları", "londra ingilizce kursu", "londra dil eğitimi"

**Her şey dahil:** "her şey dahil dil okulu", "ingiltere dil okulu paket", "londra dil okulu paket", "konaklama dahil dil okulu"

**Şehirler:** "brighton dil okulu", "oxford dil okulu", "cambridge dil okulu", "manchester dil okulu", "bournemouth dil okulu", "edinburgh dil okulu", "liverpool dil okulu", "bristol dil okulu", "eastbourne dil okulu"

**Niyet / bilgi:** "ingiltere dil okulu vizesi", "ingiltere dil okulu konaklama", "londra öğrenci yurdu" (düşük teklif, ayrı grup)

## 4. Negatif anahtar kelimeler

`ec`, `ücretsiz kurs`, `burs`, `online`, `uzaktan`, `türkiye'de`, `istanbul'da`, `izmir'de`, `ankara'da`, `iş ilanı`, `öğretmen`, `öğretmenlik`, `celta`, `tercüme`, `çeviri`, `wikipedia`, `ekşi`, `dizi`, `film`, `amerika`, `kanada`, `malta`, `irlanda`, `dubai`, `almanca`, `fransızca`, `ilkokul`, `ortaokul`, `devlet okulu`

Not: Yaz okulu (7–17 yaş) için ayrı bir kampanya açılacaksa `yaz okulu` ve `çocuk` kelimelerini bu kampanyalarda negatif yapın.

## 5. Reklam metinleri (RSA örnekleri)

**Başlıklar (en fazla 30 karakter):**
- İngiltere Dil Okulu Fiyatları
- Londra Dil Okulu 2027
- 76 Akredite Okul, 15 Şehir
- Ücretsiz Danışmanlık
- Vize ve Konaklama Dahil Süreç
- Havalimanında Karşılama
- Aynı Gün Fiyat Teklifi
- Her Şey Dahil 2 Hf £2.950'den
- Okulun Resmi Fiyatı
- British Council Onaylı Okullar
- Haftalık £185'ten Başlayan Kurs
- WhatsApp'tan Hemen Sorun

**Açıklamalar (en fazla 90 karakter):**
- Londra, Brighton, Oxford ve 12 şehirde okulları kurs + konaklama dahil karşılaştırın.
- Okul seçimi, kayıt, vize dosyası ve havalimanı karşılama. Danışmanlık ücretsiz.
- 15 yıllık deneyim, 5.000+ öğrenci. Size özel toplam maliyet teklifi aynı gün.
- Uçak, vize, sigorta, özel banyolu oda ve Londra turu tek fiyatta. Kontenjan sınırlı.

**Uzantılar:**
- Site bağlantıları: Fiyat Listesi · Fiyat Hesaplama · Konaklama · Vize Rehberi · Her Şey Dahil · Şehirler
- Açıklama metinleri: Danışmanlık Ücretsiz · Akredite Okullar · Havalimanı Karşılama · Aynı Gün Dönüş
- Yapılandırılmış snippet (Hedefler): Londra, Brighton, Oxford, Cambridge, Manchester, Edinburgh
- Fiyat uzantısı: Londra kurs £185+/hf · Manchester kurs £225+/hf · Her şey dahil £2.950+
- Arama ve WhatsApp (mesaj) uzantıları; çalışma saatlerine göre zamanlanmalı

## 6. Bütçe, teklif ve hedefleme

- **Konum:** Türkiye; "ilgi alanı" değil **"bulunduğu yer"** hedeflemesi. İlk etapta İstanbul, İzmir, Ankara, Bursa, Antalya ve Aydın'a teklif artışı verin.
- **Dil:** Türkçe + İngilizce.
- **Teklif:** İlk 2–3 hafta "Tıklamaları en üst düzeye çıkar" (TBM üst sınırıyla) veya manuel TBM. 30 dönüşümden sonra "Dönüşümleri en üst düzeye çıkar", ardından hedef EBM (tCPA).
- **Sezon:** Yaz programları için ocak–mayıs arası en yoğun dönem; bütçeyi bu aylarda artırın. Eylül–kasım dönemi uzun süreli ve akademik yıl programları için önemli.
- **Zamanlama:** Hafta içi 09:00–22:00 arasında teklifleri artırın. Gece saatlerinde form dönüşümü devam eder, telefon uzantısını kapatın.

## 7. Takip rutini

- **Haftalık:** arama terimleri raporu (yeni negatifler), CPL'nin kampanya ve şehir kırılımı, Sheets'teki lead durumları.
- **Aylık:** kayıt olan lead'leri offline dönüşüm olarak yükleyin, açılış sayfası A/B testleri yapın (başlık, form alan sayısı).
- **Fiyat güncellemesi:** okul fiyatları değiştiğinde `src/data/schools/*.json` dosyalarını güncelleyip siteyi yeniden derleyin; reklamdaki fiyatlarla sitedekilerin aynı kalmasına dikkat edin.
