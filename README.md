# NordForma3D — Estrutura Modular

## Como editar o site

### ✏️ Alterar qualquer informação ou conteúdo
**Abra apenas: `js/dados.js`**

Este arquivo concentra **tudo** que pode mudar:
- Nome, telefone, Instagram da empresa
- Textos do hero, serviços, FAQ, sobre
- Fotos do carrossel e galeria
- Navegação do menu
- Textos do SEO/meta de cada página

```
js/dados.js          ← EDITE AQUI PARA CONTEÚDO
```

---

### 🎨 Alterar estilos visuais

| O que mudar | Arquivo |
|---|---|
| Cores, fontes, espaçamentos gerais | `css/global.css` |
| Layout e componentes da Home | `css/index.css` |
| Layout e componentes de Serviços | `css/servicos.css` |
| Layout e componentes da Galeria | `css/galeria.css` |
| Layout e componentes do Sobre/FAQ | `css/sobre.css` |

---

### 📸 Adicionar foto no carrossel da home

No `js/dados.js`, encontre `carrosselHero` e adicione uma linha:

```js
carrosselHero: [
  { src: "img/hero-carrossel-1.jpeg", alt: "Descrição da foto" },
  { src: "img/hero-carrossel-2.jpeg", alt: "Descrição da foto" },
  { src: "img/minha-nova-foto.jpeg",  alt: "Nova peça incrível" },  // ← adicione aqui
],
```

---

### 📸 Adicionar projeto na galeria

No `js/dados.js`, encontre `galeria` e adicione um objeto:

```js
galeria: [
  // ... existentes ...
  {
    src: "img/projeto-novo.jpeg",  // ou null para usar ícone
    icone: "🎨",                   // emoji (usado se src for null)
    categoria: "Decorativa",
    alt: "Peça decorativa personalizada",
  },
],
```

Para que o novo item apareça também no **carrossel de destaques**, adicione o índice em:
```js
galeriaDestaquesIndices: [0, 1, 2, 3, 4, 12],  // ← índice do novo item
```

---

### 📋 Adicionar pergunta no FAQ

No `js/dados.js`, encontre `faq` e adicione:

```js
{
  pergunta: "Sua nova pergunta aqui?",
  resposta:  "A resposta detalhada aqui.",
},
```

---

### 🔗 Atualizar WhatsApp

No `js/dados.js`, altere:
```js
contato: {
  whatsappNumero: "5587999999999",  // ← número com código do país
  whatsappMensagem: "Olá!%20Vim%20pelo%20site...",
}
```

---

## Estrutura de arquivos

```
nordforma3d/
├── index.html          ← Página inicial
├── servicos.html       ← Página de serviços
├── galeria.html        ← Galeria de projetos
├── sobre.html          ← Sobre & FAQ
├── css/
│   ├── global.css      ← Estilos compartilhados (header, footer, botões...)
│   ├── index.css       ← Estilos específicos da Home
│   ├── servicos.css    ← Estilos específicos de Serviços
│   ├── galeria.css     ← Estilos específicos da Galeria
│   └── sobre.css       ← Estilos específicos do Sobre
├── js/
│   ├── dados.js        ← ⭐ TODOS os dados editáveis
│   └── componentes.js  ← Lógica: header, footer, FAB, carrossel
└── img/
    ├── logo.png
    ├── hero-carrossel-1.jpeg
    └── ...
```

---

## Como funciona tecnicamente

- **`dados.js`** exporta o objeto global `DADOS` com todas as informações
- **`componentes.js`** lê `DADOS` e injeta header/footer/FAB no DOM; expõe funções como `renderCarrossel()`, `btnWA()`, `aplicarMeta()`
- Cada página HTML é um **shell limpo** que chama essas funções e popula seções com dados de `DADOS`
- Alterar menu/footer em **um lugar** (`dados.js`) reflete em **todas as páginas** automaticamente
