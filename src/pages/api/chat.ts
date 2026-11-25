import type { APIRoute } from "astro";

const OLLAMA_ENDPOINT = "http://127.0.0.1:11434/api/chat";
const OLLAMA_MODEL = import.meta.env.OLLAMA_MODEL || "lfm3:latest";
const OLLAMA_NUM_CTX = Number(import.meta.env.OLLAMA_NUM_CTX) || 8192;
const MAX_HISTORY_CHARS =
  Number(import.meta.env.OLLAMA_HISTORY_CHARS) || 24000;
const MAX_MESSAGES = 100;
const MAX_CONTENT_LENGTH = 4000;

type ChatRole = "user" | "assistant";

interface ChatMessage {
  role: ChatRole;
  content: string;
}

export const prerender = false;

const jsonResponse = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const isChatMessage = (value: unknown): value is ChatMessage => {
  if (typeof value !== "object" || value === null) return false;

  const { role, content } = value as Record<string, unknown>;

  return (
    (role === "user" || role === "assistant") &&
    typeof content === "string" &&
    content.trim() !== "" &&
    content.length <= MAX_CONTENT_LENGTH
  );
};

const trimHistory = (messages: ChatMessage[]): ChatMessage[] => {
  const history: ChatMessage[] = [];
  let totalChars = 0;

  for (let index = messages.length - 1; index >= 0; index -= 1) {
    const message = messages[index];
    const fits = totalChars + message.content.length <= MAX_HISTORY_CHARS;

    if (!fits && history.length > 0) break;

    history.unshift(message);
    totalChars += message.content.length;
  }

  return history;
};

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.OLLAMA_KEY;

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ error: "Corpo da requisição inválido." }, 400);
  }

  const rawMessages = (payload as { messages?: unknown } | null)?.messages;

  if (!Array.isArray(rawMessages) || rawMessages.length === 0) {
    return jsonResponse({ error: "Nenhuma mensagem foi enviada." }, 400);
  }

  const recentMessages = rawMessages.slice(-MAX_MESSAGES);

  if (!recentMessages.every(isChatMessage)) {
    return jsonResponse({ error: "Mensagens inválidas." }, 400);
  }

  const messages = trimHistory(recentMessages);

  let ollamaResponse: Response;

  try {
    ollamaResponse = await fetch(OLLAMA_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
      },
      body: JSON.stringify({
        model: OLLAMA_MODEL,
        messages,
        stream: false,
        options: {
          num_ctx: OLLAMA_NUM_CTX,
        },
      }),
    });
  } catch (error) {
    console.error("Falha ao conectar na API do Ollama", error);
    return jsonResponse(
      { error: "O assistente não conseguiu responder agora." },
      502,
    );
  }

  if (!ollamaResponse.ok) {
    console.error(
      "API do Ollama respondeu com erro",
      ollamaResponse.status,
      await ollamaResponse.text(),
    );

    if (ollamaResponse.status === 402) {
      return jsonResponse(
        { error: "Os créditos do serviço de IA estão esgotados." },
        502,
      );
    }

    if (ollamaResponse.status === 429) {
      return jsonResponse(
        { error: "Muitas requisições. Tente novamente em instantes." },
        429,
      );
    }

    return jsonResponse(
      { error: "O assistente não conseguiu responder agora." },
      502,
    );
  }

  let content: unknown;

  try {
    const data = (await ollamaResponse.json()) as {
      message?: { content?: unknown };
    };
    content = data?.message?.content;
  } catch {
    return jsonResponse({ error: "Resposta inválida do serviço de IA." }, 502);
  }

  if (typeof content !== "string" || content.trim() === "") {
    return jsonResponse({ error: "O assistente retornou uma resposta vazia." }, 502);
  }

  return jsonResponse({ content });
};
