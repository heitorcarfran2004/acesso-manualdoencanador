// Os 4 bônus do HIDRODIAG (texto do próprio app, não são imagens do ChatGPT). Plano único de R$ 17,90:
// vêm com as fichas para toda compra. Numerados 1 a 4 como na página de vendas (funis/hidrodiag/textos/pt.json,
// chave "bonus"): Ferramentas, Bitolas/Conexões/Pressões, Checklist antes de quebrar a parede, Erros de diagnóstico.
// As capas são as da página (lá ainda se chamam bonus-3..6.webp e trazem "BÔNUS #3..#6" desenhado na arte).
// O conteúdo técnico sai das próprias fichas (plano-120.json): cada item cita a ficha de onde veio com [HD-NNN],
// que vira link no app. Números de norma usados nas fichas: 40 m.c.a. e caimento de 1 a 2% no esgoto.
// Tipos de bloco: intro (texto), itens (checkbox que marca e fica salvo no aparelho), tabela (cab + linhas; compacta
// = continua tabela no celular), notas (lista simples), aviso (caixa amarela). O Bônus 4 usa "erros": o erro escrito
// aqui e o "como evitar" copiado da faixa laranja da ficha (dados.js), para nunca contradizer a ficha.
window.BONUS = [
  {
    n: 1,
    titulo: 'Guia Rápido de Ferramentas para Diagnóstico',
    sub: '4 grupos · 21 ferramentas',
    desc: 'Qual ferramenta usar em cada verificação das fichas, o que dá para confirmar com o que você já tem na caixa e quando o instrumento faz falta de verdade.',
    marcar: true,
    rotuloMarcar: 'você já tem',
    rotuloItem: 'Tenho',
    secoes: [
      { t: 'O básico da caixa', e: '🧰', intro: 'Com isso você já faz a maioria das verificações das 120 fichas.', itens: [
        '<b>Balde e cronômetro</b> (o do celular serve): mede a vazão do ponto. Solte o flexível num balde e conte 10 segundos para saber se o defeito é da torneira ou da linha [HD-047] [HD-118].',
        '<b>Corante:</b> pingado na caixa acoplada, mostra em 15 minutos a descarga passando água para o vaso [HD-001] [HD-061]. Na água do ralo, mostra de onde vem o pingo no teto de baixo [HD-003].',
        '<b>Papel toalha:</b> forrado embaixo da pia ou passado na base do vaso, marca de onde vem a gota antes de trocar qualquer peça [HD-007] [HD-072].',
        '<b>Lanterna</b> (de cabeça, se der): olhar haste, sifão, rosca e a primeira gota antes de desmontar [HD-108].',
        '<b>Manômetro com rosca de torneira:</b> lê a pressão no ponto. Acima de 40 m.c.a. pede válvula redutora [HD-089]. Deixado 30 minutos num trecho fechado, mostra se ele perde pressão [HD-002].',
        '<b>Chaves</b> de boca, de grifo, de fenda e Allen. Não force volante travado com chave de grifo: a haste quebra [HD-051].',
        '<b>Fita veda rosca:</b> enrolada no sentido do aperto e sem exagero. Mais fita e mais força trincam a conexão [HD-012].',
        '<b>Trena e nível:</b> conferem o caimento do esgoto e o nível do vaso e da base da caixa-d\'água [HD-072] [HD-099].',
        '<b>Desentupidor, mola fina e mola longa:</b> pia, ralo e ramal. Gancho para tirar cabelo da válvula do lavatório [HD-041].',
        '<b>Escada</b> firme: forro, caixa-d\'água e ventilação do esgoto no telhado [HD-114].'
      ] },
      { t: 'Para achar sem quebrar', e: '🔍', intro: 'São as que mais economizam parede e piso. Ajudam muito, mas a ficha sempre traz um teste simples antes.', itens: [
        '<b>Haste de escuta ou geofone:</b> ouve o ruído da água no tubo enterrado ou embutido. Abra só onde o ruído se concentra [HD-001] [HD-006] [HD-113].',
        '<b>Medidor de umidade:</b> mapa da umidade em alturas diferentes, para achar o pico antes de abrir [HD-005] [HD-016] [HD-025].',
        '<b>Higrômetro:</b> umidade do ar. Mofo no teto do banheiro sem vazamento costuma ser vapor do banho [HD-024].',
        '<b>Câmera de inspeção:</b> mostra barriga, raiz, quebra e ligação errada no esgoto, e a distância até o defeito [HD-030] [HD-037] [HD-044].',
        '<b>Teste de fumaça:</b> fumaça na rede de esgoto mostra a junta ou o tubo que solta cheiro [HD-026] [HD-038] [HD-114].',
        '<b>Termômetro:</b> ida e retorno das placas do aquecedor solar, água do boiler e misturador [HD-088] [HD-017] [HD-053].'
      ] },
      { t: 'Parte elétrica da hidráulica', e: '⚡', intro: 'Chuveiro, torneira elétrica, bomba e boia elétrica. Com choque, fio derretido ou disjuntor desarmando, desligue tudo e chame o eletricista [HD-080] [HD-119].', itens: [
        '<b>Multímetro:</b> com o disjuntor desligado, mede a resistência do chuveiro (circuito aberto = queimada) e testa a boia elétrica [HD-078] [HD-098]. Também confere a tensão na chegada da bomba [HD-102].',
        '<b>Alicate amperímetro:</b> mede a corrente da bomba ligada para comparar com a placa do motor [HD-106].',
        '<b>Calibrador de pneu:</b> mede e corrige o ar do tanque do pressurizador. Sem ar no tanque, ele fica ligando e desligando [HD-103].'
      ] },
      { t: 'Para os testes de pressão', e: '📏', intro: 'Peças que deixam o manômetro pronto para qualquer ponto.', itens: [
        '<b>Adaptadores de rosca</b> (1/2" e 3/4") e um registro pequeno para montar o manômetro na saída da torneira ou do chuveiro.',
        '<b>Tampões (cap) e plugues</b> para fechar o trecho que você vai testar por 30 minutos [HD-002] [HD-005].'
      ] },
      { t: 'Dá para improvisar', e: '💡', notas: [
        '<b>Sem medidor de vazão:</b> balde de volume conhecido e cronômetro [HD-047].',
        '<b>Sem câmera:</b> abra a caixa de inspeção e jogue 3 baldes seguidos no vaso. Se a água chega fraca, a obstrução está antes da caixa [HD-030].',
        '<b>Sem geofone:</b> feche os registros por trecho e olhe o hidrômetro. O trecho que faz o ponteiro parar é o que vaza [HD-001].',
        '<b>Sem medidor de umidade:</b> marque a borda da mancha a lápis e volte em 24 horas. Se cresceu sem uso do banho, é tubo com pressão [HD-002].',
        '<b>Copo transparente:</b> água branca que clareia de baixo para cima é ar, não sujeira [HD-120].',
        '<b>Vinagre:</b> arejador de molho por 1 hora tira o calcário do jato torto [HD-054].'
      ] }
    ],
    aviso: 'Compre por partes: o básico da caixa primeiro. Haste de escuta, medidor de umidade e câmera se pagam no primeiro serviço em que evitam quebrar no lugar errado.'
  },
  {
    n: 2,
    titulo: 'Tabela de Bitolas, Conexões e Pressões',
    sub: 'Tubos · conexões · conversão de pressão',
    desc: 'Medida do tubo em milímetro e em polegada, as conexões mais usadas e as faixas de pressão de referência, numa tabela pronta para abrir no celular durante o serviço.',
    secoes: [
      { t: 'Água fria: PVC soldável (marrom)', e: '💧', intro: 'A medida do soldável é o diâmetro externo, em milímetros. A polegada é a medida comercial equivalente, a mesma da peça de rosca.', tabela: {
        cab: ['Tubo', 'Polegada', 'Onde costuma ir'],
        linhas: [
          ['20 mm', '1/2"', 'Ponto de consumo: torneira, chuveiro, vaso'],
          ['25 mm', '3/4"', 'Ramal e pontos de maior vazão'],
          ['32 mm', '1"', 'Coluna e saída da caixa-d\'água'],
          ['40 mm', '1 1/4"', 'Coluna e barrilete'],
          ['50 mm', '1 1/2"', 'Barrilete'],
          ['60 mm', '2"', 'Alimentação e barrilete maior'],
          ['75 mm', '2 1/2"', 'Alimentação de prédio'],
          ['85 mm', '3"', 'Alimentação de prédio'],
          ['110 mm', '4"', 'Alimentação de prédio']
        ]
      }, notas: [
        '<b>Água quente</b> pede tubo próprio para calor (CPVC, PPR ou PEX). PVC comum em água quente vai vazar de novo em outro ponto [HD-010].',
        '<b>Ferro galvanizado</b> velho fura por dentro em vários pontos. Trocar só o trecho furado vira chamado toda semana [HD-019].'
      ] },
      { t: 'Esgoto: PVC branco', e: '🚽', tabela: {
        cab: ['Tubo', 'Onde vai', 'Atenção'],
        linhas: [
          ['40 mm', 'Lavatório, ralo do box, tanque', 'Pequeno para a máquina de lavar [HD-034]'],
          ['50 mm', 'Pia da cozinha, máquina de lavar, saída da caixa sifonada', 'Máquina em 40 mm faz o ralo transbordar [HD-034]'],
          ['75 mm', 'Ramais secundários e tubo de queda das pias', 'Pequeno para a saída do vaso [HD-030]'],
          ['100 mm', 'Vaso sanitário, ramal principal e tubo de queda', 'Refaça com caimento de pelo menos 1% [HD-030]']
        ]
      }, notas: [
        '<b>Caimento do esgoto: 1% a 2%</b>, ou seja, de 1 a 2 cm por metro. Tubo de 100 mm: no mínimo 1%. Tubo de 75 mm ou menor: 2%.',
        '<b>Barriga</b> (trecho sem caimento) junta sujeira e o entupimento volta. Só a câmera mostra [HD-037].',
        '<b>Fecho hídrico:</b> ralo pouco usado seca o sifão e o cheiro sobe. Encha com 2 litros de água e espere 1 hora antes de quebrar [HD-026].',
        '<b>Água de chuva</b> nunca vai ligada no esgoto [HD-040].'
      ] },
      { t: 'Conexões que mais aparecem', e: '🔩', tabela: {
        cab: ['Conexão', 'Para que serve', 'Cuidado'],
        linhas: [
          ['Joelho 90° e 45°', 'Mudar a direção do tubo', 'No esgoto, curva longa ou dois joelhos de 45° entopem menos'],
          ['Tê e junção', 'Tirar um ramal do tubo', 'No esgoto, a ligação entra a favor do fluxo (junção)'],
          ['Luva', 'Emendar dois tubos', 'Lixe, limpe, encaixe até o fundo e espere a cura [HD-013]'],
          ['Luva de correr', 'Consertar trecho furado sem desmontar a linha', 'Abra só em volta do furo [HD-011]'],
          ['União', 'Poder desmontar depois (bomba, filtro, aquecedor)', 'Anel de vedação limpo e sem torcer'],
          ['Adaptador soldável com rosca', 'Passar do soldável para a rosca (registro, torneira)', 'Fita no sentido do aperto [HD-012]'],
          ['Joelho com bucha de latão', 'Ponto de torneira e de chuveiro na parede', 'Olhe a rosca antes de quebrar: a bucha pode ter girado [HD-056]'],
          ['Bucha de redução', 'Passar de um diâmetro para outro', 'Redução na saída do vaso entope [HD-030]'],
          ['Registro de gaveta', 'Abrir e fechar a passagem de um trecho (geral, ramais)', 'Parado muito tempo, trava. Gire 2 vezes por ano [HD-051]'],
          ['Registro de pressão', 'Controlar a água do chuveiro', 'Vazamento pelo volante se resolve por fora, com anel ou castelo [HD-049]'],
          ['Caixa e ralo sifonados', 'Receber a água do piso, com fecho hídrico', 'Limpe e teste com balde antes de quebrar o piso [HD-031]'],
          ['Anel de vedação do vaso', 'Vedar a saída do vaso no esgoto', 'Vaso que balançou muito pede anel novo [HD-072]']
        ]
      } },
      { t: 'Pressão: como ler e converter', e: '📏', notas: [
        '<b>1 metro de altura = 1 m.c.a.</b> Em casa com caixa-d\'água, a pressão no ponto é a altura da água da caixa acima dele: caixa 3 m acima do chuveiro dá cerca de 3 m.c.a. Num ponto baixo e num alto, o manômetro tem que bater com a diferença de altura [HD-077].',
        '<b>Limite: 40 m.c.a.</b> Acima disso, instale válvula redutora antes de trocar reparos, flexíveis e tubos, senão a peça nova estraga de novo [HD-014] [HD-089].',
        '<b>Peça de alta pressão</b> em casa de caixa-d\'água sai fraca mesmo nova: leia a pressão mínima na embalagem [HD-060].',
        '<b>Pressurizador:</b> antes de trocar bomba ou pressostato, calibre o ar do tanque [HD-103].'
      ], tabela: {
        compacta: true,
        cab: ['m.c.a.', 'kgf/cm²', 'bar', 'psi', 'kPa'],
        linhas: [
          ['1', '0,1', '0,1', '1,4', '9,8'],
          ['5', '0,5', '0,49', '7,1', '49'],
          ['10', '1,0', '0,98', '14,2', '98'],
          ['20', '2,0', '1,96', '28,4', '196'],
          ['30', '3,0', '2,94', '42,7', '294'],
          ['40', '4,0', '3,92', '56,9', '392'],
          ['50', '5,0', '4,90', '71,1', '490']
        ]
      } }
    ],
    aviso: 'Valores de referência para o diagnóstico. Na hora de comprar a peça, vale a medida e a pressão que o fabricante informa na embalagem.'
  },
  {
    n: 3,
    titulo: 'Checklist Antes de Quebrar a Parede',
    sub: '6 etapas · 28 verificações',
    desc: 'Uma lista objetiva para rodar antes de abrir parede ou piso. Se algum item não foi verificado, você ainda não sabe onde está o vazamento.',
    marcar: true,
    rotuloMarcar: 'verificações feitas',
    reiniciar: 'Começar outra visita',
    confirmar: 'Desmarcar tudo e começar a checklist de outra visita?',
    zerado: 'Checklist pronta para outra visita.',
    completo: '✅ Checklist completa: pode abrir no ponto confirmado.',
    secoes: [
      { t: 'Relato do cliente', e: '📋', itens: [
        'Onde aparece (parede, teto, piso, rodapé ou quintal), desde quando e se está crescendo.',
        'Se piora com o banho, com a descarga, com a máquina de lavar ou só com chuva.',
        'Se a conta de água subiu sem mudar a rotina [HD-001].',
        'Se teve obra, furo na parede ou conserto nesse lugar [HD-011] [HD-025].',
        'O que fica em cima da mancha: banheiro, caixa-d\'água ou ar-condicionado [HD-023].'
      ] },
      { t: 'Teste do hidrômetro', e: '⏱️', itens: [
        'Leitura do hidrômetro anotada antes e depois do teste.',
        'Caixa cheia, boia fechada e todos os pontos de uso fechados.',
        'Ponteiro observado por 15 minutos. Se girou, há vazamento depois do relógio [HD-001] [HD-016].',
        'Corante na caixa acoplada de todos os vasos, com 15 minutos de espera [HD-001] [HD-061].',
        'Boia e saída do ladrão conferidas com a caixa cheia [HD-001].'
      ] },
      { t: 'Registros fechados', e: '🔧', itens: [
        'Entrada da caixa fechada e hidrômetro observado. Se ainda gira, o vazamento está entre o relógio e a caixa [HD-001].',
        'Registro do trecho suspeito fechado e mancha acompanhada por 24 horas. Se secou, é esse trecho [HD-009] [HD-022].',
        'Só a água quente fechada por 24 horas. Se secou, é o circuito quente [HD-005] [HD-023].',
        'Saída da caixa fechada por uma noite: separa caixa, descarga e tubo [HD-096].'
      ] },
      { t: 'Teste de estanqueidade', e: '📏', itens: [
        'Manômetro no trecho por 30 minutos. Se a pressão caiu, o trecho vaza [HD-002] [HD-005].',
        'Fria e quente testadas em separado [HD-010].',
        'Ramais testados por trecho: o que perde pressão é o que vaza [HD-096].',
        'Trajeto do tubo percorrido com haste de escuta ou geofone, ponto marcado onde o ruído se concentra [HD-001] [HD-113].'
      ] },
      { t: 'Onde aparece a umidade', e: '💧', itens: [
        'Borda da mancha marcada a lápis, com data, e conferida depois de 24 horas [HD-002].',
        'Umidade medida em alturas diferentes. Mancha contínua na base costuma ser umidade do solo, não cano [HD-016].',
        'Água jogada só no ralo por 10 minutos, com corante, olhando por baixo [HD-002] [HD-003].',
        'Parede do box molhada por 10 minutos com o ralo tampado: rejunte ou impermeabilização [HD-002] [HD-008].',
        'Mangueira na janela, no telhado e na calha. Se só molha com chuva e o hidrômetro fica parado, não é cano [HD-015].',
        'Mofo seco no teto do banheiro conferido: vapor do banho se resolve com ventilação [HD-024].'
      ] },
      { t: 'Conclusão', e: '✅', itens: [
        'O ponto foi confirmado por pelo menos 2 testes diferentes.',
        'Você sabe se a água é da rede (com pressão), do esgoto ou da chuva [HD-006].',
        'A abertura vai ser só no trecho confirmado, do tamanho do reparo.',
        'Leituras e fotos guardadas para mostrar ao cliente.'
      ] }
    ],
    aviso: 'Só quebre depois de confirmar o ponto do vazamento. Parede molhada leva semanas para secar: depois do conserto, combine com o cliente o acompanhamento por data antes de abrir de novo [HD-025].'
  },
  {
    n: 4,
    titulo: 'Guia dos Erros de Diagnóstico Mais Comuns e Como Evitá-los',
    sub: '5 erros de raciocínio · 28 erros por ficha',
    desc: 'Os enganos que mais fazem encanador quebrar no lugar errado ou trocar peça boa. Cada erro com o que fazer para não cair nele.',
    intro: 'Primeiro, os 5 erros de raciocínio que aparecem em todos os módulos. Depois, 28 erros que acontecem no dia a dia, cada um com o «como evitar» tirado da faixa laranja da própria ficha.',
    secoes: [
      { t: 'Os 5 erros de raciocínio', e: '🧠', notas: [
        '<b>Sintoma parecido, causa diferente.</b> Mancha na parede do banheiro pode ser cano, ralo, rejunte ou box [HD-002]. Confira «O que o cliente relata» antes de seguir a ficha.',
        '<b>Conclusão apressada.</b> Achou a primeira coisa errada e parou de testar. Faça as verificações até o fim: às vezes são duas causas juntas.',
        '<b>Teste na ordem errada.</b> Começar pelo mais caro (quebrar, trocar a peça) antes do mais simples (corante, hidrômetro, regulagem). A ordem da ficha vai do simples ao invasivo.',
        '<b>Trocar a peça sem achar a causa.</b> A peça nova estraga do mesmo jeito: pressão alta, ar na linha, tensão errada [HD-079] [HD-089].',
        '<b>Confiar na mancha.</b> A água corre dentro da parede: a mancha quase nunca fica em cima do vazamento [HD-002].'
      ] }
    ],
    erros: [
      { n: 1, erro: 'Quebrar a parede atrás de um cano furado quando quem gasta a água é a descarga passando para o vaso.' },
      { n: 2, erro: 'Abrir a parede bem em cima da mancha.' },
      { n: 15, erro: 'Procurar cano furado numa infiltração que só aparece em dia de chuva.' },
      { n: 24, erro: 'Abrir o teto por causa de mofo que é vapor do banho.' },
      { n: 25, erro: 'Abrir de novo o mesmo lugar porque a parede continua úmida depois do conserto.' },
      { n: 26, erro: 'Quebrar o piso por causa de cheiro que vem só do ralo seco.' },
      { n: 29, erro: 'Desmontar o vaso quando a caixa de inspeção está cheia e o problema é a rede.' },
      { n: 30, erro: 'Desentupir o vaso toda semana sem achar a causa fixa.' },
      { n: 36, erro: 'Quebrar dentro de casa com a rede da rua cheia.' },
      { n: 46, erro: 'Trocar a torneira inteira quando é só o vedante ou o reparo.' },
      { n: 50, erro: 'Condenar o registro pelo filete dos primeiros minutos.' },
      { n: 51, erro: 'Forçar o volante travado com chave de grifo.' },
      { n: 61, erro: 'Trocar o mecanismo da caixa acoplada sem fazer o teste do corante.' },
      { n: 64, erro: 'Culpar o vaso pela descarga fraca sem fazer o teste do balde.' },
      { n: 70, erro: 'Trocar o vaso porque a água do fundo baixa sozinha.' },
      { n: 77, erro: 'Vender pressurizador sem conferir o registro e a altura da caixa.' },
      { n: 79, erro: 'Trocar a terceira resistência do chuveiro sem achar a causa.' },
      { n: 80, erro: 'Trocar o chuveiro que dá choque e liberar o banho.' },
      { n: 91, erro: 'Trocar a boia que só precisava de regulagem.' },
      { n: 92, erro: 'Vender bomba quando a boia só travou.' },
      { n: 102, erro: 'Mandar rebobinar a bomba que não liga sem conferir disjuntor, boia e tensão.' },
      { n: 104, erro: 'Trocar o pressostato do pressurizador que liga sozinho.' },
      { n: 105, erro: 'Trocar a bomba por causa de barulho que é cavitação.' },
      { n: 106, erro: 'Condenar o motor que esquenta sem procurar a causa.' },
      { n: 111, erro: 'Abrir a parede por causa de batida no cano.' },
      { n: 115, erro: 'Achar que estalo na parede com água quente é vazamento.' },
      { n: 119, erro: 'Trocar a torneira ou o registro que dá choque.' },
      { n: 120, erro: 'Trocar filtro, caixa ou tubulação por água branca que é só ar.' }
    ],
    aviso: 'Na dúvida, volte para a ficha e siga as verificações na ordem: elas vão do teste mais simples ao mais invasivo.'
  }
];
