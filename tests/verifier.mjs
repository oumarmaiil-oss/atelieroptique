// Vérifie l'Atelier Optique : charge les 4 onglets et tous les exemples sur plusieurs tailles d'écran,
// signale toute erreur JavaScript, toute requête réseau (fonctionnement hors ligne) et tout débordement horizontal.
// Usage : npm i --no-save playwright-core && node tests/verifier.mjs
import { chromium } from 'playwright-core';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const file = 'file://' + path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'index.html');
const sizes = [[1440, 900], [1024, 768], [390, 844], [844, 390]];
const browser = await chromium.launch({ channel: process.env.CHROME_CHANNEL || undefined });
let pb = 0;
for (const [w, h] of sizes) {
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  page.on('pageerror', e => { pb++; console.log(`[${w}×${h}] erreur : ${e.message}`); });
  page.on('console', m => { if (m.type() === 'error') { pb++; console.log(`[${w}×${h}] console : ${m.text()}`); } });
  page.on('request', r => { const u = r.url(); if (!u.startsWith('file:') && !u.startsWith('data:')) { pb++; console.log(`[${w}×${h}] réseau : ${u}`); } });
  await page.goto(file);
  for (const t of ['milieux', 'images', 'oeil', 'ondes']) {
    const ids = await page.evaluate(t => [...document.querySelectorAll(`#sim-${t} .excard`)].map(e => e.dataset.id), t);
    for (const id of ids) {
      await page.evaluate(([t, id]) => { location.hash = `${t}&ex=${id}`; }, [t, id]);
      await page.waitForTimeout(120);
      if (await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1)) { pb++; console.log(`[${w}×${h}] débordement : ${t} / ${id}`); }
    }
  }
  await page.evaluate(() => { location.hash = 'defis'; });
  await page.waitForTimeout(150);
  await page.close();
}
await browser.close();
console.log(pb ? `${pb} problème(s).` : 'Tout est en ordre : aucun problème détecté.');
process.exit(pb ? 1 : 0);
