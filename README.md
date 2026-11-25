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

## Painel de IA

O chat do assistente envia a conversa para `/api/chat` (endpoint do servidor em `src/pages/api/chat.ts`), que consulta o Ollama em `http://127.0.0.1:11434` (servidor local, sem TLS). A chave nunca chega ao navegador.

| Variável                | Obrigatória | Descrição                                                          |
| :---------------------- | :---------- | :----------------------------------------------------------------- |
| `OLLAMA_KEY`            | não         | Chave da API do Ollama hospedada; o Ollama local a ignora.         |
| `OLLAMA_MODEL`          | não         | Modelo usado na conversa (padrão `lfm3:latest`).                    |
| `OLLAMA_NUM_CTX`        | não         | Janela de contexto em tokens enviada ao Ollama (padrão `8192`).     |
| `OLLAMA_HISTORY_CHARS`  | não         | Orçamento de caracteres do histórico enviado (padrão `24000`).      |

O modelo precisa estar baixado no Ollama local (`ollama pull lfm3`). Localmente, defina as variáveis em um arquivo `.env` na raiz.

O Ollama usa `num_ctx = 4096` por padrão, independentemente do contexto máximo anunciado pelo modelo, e trunca o excedente sem avisar. `OLLAMA_HISTORY_CHARS` precisa caber dentro de `OLLAMA_NUM_CTX` com folga para a resposta; aumentar o contexto também aumenta o tempo de resposta e o uso de memória.

Atenção: como o endpoint aponta para `127.0.0.1`, o painel só funciona com o site rodando na mesma máquina do Ollama. Na Netlify (ou outro host), ajuste a constante `OLLAMA_ENDPOINT` em `src/pages/api/chat.ts` para uma URL acessível publicamente.

## Comandos

| Comando        | Ação                                          |
| :------------- | :-------------------------------------------- |
| `pnpm install` | Instala as dependências                       |
| `pnpm dev`     | Servidor de desenvolvimento em `localhost:4321` |
| `pnpm build`   | Gera o site de produção em `./dist/`          |
| `pnpm preview` | Pré-visualiza o build localmente              |
