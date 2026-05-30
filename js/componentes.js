/**
 * componentes.js — NordForma3D
 * =====================================================
 * Renderiza componentes reutilizáveis em todas as páginas:
 * header, footer, FAB WhatsApp e utilitários.
 * Leia dados de dados.js e injeta no DOM.
 * =====================================================
 */

/* ─── HELPERS ───────────────────────────────────── */

function waUrl() {
  const { whatsappNumero, whatsappMensagem } = DADOS.contato;
  return `https://wa.me/${whatsappNumero}?text=${whatsappMensagem}`;
}

const SVG_WA = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

const SVG_CHEVRON_L = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`;
const SVG_CHEVRON_R = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`;
const SVG_CHECK = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>`;

/* ─── HEADER ─────────────────────────────────────── */
// Passa a página atual para marcar o link ativo
function renderHeader(paginaAtual) {
  const { nome, logo, logoAlt } = DADOS.empresa;
  const nav = DADOS.navegacao;

  const navLinks = nav.map(item => {
    const ativo = item.href === paginaAtual ? 'class="active"' : '';
    return `<a href="${item.href}" ${ativo}>${item.label}</a>`;
  }).join('\n      ');

  const mobileLinks = nav.map(item =>
    `<a href="${item.href}">${item.label}</a>`
  ).join('\n    ');

  const logoImg = logo
    ? `<img src="${logo}" alt="${logoAlt}" class="logo-img" />`
    : `<span class="logo-txt">${nome}</span>`;

  const html = `
<header class="hdr" role="banner">
  <div class="hdr-inner">
    <a href="index.html" class="logo-link">${logoImg}</a>
    <nav class="nav" aria-label="Menu principal">
      ${navLinks}
    </nav>
    <a href="${waUrl()}" target="_blank" rel="noopener noreferrer" class="hdr-cta">
      ${SVG_WA} Orçamento
    </a>
    <button class="hamburger" id="hmbg" aria-label="Abrir menu" aria-expanded="false" aria-controls="mnav">
      <span></span><span></span><span></span>
    </button>
  </div>
  <nav class="mobile-nav" id="mnav" aria-label="Menu mobile">
    ${mobileLinks}
    <a href="${waUrl()}" target="_blank" rel="noopener noreferrer" class="mob-cta">
      ${SVG_WA} Solicitar Orçamento
    </a>
  </nav>
</header>`;

  document.body.insertAdjacentHTML('afterbegin', html);

  // Hamburger toggle
  const hmbg = document.getElementById('hmbg');
  const mnav = document.getElementById('mnav');
  if (hmbg && mnav) {
    hmbg.addEventListener('click', () => {
      const open = mnav.classList.toggle('open');
      hmbg.classList.toggle('open', open);
      hmbg.setAttribute('aria-expanded', open);
      hmbg.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });
  }
}

/* ─── FOOTER ─────────────────────────────────────── */
function renderFooter() {
  const { nome, logo, logoAlt, descricao, cidade, estado, ano } = DADOS.empresa;
  const { whatsappNumero, instagram, instagramHandle } = DADOS.contato;
  const nav = DADOS.navegacao;

  const navLinks = nav.map(item =>
    `<a href="${item.href}">${item.label}</a>`
  ).join('\n      ');

  const logoImg = logo
    ? `<img src="${logo}" alt="${logoAlt}" class="logo-img" />`
    : `<span class="logo-txt">${nome}</span>`;

  const html = `
<footer class="ftr" role="contentinfo">
  <div class="ftr-inner">
    <div class="ftr-brand">
      ${logoImg}
      <p>${descricao}</p>
    </div>
    <div class="ftr-col">
      <h4>Navegação</h4>
      ${navLinks}
    </div>
    <div class="ftr-col">
      <h4>Contato</h4>
      <a href="${waUrl()}" target="_blank" rel="noopener noreferrer">WhatsApp</a>
      <a href="${instagram}" target="_blank" rel="noopener noreferrer">${instagramHandle}</a>
      <p>📍 ${cidade} — ${estado}</p>
    </div>
  </div>
  <div class="ftr-bottom">
    <span>© ${ano} ${nome}. Todos os direitos reservados.</span>
    <span>${cidade} · ${estado} · ${DADOS.empresa.pais}</span>
  </div>
</footer>`;

  document.body.insertAdjacentHTML('beforeend', html);
}

/* ─── FAB WhatsApp ───────────────────────────────── */
function renderFAB() {
  const html = `
<a href="${waUrl()}" target="_blank" rel="noopener noreferrer" class="fab-wa" aria-label="Falar no WhatsApp">
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
</a>`;

  document.body.insertAdjacentHTML('beforeend', html);
}

/* ─── CARROSSEL ─────────────────────────────────── */
// slides: array de { src, alt } ou { icone, alt }
// containerId: id do wrapper onde o carrossel será colocado
function renderCarrossel(containerId, slides, autoplay = true, intervalo = 5000) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const slidesHTML = slides.map(s => {
    const conteudo = s.src
      ? `<img src="${s.src}" alt="${s.alt}" loading="lazy" />`
      : `<span class="car-icone" aria-label="${s.alt}">${s.icone}</span>`;
    return `<div class="slide"><div class="carousel-slide-img">${conteudo}</div></div>`;
  }).join('\n');

  const dotsHTML = slides.map(() =>
    `<button aria-label="Ir para slide" type="button"></button>`
  ).join('');

  container.classList.add('carousel-wrap');
  container.innerHTML = `
    <div class="carousel-track">${slidesHTML}</div>
    <button class="carr-btn carr-prev" aria-label="Slide anterior" type="button">${SVG_CHEVRON_L}</button>
    <button class="carr-btn carr-next" aria-label="Próximo slide" type="button">${SVG_CHEVRON_R}</button>
    <div class="carousel-dots" role="tablist">${dotsHTML}</div>`;

  // Lógica do carrossel
  const track = container.querySelector('.carousel-track');
  const dots  = container.querySelectorAll('.carousel-dots button');
  let cur = 0;
  let timer;

  function go(n) {
    cur = (n + slides.length) % slides.length;
    track.style.transform = `translateX(-${cur * 100}%)`;
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === cur);
      d.setAttribute('aria-selected', i === cur);
    });
  }

  container.querySelector('.carr-prev').addEventListener('click', () => { reset(); go(cur - 1); });
  container.querySelector('.carr-next').addEventListener('click', () => { reset(); go(cur + 1); });
  dots.forEach((d, i) => d.addEventListener('click', () => { reset(); go(i); }));

  function reset() { clearInterval(timer); if (autoplay) timer = setInterval(() => go(cur + 1), intervalo); }

  go(0);
  if (autoplay) timer = setInterval(() => go(cur + 1), intervalo);
}

/* ─── META / SEO ─────────────────────────────────── */
function aplicarMeta(pagina) {
  const meta = DADOS.seo.paginas[pagina];
  const empresa = DADOS.empresa;
  if (!meta) return;

  document.title = meta.titulo;

  const setMeta = (name, content, prop = false) => {
    let el = document.querySelector(prop ? `meta[property="${name}"]` : `meta[name="${name}"]`);
    if (!el) { el = document.createElement('meta'); document.head.appendChild(el); el.setAttribute(prop ? 'property' : 'name', name); }
    el.setAttribute('content', content);
  };

  setMeta('description', meta.descricao);
  setMeta('og:title', meta.titulo, true);
  setMeta('og:description', meta.descricao, true);
  setMeta('og:type', 'website', true);

  // Schema.org LocalBusiness
  let schema = document.querySelector('script[type="application/ld+json"]');
  if (!schema) { schema = document.createElement('script'); schema.type = 'application/ld+json'; document.head.appendChild(schema); }
  schema.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: empresa.nome,
    description: empresa.slogan,
    url: DADOS.seo.urlBase,
    address: {
      "@type": "PostalAddress",
      addressLocality: empresa.cidade,
      addressRegion: empresa.estado,
      addressCountry: empresa.pais.slice(0, 2).toUpperCase(),
    },
    areaServed: empresa.pais,
    serviceType: "Impressão 3D Personalizada",
  });
}

/* ─── BOTÃO WHATSAPP REUTILIZÁVEL ───────────────── */
function btnWA(texto, extra = '') {
  return `<a href="${waUrl()}" target="_blank" rel="noopener noreferrer" class="btn btn-wa ${extra}">${SVG_WA} ${texto}</a>`;
}
