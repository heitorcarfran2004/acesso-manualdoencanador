# HIDRODIAG — app de membros dos 120 Diagnósticos de Hidráulica Residencial

Entrega do produto **HIDRODIAG · 120 Diagnósticos de Hidráulica Residencial** (plano único de R$ 17,90: 120 fichas +
4 bônus). App de uma página só (PWA), copiado do app irmão em espanhol (`apps/diagnosticos-membros-es`): mesma
estrutura, telas, animações e recursos, com a identidade da página de vendas `funis/hidrodiag` (azul-marinho #0B2340,
laranja #F28C1B, gradiente #1B3C6B, Poppins nos títulos e Inter no texto). Tudo em português do Brasil, "você".

    node servidor.cjs     # http://localhost:4252

**Login de teste (só funciona em localhost/127.0.0.1):** `teste@hidrodiag.com.br`.
No teste, o suporte grava no próprio aparelho (a Edge Function só aceita e-mail com compra paga).

## Abas e telas

| rota | o que é |
|---|---|
| `#inicio` | busca por sintoma (o recurso principal), continuar, módulos, favoritas, vistas, coleção (PDF e índice), bônus |
| `#fichas` | busca, 8 módulos, chips por módulo (Vazamentos, Esgoto, Torneiras, Descargas, Chuveiros, Caixa-d'água, Bombas, Outros), Favoritas, Vistas, capa e índice |
| `#mod/<1-8>` | o módulo: a faixa da abertura + as fichas dele (25, 20, 15, 15, 15, 10, 10, 10) |
| `#ficha/<n>` | visor em tela cheia: pinça (até 5x), toque duplo, roda do mouse, arrastar, deslizar para trocar, favorita, índice, imprimir |
| `#pag/<capa\|indice\|modNN>` | capa, índice e aberturas de módulo no mesmo visor |
| `#bonus`, `#bonus/<1-4>` | os 4 bônus em texto (checklist que marca, tabelas, imprimir) |
| `#como` | Como usar: os 6 blocos da ficha, "No serviço" e as 4 faixas laranja |
| `#ajuda` | 14 perguntas frequentes, suporte (8 assuntos) e Minhas mensagens |
| `#app` | instalar, **usar sem internet** (guarda as 120 fichas no aparelho, ~36 MB) e notificações |
| `#perfil` | nome, foto, experiência, fichas abertas e favoritas, sair |

Favoritas, vistas, checklist dos bônus e estado do sininho ficam no `localStorage`, por e-mail (prefixo `hd:`).

## Busca por sintoma

Sem acento e sem maiúscula, por começo de palavra, com sinônimos de encanador (no `index.html`, objeto `BUSCA`):
pingando/gotejando/goteira, vazando/vazamento/minando, entupido/entupiu/não desce/privada, sem pressão/fraco/pouca água,
cheiro de esgoto/mau cheiro/fedendo, conta alta/conta subiu, caixa transbordando/ladrão ("caixa" sozinha = caixa-d'água),
descarga disparando/não para, chuveiro frio/não esquenta, bomba não liga/barulho, choque, água amarelada, batida no cano.
"Não" pontua mas não é obrigatório; cômodo (banheiro, cozinha…) vale menos que o sintoma; "sem estar entupido" e
"sem vazamento" no título não contam. Testado com 77 buscas reais em 01/11/2026: a ficha certa veio primeiro em todas
(ex.: "torneira pingando" → HD-046, "caixa transbordando" → HD-091, "descarga não para" → HD-063, "chuveiro frio" → HD-078,
"bomba não liga" → HD-102, "conta alta" → HD-001, "sem pressão" → HD-077, "ralo entupido" → HD-031).

## Como é montado

- `index.html` é editado à mão (não é gerado).
- `node preparar.cjs` (rodar de qualquer pasta) refaz o conteúdo a partir de
  `~/Downloads/Hidraulica Diagnosticos/Entregavel/`:
  fichas `paginas/HD-NNN.png` → webp 1086 px (tamanho nativo, para ler com zoom) + miniaturas 360 px; capa, índice e
  aberturas `paginas/extras/` → `assets/extras/`; a faixa de cada módulo (`assets/cats/modNN.webp`, medida em cada abertura:
  de y=54 até 8 px antes da caixa "Sintomas deste módulo", que começa em 520/592/669/635/640/611/595/558); a colagem do
  login; as capas dos bônus (da página de vendas); o PDF comprimido (`pdf/hidrodiag-120-diagnosticos.pdf`, 26 MB) e o `dados.js`.
  `--dados` refaz só o `dados.js` (títulos em frase, sintomas, causas, sistema, ferramenta e a faixa laranja de cada ficha).
- `bonus.js`: o texto dos 4 bônus. O conteúdo técnico sai do `plano-120.json` e cita a ficha de origem (`[HD-NNN]` vira link).
  O Bônus 4 (erros) copia o "como evitar" da faixa laranja da própria ficha, para nunca contradizer a ficha.
- `sw.js`: página, `dados.js` e `bonus.js` com rede primeiro; `/assets/` com cache primeiro (é o que faz as fichas
  abrirem sem internet). Ao trocar o conteúdo de algum arquivo de `/assets/`, troque o nome do cache (`hd-fichas-v1`)
  no `sw.js` e no `index.html` (objeto `OFF`).
- Ícone: `assets/icone.svg` (gota + chave de boca, sem marca de ninguém), renderizado com o Chrome headless em
  `icon-512/192/180.png` e `logo-192.webp`.
- `capturas/`: screenshots de conferência (390 px e desktop). Fora do deploy (`.vercelignore`).

## O que mudou em relação ao app em espanhol

- 8 módulos com quantidades diferentes no lugar das 12 categorias de 10; rota `#mod/<n>`.
- O filtro Hardware/Software virou chips dos 8 módulos (+ Favoritas e Vistas).
- O cartão do módulo mostra a faixa inteira (cada abertura tem altura própria): sem corte no nome do módulo.
- "Como usar" descreve a ficha de hidráulica; a seção "Hardware ou software" virou "As 4 faixas laranja".
- Bônus numerados 1 a 4; o 4 (erros) é montado das faixas laranja das fichas, como a "Tabla de pruebas" do ES.
- O login volta a conferir a compra (o ES está liberado para qualquer e-mail desde 29/10).

## Acesso (quem vê o quê)

Mesmo login dos outros apps: Edge Function `membros-acesso` (Supabase `dxybmayffxvepmwbyezc`), que lê
`membros_compras`. **Plano único:** o item `hidrodiag` libera tudo (120 fichas, PDF e os 4 bônus). O item
`hidrodiag-completo` também abre tudo.
Suporte: Edge Function `membros-suporte`, tabela `membros_suporte`, `app = 'hidrodiag'`. Push: `membros-push`,
`app = 'hidrodiag'`. `ACEITA_QUALQUER_COMPRA` (no começo do script do `index.html`) fica `false`.

### Webhook: feito

Atualizado e publicado pelo coordenador (wiapy-webhook, versão 11, 01/11/2026): toda compra do HIDRODIAG grava
`hidrodiag` e `hidrodiag-completo` em `membros_compras`. Nada a fazer aqui; o `mapa.ts` não foi mexido por este app.

## Pendências

- **Publicar:** precisa de repo próprio e projeto na Vercel (o token do `gh` desta máquina não cria repositório e o
  MCP da Vercel não cria projeto). O Heitor cria o repo, sobe esta pasta e importa na Vercel. PDF + imagens somam ~63 MB.
- **E-mail de entrega** do checkout: mandar o link do app quando houver domínio.
- **Capas dos bônus:** são as da página (`funis/hidrodiag/assets/bonus-3..6.webp`) e trazem "BÔNUS #3" a "#6" desenhado
  na arte, enquanto a página e o app numeram 1 a 4. Se incomodar, gerar as 4 capas de novo com 1 a 4.
- Os antigos bônus +40 e +30 diagnósticos saíram da oferta; não estão no app.
