/**
 * dados.js — NordForma3D
 * =====================================================
 * EDITE AQUI para alterar qualquer informação do site.
 * Nenhum conhecimento de HTML/CSS é necessário para
 * as alterações abaixo.
 * =====================================================
 */

const DADOS = {

  /* ─── EMPRESA ──────────────────────────────────── */
  empresa: {
    nome:        "NordForma3D",
    slogan:      "Impressão 3D Personalizada no Sertão PE",
    descricao:   "Impressão 3D personalizada em Salgueiro, Pernambuco. Envio seguro para todo o Brasil.",
    cidade:      "Salgueiro",
    estado:      "PE",
    pais:        "Brasil",
    logo:        "img/logo.png",      // caminho para o arquivo de logo
    logoAlt:     "NordForma3D",
    ano:         2025,
  },

  /* ─── CONTATO ───────────────────────────────────── */
  contato: {
    whatsappNumero: "55SEUNUMERO",    // ex: "5587999999999"
    whatsappMensagem: "Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento.",
    instagram:     "https://instagram.com/nordforma3d",
    instagramHandle: "@nordforma3d",
  },

  /* ─── NAVEGAÇÃO ─────────────────────────────────── */
  // Ordem e rótulos do menu
  navegacao: [
    { label: "Início",    href: "index.html"    },
    { label: "Serviços",  href: "servicos.html" },
    { label: "Galeria",   href: "galeria.html"  },
    { label: "Sobre",     href: "sobre.html"    },
  ],

  /* ─── HERO (página inicial) ─────────────────────── */
  hero: {
    tag:       "Salgueiro · Pernambuco",
    titulo:    "Impressão 3D",
    tituloDestaque: "Personalizada",
    tituloFim: "no Sertão PE",
    descricao: "Peças sob medida, protótipos e decorações com envio seguro para todo o Brasil. Produção local, qualidade premium.",
    btnPrimario:   "Falar no WhatsApp",
    btnSecundario: "Ver projetos →",
    btnSecundarioHref: "galeria.html",

    // Números de destaque abaixo dos botões
    stats: [
      { numero: "100%", label: "Personalizado" },
      { numero: "BR",   label: "Envio nacional" },
      { numero: "3D",   label: "Alta precisão"  },
    ],
  },

  /* ─── CARROSSEL HERO ────────────────────────────── */
  // Para adicionar fotos: adicione mais objetos à lista.
  // src = caminho da imagem, alt = texto alternativo (acessibilidade/SEO)
  carrosselHero: [
    { src: "img/hero-carrossel-1.jpeg", alt: "Peça impressa em 3D - projeto 1" },
    { src: "img/hero-carrossel-2.jpeg", alt: "Peça impressa em 3D - projeto 2" },
    { src: "img/hero-carrossel-3.jpeg", alt: "Peça impressa em 3D - projeto 3" },
    { src: "img/hero-carrossel-4.jpeg", alt: "Peça impressa em 3D - projeto 4" },
    { src: "img/hero-carrossel-5.jpeg", alt: "Peça impressa em 3D - projeto 5" },
    { src: "img/hero-carrossel-6.jpeg", alt: "Peça impressa em 3D - projeto 6" },
  ],

  /* ─── DIFERENCIAIS (strip da home) ─────────────── */
  diferenciais: [
    { icone: "⚡", titulo: "Atendimento rápido",  descricao: "Resposta ágil no WhatsApp"      },
    { icone: "🎯", titulo: "100% personalizado",  descricao: "Da ideia à peça finalizada"     },
    { icone: "📦", titulo: "Envio seguro",         descricao: "Embalagem própria para 3D"     },
    { icone: "✨", titulo: "Acabamento premium",   descricao: "Atenção a cada detalhe"        },
    { icone: "📍", titulo: "Sertão PE",            descricao: "Atende região e todo o BR"     },
  ],

  /* ─── SERVIÇOS ──────────────────────────────────── */
  servicos: [
    {
      icone: "🎨",
      titulo: "Peças Decorativas",
      descricao: "Objetos artísticos, enfeites, presentes e decoração em geral. Perfeitos para casa, escritório ou presentear alguém especial.",
    },
    {
      icone: "🔬",
      titulo: "Protótipos",
      descricao: "Desenvolvimento de protótipos funcionais para projetos, startups e indústria. Valide sua ideia antes de produzir em escala.",
    },
    {
      icone: "🧩",
      titulo: "Miniaturas",
      descricao: "Miniaturas de personagens, veículos, monumentos e objetos. Alta riqueza de detalhes em escala reduzida.",
    },
    {
      icone: "🔑",
      titulo: "Chaveiros Personalizados",
      descricao: "Chaveiros com nome, logo, personagem ou qualquer design exclusivo. Brindes, presentes e souvenirs únicos.",
    },
    {
      icone: "🔩",
      titulo: "Suportes e Acessórios",
      descricao: "Suportes, encaixes, capas, adaptadores e peças funcionais sob medida para qualquer necessidade.",
    },
    {
      icone: "📦",
      titulo: "Impressão sob Encomenda",
      descricao: "Você envia o arquivo 3D, nós imprimimos. Aceitamos STL, OBJ e outros formatos. Simples assim.",
    },
    {
      icone: "🎁",
      titulo: "Presentes Personalizados",
      descricao: "Peças únicas para datas especiais. Aniversário, casamento, formatura — criamos algo exclusivo para cada momento.",
    },
    {
      icone: "🏢",
      titulo: "Soluções Empresariais",
      descricao: "Peças para sinalização, exposição, treinamento e branding. Atendemos demandas de empresas de todos os portes.",
    },
  ],

  /* ─── PROCESSO (página serviços) ───────────────── */
  processo: [
    { passo: "Passo 1", titulo: "Solicite o orçamento", descricao: "Envie sua ideia, foto ou arquivo pelo WhatsApp." },
    { passo: "Passo 2", titulo: "Receba a proposta",    descricao: "Respondemos com prazo e valor rapidamente."    },
    { passo: "Passo 3", titulo: "Aprovação e produção", descricao: "Aprovado, iniciamos a impressão da sua peça."   },
    { passo: "Passo 4", titulo: "Envio com segurança",  descricao: "Embalagem própria para proteger durante o transporte." },
  ],

  /* ─── GALERIA ───────────────────────────────────── */
  // Para adicionar projetos: adicione mais objetos.
  // src pode ser caminho de imagem ou null (mostra o icone como placeholder)
  galeria: [
    { src: null, icone: "🏛️", categoria: "Decorativa",   alt: "Peça decorativa impressa em 3D" },
    { src: null, icone: "⚙️", categoria: "Protótipo",    alt: "Protótipo impresso em 3D"       },
    { src: null, icone: "🦁", categoria: "Miniatura",    alt: "Miniatura impressa em 3D"       },
    { src: null, icone: "🔑", categoria: "Chaveiro",     alt: "Chaveiro personalizado 3D"      },
    { src: null, icone: "📐", categoria: "Suporte",      alt: "Suporte impresso em 3D"         },
    { src: null, icone: "🖼️", categoria: "Arte",         alt: "Peça artística impressa em 3D"  },
    { src: null, icone: "🎁", categoria: "Presente",     alt: "Presente personalizado 3D"      },
    { src: null, icone: "🏢", categoria: "Empresarial",  alt: "Solução empresarial 3D"         },
    { src: null, icone: "🧩", categoria: "Miniatura",    alt: "Miniatura 3D colecionável"      },
    { src: null, icone: "🏛️", categoria: "Decorativa",   alt: "Decoração impressa em 3D"       },
    { src: null, icone: "⚙️", categoria: "Protótipo",    alt: "Protótipo funcional 3D"         },
    { src: null, icone: "🔑", categoria: "Chaveiro",     alt: "Chaveiro personalizado 3D"      },
  ],

  // Quais índices da galeria aparecem no carrossel de destaques
  galeriaDestaquesIndices: [0, 1, 2, 3, 4],

  /* ─── SOBRE ─────────────────────────────────────── */
  sobre: {
    tag:     "Quem somos",
    titulo:  "Referência em impressão 3D no Sertão PE",
    paragrafos: [
      "A <strong>NordForma3D</strong> é uma empresa especializada em <strong>impressão 3D personalizada em Salgueiro, Pernambuco</strong>. Atendemos clientes do Sertão de PE e de todo o Brasil.",
      "Nossa missão é transformar ideias em peças reais com qualidade e precisão. Seja para um projeto pessoal, produto comercial, presente especial ou solução industrial — trabalhamos com dedicação em cada encomenda.",
      "Com <strong>embalagem própria</strong> desenvolvida para o transporte de peças 3D, garantimos que seu produto chegue em perfeito estado, independente da distância.",
    ],
    diferenciais: [
      "Localizada em Salgueiro — coração do Sertão Pernambucano",
      "Atendimento regional e nacional via WhatsApp",
      "Embalagem exclusiva para envio seguro de peças 3D",
      "Produção 100% personalizada do zero",
      "Compromisso com qualidade e prazo de entrega",
      "Impressão 3D de alta precisão com acabamento profissional",
      "Envio para qualquer cidade do Brasil",
    ],
  },

  /* ─── ATUAÇÃO REGIONAL ──────────────────────────── */
  regiaoAtendimento: {
    tag:    "Atuação regional",
    titulo: "Impressão 3D em Salgueiro PE e Sertão Pernambucano",
    cidades: [
      "Salgueiro", "Serra Talhada", "Araripina", "Petrolina",
      "Ouricuri", "Cabrobó",
    ],
  },

  /* ─── FAQ ───────────────────────────────────────── */
  faq: [
    {
      pergunta: "Quanto custa uma impressão 3D?",
      resposta:  "O valor varia conforme tamanho, complexidade e material da peça. Para chaveiros simples, os valores são bem acessíveis. Para protótipos e peças maiores, o preço é calculado pelo volume de material e tempo de impressão. Envie sua ideia pelo WhatsApp para receber uma cotação sem compromisso.",
    },
    {
      pergunta: "Vocês fazem peças totalmente personalizadas?",
      resposta:  "Sim! Personalização é o nosso forte. Você pode enviar seu arquivo 3D (STL, OBJ, etc.) ou descrever o que precisa — nós cuidamos do resto. Trabalhamos com qualquer projeto: decorativos, funcionais, presentes, produtos comerciais e muito mais.",
    },
    {
      pergunta: "Fazem envio para outras cidades e estados?",
      resposta:  "Sim, enviamos para todo o Brasil. Usamos embalagem própria desenvolvida especificamente para proteger peças 3D durante o transporte, garantindo que seu produto chegue em perfeito estado.",
    },
    {
      pergunta: "Qual é o prazo de produção?",
      resposta:  "Depende da complexidade e quantidade. Peças simples ficam prontas em 1–3 dias úteis. Projetos maiores podem levar um pouco mais. Sempre informamos o prazo estimado no momento do orçamento.",
    },
    {
      pergunta: "Como solicitar um orçamento?",
      resposta:  "Simples! Clique em qualquer botão de WhatsApp no site, descreva o que precisa — ou envie uma imagem de referência. Respondemos rapidamente com opções e valores.",
    },
    {
      pergunta: "Aceitam arquivos de terceiros para impressão?",
      resposta:  "Sim! Se você já tem o arquivo 3D pronto (STL, OBJ, 3MF), é só enviar. Analisamos e retornamos com orçamento. Também podemos ajudar na modelagem se necessário.",
    },
  ],

  /* ─── SEO / META ────────────────────────────────── */
  seo: {
    urlBase:      "https://nordforma3d.com.br",
    palavrasChave: "impressão 3D, Salgueiro PE, sertão pernambucano, peças personalizadas, protótipos 3D",
    paginas: {
      index: {
        titulo:    "NordForma3D | Impressão 3D Personalizada em Salgueiro PE",
        descricao: "Impressão 3D personalizada em Salgueiro - PE. Peças decorativas, protótipos, miniaturas e chaveiros. Envio para todo o Brasil.",
      },
      servicos: {
        titulo:    "Serviços | NordForma3D – Impressão 3D Personalizada",
        descricao: "Conheça todos os serviços de impressão 3D da NordForma3D: peças decorativas, protótipos, miniaturas, chaveiros personalizados e muito mais.",
      },
      galeria: {
        titulo:    "Galeria | NordForma3D – Projetos de Impressão 3D",
        descricao: "Veja os projetos realizados pela NordForma3D: peças decorativas, protótipos, miniaturas e chaveiros personalizados.",
      },
      sobre: {
        titulo:    "Sobre | NordForma3D – Impressão 3D em Salgueiro PE",
        descricao: "Conheça a NordForma3D: empresa de impressão 3D personalizada em Salgueiro PE. FAQ, atuação regional e envio para todo o Brasil.",
      },
    },
  },

};
