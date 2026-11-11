# Practical-Line-WEB

Site com os roteiros de exercícios do curso de desenvolvimento WEB do **Projeto Beira Linha**.

Construído com [Astro](https://docs.astro.build) + [React](https://react.dev) e publicado na Netlify.

## Estrutura

```text
/
├── public/
│   └── assets/              # Logo e imagens de "resultado esperado"
├── src/
│   ├── components/          # Componentes React
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ModuleCard.tsx   # Card de aula na home
│   │   ├── ExerciseSection.tsx
│   │   └── CodeBlock.tsx    # Bloco de código com botão "Copiar" (único componente interativo)
│   ├── data/
│   │   └── aulas.tsx        # Conteúdo de todas as aulas e exercícios
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro      # Home (/)
│   │   └── aulas/
│   │       └── [aula].astro # Roteiro de cada aula (/aulas/4, /aulas/5, ...)
│   └── styles/              # global.css, home.css, activity.css
└── astro.config.mjs         # Integrações + redirects das URLs antigas (*.html)
```

## Como adicionar uma aula

Adicione um novo objeto ao array `aulas` em [`src/data/aulas.tsx`](src/data/aulas.tsx) e coloque as imagens em `public/assets/`. A página `/aulas/{number}` e o card na home são gerados automaticamente.

```tsx
{
  number: 10,
  cardTitle: "Aula 10: Título do card",
  heading: "Exercícios de ... (Aula 10)",
  exercises: [
    {
      title: "Exercício 1 - ...",
      description: "Enunciado do exercício.",
      code: `<p>Código opcional, exibido com botão Copiar</p>`,
      image: { src: "/assets/atv1-10.png", alt: "Resultado esperado do exercício 1" },
    },
  ],
},
```

## Comandos

| Comando        | Ação                                          |
| :------------- | :-------------------------------------------- |
| `pnpm install` | Instala as dependências                       |
| `pnpm dev`     | Servidor de desenvolvimento em `localhost:4321` |
| `pnpm build`   | Gera o site de produção em `./dist/`          |
| `pnpm preview` | Pré-visualiza o build localmente              |
