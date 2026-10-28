// Sitenin tüm iletişim, marka ve takip ayarları burada. Yayına almadan önce
// domain, telefon ve anahtarları kontrol edin.

export const SITE = {
  name: "İngiltere'de Dil Eğitimi",
  shortName: 'İngilteredeDilEğitimi',
  url: 'https://www.ingilterededilegitimi.com',
  locale: 'tr_TR',
  tagline: "İngiltere'deki dil okulları, fiyatlar, konaklama ve vize: hepsi tek yerde.",
  description:
    "İngiltere dil okulları 2027 fiyatları: Londra, Brighton, Oxford, Cambridge, Manchester ve 15 şehirde akredite okullar, haftalık kurs ve konaklama ücretleri, vize ve havalimanı karşılama. Ücretsiz danışmanlık.",
  ogImage: '/og/default.png',

  // Lead'ler: WhatsApp, telefon ve e-posta Tampa ekibine düşer
  phone: '+905308810709',
  phoneDisplay: '0530 881 07 09',
  whatsapp: '905308810709',
  email: 'info@tampaegitim.com.tr',
  hours: 'Pazartesi–Cuma 10:00–18:00 · WhatsApp 7/24',
  calendly: 'https://calendly.com/tampaegitim-info/30min',

  // KVKK kapsamındaki veri sorumlusu (yasal zorunluluk, yalnızca KVKK/çerez sayfalarında görünür)
  dataController: {
    name: 'Tampa Yurtdışı Eğitim ve Danışmanlık',
    address: 'Yalı Mah., Park Yaşam Ofisleri, 6523. Sk. No:32 A2 Kat:5 Daire:509, 35550 Karşıyaka / İzmir',
    email: 'info@tampaegitim.com.tr',
  },
  offices: [
    {
      city: 'İzmir',
      address: 'Yalı Mah., Park Yaşam Ofisleri, 6523. Sk. No:32 A2 Kat:5 Daire:509, Karşıyaka / İzmir',
      phone: '+905308810709',
      phoneDisplay: '0530 881 07 09',
    },
    {
      city: 'Aydın',
      address: 'Kurtuluş Mah. 2011 Sok. No:5 Kat:3 Daire:13, My Town Plaza, Efeler / Aydın',
      phone: '+905051443509',
      phoneDisplay: '0505 144 35 09',
    },
  ],

  social: {
    instagram: 'https://www.instagram.com/tampayurtdisiegitim/',
  },

  stats: { students: '5.000+', years: '15' },
};

// Takip ve form uç noktaları .env üzerinden gelir (bkz. .env.example)
export const TRACKING = {
  gtmId: import.meta.env.PUBLIC_GTM_ID ?? '',
  web3formsKey: import.meta.env.PUBLIC_WEB3FORMS_KEY ?? '',
  leadWebhook: import.meta.env.PUBLIC_LEAD_WEBHOOK ?? '',
};

// Vize bilgileri (gov.uk, Nisan 2026 ücretleri). Değişiklikte yalnızca burayı güncelleyin.
export const VISA = {
  updated: 'Ekim 2026',
  standardVisitorFee: 135,
  shortTermStudyFee: 228,
  shortTermStudyIhs: 776,
  priorityFeeNote: 'Öncelikli (priority) hizmet ek ücretlidir ve her başvuru merkezinde sunulmaz.',
  source: 'https://www.gov.uk/government/publications/visa-regulations-revised-table',
};

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
