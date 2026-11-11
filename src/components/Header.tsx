const CRONOGRAMA_URL =
  "https://docs.google.com/document/d/1rvRuvfz10VywR6DqIofvpmC5S_-FxrstKPGlwAqpZd4/edit?usp=sharing";

interface HeaderProps {
  /** Destino do link do logo ("#" na home, "/" nas demais páginas). */
  logoHref: string;
}

export default function Header({ logoHref }: HeaderProps) {
  return (
    <header>
      <div className="logo">
        <a href={logoHref}>
          <img src="/assets/logo.png" alt="Logo Beira Linha" />
        </a>
      </div>

      <nav>
        <a href={CRONOGRAMA_URL} target="_blank" rel="noopener noreferrer">
          Cronograma
        </a>{" "}
        {/* O espaço acima preserva o espaçamento inline entre os links do HTML legado. */}
        <a href="#">Recursos</a>
      </nav>
    </header>
  );
}
