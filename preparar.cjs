// Prepara o conteúdo do app de membros do HIDRODIAG (120 Diagnósticos de Hidráulica Residencial):
//   node apps/hidrodiag-membros/preparar.cjs            # tudo
//   node apps/hidrodiag-membros/preparar.cjs --dados    # só o dados.js (rápido)
//
// - fichas HD-001..HD-120 (PNG 1086x1448 do ChatGPT) -> assets/fichas/NNN.webp no tamanho nativo
//   (é o que deixa a letra miúda legível com zoom no celular) + miniatura em assets/fichas/p/
// - capa, índice e as 8 aberturas de módulo -> assets/extras/ (+ miniatura) e a faixa de cima de cada
//   abertura (número, nome do módulo e a foto) -> assets/cats/modNN.webp, o cartão do módulo
// - PDF comprimido -> pdf/hidrodiag-120-diagnosticos.pdf
// - capas dos 4 bônus: as mesmas imagens da página de vendas (funis/hidrodiag, bonus-3..6.webp)
// - dados.js: módulos e fichas (título, descrição, sintomas, causas, sistema...) para a busca e os bônus
// O index.html não é gerado: é editado à mão e lê o dados.js.
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const APP = __dirname;
const RAIZ = path.resolve(APP, '..', '..');
const ORIGEM = path.join(process.env.USERPROFILE || 'C:/Users/thorz', 'Downloads', 'Hidraulica Diagnosticos', 'Entregavel');
const PAGINAS = path.join(ORIGEM, 'paginas');
const PLANO = path.join(ORIGEM, 'plano-120.json');
const PDF = path.join(ORIGEM, 'HIDRODIAG - 120 Diagnósticos de Hidráulica Residencial (comprimido).pdf');
const FUNIL = path.join(RAIZ, 'funis', 'hidrodiag', 'assets');
const SO_DADOS = process.argv.includes('--dados');

function ff(args) { execFileSync('ffmpeg', ['-v', 'error', '-y', ...args], { stdio: 'inherit' }); }
function webp(de, para, filtro, q) { ff(['-i', de, '-vf', filtro, '-c:v', 'libwebp', '-quality', String(q), para]); }
function pasta(p) { fs.mkdirSync(p, { recursive: true }); }

/* ── títulos: o plano está em CAIXA ALTA (como na ficha); no app vira frase ── */
function frase(t) {
  const s = String(t).toLowerCase();
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// Os 8 módulos, com os nomes exatos das aberturas (mod01..mod08). ini/fim = faixa de fichas.
const MODS = [
  { n: 1, nome: 'Vazamentos e infiltrações', curto: 'Vazamentos', sub: 'Conta alta, manchas, cano furado e infiltração' },
  { n: 2, nome: 'Entupimentos e esgoto', curto: 'Esgoto', sub: 'Ralo, pia e vaso entupidos, mau cheiro e caixas' },
  { n: 3, nome: 'Torneiras e registros', curto: 'Torneiras', sub: 'Pingando, vazando, registro travado e pouca água' },
  { n: 4, nome: 'Vasos sanitários e descargas', curto: 'Descargas', sub: 'Caixa acoplada, válvula de parede e vaso vazando' },
  { n: 5, nome: 'Chuveiros, pressão e vazão', curto: 'Chuveiros', sub: 'Chuveiro fraco ou frio, choque e pressão da casa' },
  { n: 6, nome: "Caixas-d'água e boias", curto: "Caixa-d'água", sub: 'Transbordando, não enche, boia e água suja' },
  { n: 7, nome: 'Bombas e pressurizadores', curto: 'Bombas', sub: 'Não liga, não puxa, barulho e liga sozinha' },
  { n: 8, nome: 'Outros problemas hidráulicos', curto: 'Outros', sub: 'Batida no cano, ruídos, água amarelada e choque' },
];

function gerarDados() {
  const plano = JSON.parse(fs.readFileSync(PLANO, 'utf8'));
  const fichas = plano.fichas.map((f) => ({
    n: f.n,
    c: f.modulo,
    t: frase(f.titulo),
    d: f.descricao,
    si: f.sintomas,
    ca: f.causas.map((x) => x.titulo),
    sis: f.sistema,
    fe: f.ferramenta,
    // a faixa laranja da ficha ("antes de quebrar a parede…"): usada no Bônus 5 e no Bônus 6
    at: frase(f.antes_titulo),
    a: f.antes,
  }));
  if (fichas.length !== 120) throw new Error('esperava 120 fichas e achei ' + fichas.length);
  MODS.forEach((m) => {
    const l = fichas.filter((f) => f.c === m.n);
    m.ini = l[0].n; m.fim = l[l.length - 1].n; m.qtd = l.length;
    const conf = plano.fichas.find((f) => f.modulo === m.n).bloco;
    if (frase(conf) !== m.nome) throw new Error('nome do módulo ' + m.n + ' diferente do plano: ' + conf);
  });
  const js = '// Gerado por preparar.cjs a partir do plano-120.json. Não editar à mão.\n' +
    'window.MODS = ' + JSON.stringify(MODS) + ';\n' +
    'window.FICHAS = ' + JSON.stringify(fichas) + ';\n';
  fs.writeFileSync(path.join(APP, 'dados.js'), js);
  console.log('dados.js:', fichas.length, 'fichas,', (js.length / 1024).toFixed(0), 'KB');
  MODS.forEach((m) => console.log('  módulo', m.n, m.nome, m.ini + '–' + m.fim, '(' + m.qtd + ')'));
  return fichas;
}

const fichas = gerarDados();
if (SO_DADOS) { fichas.forEach((f) => console.log(String(f.n).padStart(3, '0'), f.c, f.t)); process.exit(0); }

pasta(path.join(APP, 'assets/fichas/p')); pasta(path.join(APP, 'assets/extras/p')); pasta(path.join(APP, 'assets/cats'));
pasta(path.join(APP, 'assets/bonus')); pasta(path.join(APP, 'assets/login')); pasta(path.join(APP, 'pdf'));

// fichas: tamanho nativo (1086 px) e miniatura de 360 px
for (let n = 1; n <= 120; n++) {
  const nnn = String(n).padStart(3, '0');
  const de = path.join(PAGINAS, 'HD-' + nnn + '.png');
  webp(de, path.join(APP, 'assets/fichas', nnn + '.webp'), 'scale=1086:-2', 82);
  webp(de, path.join(APP, 'assets/fichas/p', nnn + '.webp'), 'scale=360:-2', 72);
  if (n % 20 === 0) console.log('fichas:', n);
}
// capa, índice e aberturas
// A faixa de cima de cada abertura vai de y=54 (logo abaixo da barra "MÓDULO NN") até 8 px antes da
// caixa "SINTOMAS DESTE MÓDULO". A caixa começa numa altura diferente em cada abertura; medido em 01/11/2026
// pela linha de cima da caixa: 01=520 02=592 03=669 04=635 05=640 06=611 07=595 08=558.
const TOPO_CAIXA = [0, 520, 592, 669, 635, 640, 611, 595, 558];
const EXTRAS = ['capa', 'indice'].concat(MODS.map((m) => 'mod' + String(m.n).padStart(2, '0')));
for (const x of EXTRAS) {
  const de = path.join(PAGINAS, 'extras', x + '.png');
  webp(de, path.join(APP, 'assets/extras', x + '.webp'), 'scale=1086:-2', 82);
  webp(de, path.join(APP, 'assets/extras/p', x + '.webp'), 'scale=360:-2', 72);
  if (x.startsWith('mod')) {
    const alt = TOPO_CAIXA[+x.slice(3)] - 8 - 54;
    webp(de, path.join(APP, 'assets/cats', x + '.webp'), 'crop=1086:' + alt + ':0:54,scale=720:-2', 78);
  }
}
// capa da coleção no Início (a capa inteira, mais leve)
webp(path.join(PAGINAS, 'extras', 'capa.png'), path.join(APP, 'assets/capa-720.webp'), 'scale=720:-2', 80);
// colagem do login: 6 fichas reais, cortadas no topo (título, sintomas e ilustração)
[1, 61, 29, 78, 91, 102].forEach((n, i) => {
  const nnn = String(n).padStart(3, '0');
  webp(path.join(PAGINAS, 'HD-' + nnn + '.png'), path.join(APP, 'assets/login', 'f' + (i + 1) + '.webp'), 'crop=1086:1358:0:0,scale=416:-2', 74);
});
// bônus 1 a 4 do app = capas bonus-3..6 da página de vendas (a oferta virou plano único com esses 4 bônus;
// os antigos bônus 1 e 2, +40 e +30 diagnósticos, saíram da oferta)
for (let i = 1; i <= 4; i++) fs.copyFileSync(path.join(FUNIL, 'bonus-' + (i + 2) + '.webp'), path.join(APP, 'assets/bonus', 'bonus-' + i + '.webp'));
// PDF
fs.copyFileSync(PDF, path.join(APP, 'pdf', 'hidrodiag-120-diagnosticos.pdf'));
console.log('pronto: fichas, extras, módulos, login, bônus e PDF');
