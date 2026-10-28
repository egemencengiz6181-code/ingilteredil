/**
 * Web sitesi formlarını Google Sheets'e yazan webhook.
 *
 * Kurulum:
 * 1. Yeni bir Google Sheet açın → Uzantılar → Apps Script.
 * 2. Bu dosyanın içeriğini yapıştırın, NOTIFY_EMAIL'i düzenleyin, kaydedin.
 * 3. Dağıt → Yeni dağıtım → Tür: Web uygulaması
 *    - Yürüten: Ben
 *    - Erişimi olan: Herkes
 * 4. Verilen /exec ile biten URL'yi .env dosyasında PUBLIC_LEAD_WEBHOOK olarak girin ve siteyi yeniden derleyin.
 */
const NOTIFY_EMAIL = 'info@tampaegitim.com.tr'; // boş bırakılırsa e-posta gönderilmez

const COLUMNS = [
  'tarih', 'ad_soyad', 'telefon', 'eposta', 'sehir', 'program', 'baslangic', 'sure', 'okul',
  'iletisim_tercihi', 'mesaj', 'form_yeri', 'sayfa', 'ilk_kaynak', 'ilk_giris_sayfasi', 'son_kaynak',
  'utm_term', 'gclid', 'gbraid', 'wbraid', 'kvkk_onay', 'durum',
];

function doPost(e) {
  const data = JSON.parse(e.postData.contents || '{}');
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) sheet.appendRow(COLUMNS);
  data.durum = 'Yeni';
  sheet.appendRow(COLUMNS.map((c) => data[c] || ''));

  if (NOTIFY_EMAIL) {
    const body = COLUMNS.filter((c) => data[c]).map((c) => `${c}: ${data[c]}`).join('\n');
    MailApp.sendEmail(NOTIFY_EMAIL, `Yeni lead: ${data.ad_soyad || ''} · ${data.sehir || ''}`, body);
  }
  return ContentService.createTextOutput('ok');
}
