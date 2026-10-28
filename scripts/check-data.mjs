// Okul verilerini kontrol eder: npm run check:data
import { readdirSync, readFileSync } from 'node:fs';

const dir = new URL('../src/data/schools/', import.meta.url);
const slugs = new Map();
let total = 0, est = 0, problems = 0;
const warn = (f, s, m) => { problems++; console.log(`  ⚠ ${f} › ${s}: ${m}`); };

for (const f of readdirSync(dir).filter((x) => x.endsWith('.json')).sort()) {
  const d = JSON.parse(readFileSync(new URL(f, dir), 'utf8'));
  console.log(`${d.city.padEnd(12)} ${d.schools.length} okul`);
  for (const s of d.schools) {
    total++;
    if (s.priceStatus === 'estimated') est++;
    if (slugs.has(s.slug)) warn(f, s.slug, `slug ${slugs.get(s.slug)} ile çakışıyor`);
    slugs.set(s.slug, f);
    if (/\bEC (English|London)|ec-english/i.test(`${s.name} ${s.brand} ${s.slug}`)) warn(f, s.slug, 'EC okulu listede!');
    if (!s.courses?.length) warn(f, s.slug, 'kurs yok');
    for (const c of s.courses ?? []) for (const p of c.prices) {
      if (!/\d/.test(p.weeks)) warn(f, s.slug, `"${c.name}" kademesi sayı içermiyor: "${p.weeks}"`);
      if (p.perWeek != null && (p.perWeek < 50 || p.perWeek > 2500)) warn(f, s.slug, `"${c.name}" şüpheli fiyat £${p.perWeek}`);
    }
    if (!s.description || s.description.length < 200) warn(f, s.slug, 'açıklama kısa');
  }
}
console.log(`\nToplam ${total} okul (${est} tahmini fiyatlı), ${problems} uyarı.`);
