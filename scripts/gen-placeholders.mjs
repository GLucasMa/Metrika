// Genera SVGs placeholder con estética "Warm Industrial" para las secciones
// de Corte y grabado, Impresión 3D y Materiales. Uso: node scripts/gen-placeholders.mjs
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

const CREAM = '#f8f0ee';
const RED = '#b62924';
const CHARCOAL = '#2b2420';
const CHARCOAL_SOFT = '#4a3f38';

function svg({ label, sublabel, seed, tone = 'dark' }) {
  const bg = tone === 'dark' ? CHARCOAL : CREAM;
  const fg = tone === 'dark' ? CREAM : CHARCOAL;
  const lineColor = tone === 'dark' ? 'rgba(248,240,238,0.12)' : 'rgba(43,36,32,0.14)';

  // pseudo-random pero determinístico a partir del seed, para variar el
  // patrón de líneas entre placeholders sin depender de Math.random.
  let s = seed;
  const rnd = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };

  let lines = '';
  for (let i = 0; i < 6; i++) {
    const x1 = rnd() * 640;
    const y1 = rnd() * 480;
    const len = 60 + rnd() * 160;
    const angle = rnd() * 360;
    const rad = (angle * Math.PI) / 180;
    const x2 = x1 + len * Math.cos(rad);
    const y2 = y1 + len * Math.sin(rad);
    lines += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${lineColor}" stroke-width="2" stroke-dasharray="9 7"/>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" width="640" height="480" role="img" aria-label="${label}">
  <rect width="640" height="480" fill="${bg}"/>
  ${lines}
  <rect x="0" y="0" width="640" height="480" fill="none" stroke="${RED}" stroke-width="6" opacity="0.9"/>
  <line x1="40" y1="420" x2="130" y2="420" stroke="${RED}" stroke-width="3"/>
  <text x="40" y="220" font-family="Arial, sans-serif" font-size="26" font-weight="700" letter-spacing="2" fill="${fg}">IMAGEN</text>
  <text x="40" y="256" font-family="Arial, sans-serif" font-size="26" font-weight="700" letter-spacing="2" fill="${fg}">PLACEHOLDER</text>
  <text x="40" y="300" font-family="Arial, sans-serif" font-size="16" letter-spacing="1" fill="${RED}">${label.toUpperCase()}</text>
  <text x="40" y="326" font-family="Arial, sans-serif" font-size="13" fill="${lineColor.replace('0.12', '0.6').replace('0.14', '0.6')}">${sublabel}</text>
</svg>`;
}

function write(path, content) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content, 'utf8');
  console.log('wrote', path);
}

const base = new URL('../src/assets/images/', import.meta.url).pathname;

const corte = [
  ['placeholder-1', 'Pieza cortada en MDF', 1],
  ['placeholder-2', 'Grabado láser sobre madera', 2],
  ['placeholder-3', 'Detalle de corte en acrílico', 3],
  ['placeholder-4', 'Llavero de cuero grabado', 4],
];
corte.forEach(([name, sub, seed]) =>
  write(`${base}corte/${name}.svg`, svg({ label: 'Corte y grabado', sublabel: sub, seed, tone: 'dark' }))
);

const impresion = [
  ['placeholder-1', 'Pieza impresa en 3D', 11],
  ['placeholder-2', 'Prototipo funcional', 12],
  ['placeholder-3', 'Detalle de capas', 13],
];
impresion.forEach(([name, sub, seed]) =>
  write(`${base}impresion3d/${name}.svg`, svg({ label: 'Impresión 3D', sublabel: sub, seed, tone: 'light' }))
);

const materiales = [
  ['mdf', 'MDF', 21],
  ['acrilico', 'Acrílico', 22],
  ['cuero-pu', 'Cuero PU', 23],
  ['carton-gris', 'Cartón gris', 24],
];
materiales.forEach(([name, sub, seed]) =>
  write(`${base}materiales/${name}.svg`, svg({ label: 'Material', sublabel: sub, seed, tone: 'dark' }))
);
