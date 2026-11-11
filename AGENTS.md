## Visão geral do projeto

**Practical-Line-WEB** é o site dos roteiros de exercícios do curso de desenvolvimento WEB do **Projeto Beira Linha**. Ele tem:

- uma **home** (lobby) com cards que levam a cada aula;
- uma **página por aula** (Aulas 4 a 9 até agora) com a lista de exercícios. Cada exercício tem título, enunciado, um bloco de código opcional com botão **"Copiar"** e uma imagem de resultado esperado.

## Stack
**Astro 7 + React 19**, publicado na **Netlify** (`@astrojs/netlify`), com gerenciador de pacotes **pnpm**.

Idioma: todo o conteúdo e a interface são em **português (pt-BR)**.

### Estrutura de pastas

```text
public/assets/            # Imagens servidas como estão (logo + resultados esperados)
src/
├── data/aulas.tsx        # Fonte única de conteúdo (tipos + dados)
├── layouts/Layout.astro  # Esqueleto HTML comum
├── pages/
│   ├── index.astro       # Home
│   └── aulas/[aula].astro# Rota dinâmica das aulas (getStaticPaths)
├── components/           # Componentes React (.tsx)
└── styles/               # CSS global e por página
astro.config.mjs          # Integrações (react, netlify) + redirects
```

### Módulos e interfaces

#### Dados — `src/data/aulas.tsx`
Fonte única de verdade do conteúdo. A home e as rotas das aulas são derivadas dela.

```ts
export interface Exercise {
  title: string;               // h2 do exercício
  description: ReactNode;      // enunciado (p). Use JSX só quando houver HTML inline (links, <br />)
  code?: string;               // código exibido no CodeBlock (template string; quebras/indentação são preservadas)
  image: { src: string; alt: string }; // src absoluto a partir de /assets/...
  showResultLabel?: boolean;   // rótulo "Resultado Esperado:" (padrão true)
}

export interface Aula {
  number: number;              // define a rota /aulas/{number} e a ordem na home
  cardTitle: string;           // título do card na home ("Aula N: ...")
  heading: string;             // h1 da página da aula
  exercises: Exercise[];
}

export const aulas: Aula[];
```

### Convenções e invariantes

- **Nova aula:** adicione um objeto em `aulas` e as imagens em `public/assets/`. Não crie páginas avulsas por aula.
- **Interatividade:** só hidrate o que for interativo, preferindo `client:load` em controles que o usuário usa logo ao abrir a página. O padrão é zero JavaScript.
- **Componentes:** a UI vai em React (`.tsx`, `export default function`). Arquivos `.astro` ficam restritos a layout e páginas (roteamento, `getStaticPaths`, imports de CSS).

## Development

Initializate new servers with background flag:

```
pnpm astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
