# İngiltere'de Dil Eğitimi: ingilterededilegitimi

İngiltere'deki dil okullarını (EC hariç) şehir şehir listeleyen, kurs ve konaklama ücretlerini haftalık olarak veren, vize, konaklama ve havalimanı karşılama bilgilerini sunan bir lead toplama sitesi. Site dışarıdan bağımsız görünür; leadler Tampa Yurtdışı Eğitim ekibine düşer. Renk paleti Tampa ile aynı aileden (teal + mercan).

Teknoloji: [Astro](https://astro.build) ile statik site. Sunucu gerekmez; Netlify, Vercel, Cloudflare Pages veya herhangi bir statik hosting'e yüklenebilir.

## Komutlar

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # dist/ klasörüne üretir
npm run preview      # üretilen siteyi önizler
npm run check:data   # okul verilerini doğrular (slug çakışması, EC, fiyat kademeleri)
```

## Yayına almadan önce

1. **Domain:** `src/config/site.ts` dosyasındaki `url` değerini gerçek domain ile değiştirin. Canonical, sitemap ve OG adresleri buradan üretilir.
2. **İletişim:** Aynı dosyada telefon, WhatsApp, e-posta ve Calendly bilgilerini kontrol edin.
3. **`.env`:** `.env.example` dosyasını `.env` adıyla kopyalayıp doldurun:
   - `PUBLIC_WEB3FORMS_KEY`: [web3forms.com](https://web3forms.com) üzerinden ücretsiz alınır; form gönderimleri e-postaya gelir.
   - `PUBLIC_LEAD_WEBHOOK`: Google Sheets webhook adresi. Kurulumu `docs/google-sheets-webhook.gs` dosyasında anlatılıyor.
   - `PUBLIC_GTM_ID`: Google Tag Manager ID'si.
   - Hiçbir anahtar girilmezse form, lead kaybolmasın diye bilgileri WhatsApp mesajı olarak açar.
4. **Google Search Console:** domaini doğrulayın ve `sitemap-index.xml` dosyasını gönderin.
5. **Google Ads:** `docs/GOOGLE-ADS-PLANI.md` dosyasındaki dönüşüm ve kampanya kurulumunu uygulayın.

## Sayfalar

| URL | İçerik |
|---|---|
| `/` | Ana sayfa: şehir seçici, fiyat özeti, süreç, her şey dahil paket, yorumlar, SSS, form |
| `/[şehir]-dil-okullari/` | 15 şehir rehberi: okullar, fiyat tablosu, konaklama, yaşam maliyeti, semtler, vize, SSS |
| `/dil-okullari/` | Tüm okullar; şehre göre filtre, fiyata göre sıralama |
| `/dil-okullari/[okul]/` | Okul detayı: kurs fiyat kademeleri, konaklama, ek ücretler, 4/8/12 haftalık örnek maliyet |
| `/ingiltere-dil-okulu-fiyatlari/` | Bütün okulların fiyat listesi |
| `/fiyat-hesaplama/` | Etkileşimli toplam maliyet hesaplayıcı |
| `/sehirler/` | 15 şehrin karşılaştırması |
| `/konaklama/`, `/konaklama/londra-ogrenci-yurtlari/` | Konaklama rehberi ve Londra yurtları |
| `/ingiltere-dil-okulu-vizesi/` | Vize rehberi |
| `/havalimani-karsilama/` | Havalimanı karşılama |
| `/her-sey-dahil-londra-paketi/` | Her şey dahil Londra paketi |
| `/rehber/` | SEO blog yazıları (`src/content/rehber/*.md`) |
| `/lp/*` | Google Ads açılış sayfaları (noindex, sade menü) |
| `/ucretsiz-teklif/`, `/iletisim/`, `/sss/`, `/ogrenci-yorumlari/`, `/nasil-calisiyoruz/` | Dönüşüm ve güven sayfaları |
| `/tesekkurler/` | Form sonrası teşekkür sayfası (noindex, dönüşüm sayfası) |

## İçeriği güncelleme

- **Okul fiyatları:** `src/data/schools/<şehir>.json`. Her okulda `priceStatus` alanı bulunur: `official` resmi fiyat listesinden, `estimated` ise tahmin demektir ve sitede "tahmini" etiketiyle gösterilir. Kaynak linkleri `sources` alanında. Değişiklikten sonra `npm run check:data` ve `npm run build` çalıştırın.
- **Şehir rehberleri:** `src/data/cities/*.ts`
- **Yurtlar, her şey dahil paket, yorumlar, genel SSS:** `src/data/content.ts`
- **Vize ücretleri:** `src/config/site.ts` → `VISA`
- **Ads açılış sayfaları:** `src/data/landing.ts`. Yeni bir LP eklemek için bu dosyaya bir kayıt eklemek yeterlidir.
- **Blog:** `src/content/rehber/` klasörüne frontmatter'lı bir `.md` dosyası ekleyin.

## SEO notları

- Her sayfada benzersiz title ve description, canonical, Open Graph ve Twitter etiketleri bulunur.
- JSON-LD işaretlemeleri: Organization, WebSite, BreadcrumbList, FAQPage, ItemList (şehir ve okul listeleri), EducationalOrganization ve Offer (okullar), Product ve AggregateOffer (paket), Article (rehber yazıları).
- Sitemap otomatik üretilir; `/lp/` ve `/tesekkurler/` sitemap'e girmez ve robots.txt'de engellidir.
- Şehir sayfası URL'leri arama ifadesiyle aynıdır (`londra-dil-okullari`). Şehir, okul ve rehber sayfaları birbirine iç linklerle bağlıdır.
- Sayfalar statiktir; font dosyaları siteyle birlikte sunulur ve JavaScript yalnızca form, menü ve hesaplayıcı için kullanılır. Bu, Core Web Vitals açısından iyi sonuç verir.
