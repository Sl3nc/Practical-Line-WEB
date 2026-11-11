import { useEffect, useRef, useState } from "react";

interface CodeBlockProps {
  code: string;
}

/** Bloco de código com botão "Copiar" (substitui o antigo script.js). */
export default function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(true);
        window.clearTimeout(timer.current);
        timer.current = window.setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Erro ao copiar:", err);
      });
  };

  return (
    <div className="code-block">
      <button
        className={copied ? "copy-btn copied" : "copy-btn"}
        onClick={copy}
      >
        {copied ? "Copiado!" : "Copiar"}
      </button>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}
