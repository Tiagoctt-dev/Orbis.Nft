# Site de Animação — Orbis.Nft

Landing page e loja de uma coleção de NFTs animados ("Orbis.Nft"), construída em React + Vite + Tailwind CSS. O site usa vídeos em loop como peças visuais principais (hero, cards de NFT, seção "sobre") e um layout com tema escuro e efeito "liquid glass".

## Páginas

| Rota       | Componente             | Descrição |
|------------|-------------------------|-----------|
| `/`        | `src/pages/Home.tsx`    | Hero em vídeo, seção "sobre" e destaques da coleção |
| `/gallery` | `src/pages/Gallery.tsx` | Galeria completa dos NFTs, com filtro por raridade (Comum, Raro, Épico, Lendário) |
| `/buy`     | `src/pages/BuyNFT.tsx`  | Fluxo de compra: seleção do NFT, preço em ETH/USD e benefícios de posse |
| `/faq`     | `src/pages/FAQ.tsx`     | Perguntas frequentes |
| `/contact` | `src/pages/Contact.tsx` | Formulário/informações de contato |

Todas as páginas compartilham o layout definido em `src/app/Root.tsx` (header fixo, navegação, ícones sociais e overlay de textura), com as rotas declaradas em `src/app/routes.ts`.

## Stack

- [React 19](https://react.dev/)
- [React Router 8](https://reactrouter.com/) — roteamento client-side (`createBrowserRouter`)
- [Vite 8](https://vite.dev/) — build e dev server
- [Tailwind CSS 4](https://tailwindcss.com/) — via plugin do Vite, sem PostCSS
- [lucide-react](https://lucide.dev/) — ícones
- TypeScript

## Requisitos

- Node.js
- [pnpm](https://pnpm.io/)

## Instalação

```bash
pnpm install
```

## Desenvolvimento

```bash
pnpm dev
```

Sobe o servidor Vite em `http://localhost:8443` (porta configurável via variável de ambiente `PORT`), acessível também na rede local. Hot reload ativo para qualquer alteração em `src/`.

## Build

```bash
pnpm build
```

Gera os arquivos de produção otimizados na pasta `dist/`.

## Preview do build

```bash
pnpm preview
```

Serve localmente o conteúdo gerado por `pnpm build`, para conferir o resultado final antes do deploy.

## Formatação

```bash
pnpm format
```

Formata o código com [oxfmt](https://github.com/oxc-project/oxc).

## Estrutura de pastas

```
src/
  app/
    Root.tsx      # layout raiz (header, navegação, overlay de textura)
    routes.ts     # definição das rotas da aplicação
  components/
    shared.tsx    # componentes compartilhados (nav, ícones sociais, textos)
  pages/
    Home.tsx
    Gallery.tsx
    BuyNFT.tsx
    FAQ.tsx
    Contact.tsx
  imports/         # textos/assets importados
  index.css        # estilos globais e import do Tailwind
  main.tsx         # entrypoint da aplicação
index.html
vite.config.ts
tsconfig.json
```

## Observações

- Os vídeos usados nos cards e no hero são carregados de uma URL externa (CDN) referenciada diretamente no código — não fazem parte do repositório.
- O tema visual é fixo em modo escuro (`#010828` como cor de fundo base) com fontes `Anton` e `Condiment`.
