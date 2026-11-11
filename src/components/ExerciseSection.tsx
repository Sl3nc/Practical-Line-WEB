import type { ReactNode } from "react";
import type { Exercise } from "../data/aulas";

interface ExerciseSectionProps extends Omit<Exercise, "code"> {
  /** Conteúdo extra entre o enunciado e o resultado (ex.: ilha CodeBlock). */
  children?: ReactNode;
}

export default function ExerciseSection({
  title,
  description,
  image,
  showResultLabel = true,
  children,
}: ExerciseSectionProps) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{description}</p>

      {children}

      {showResultLabel && <h3>Resultado Esperado:</h3>}
      <img src={image.src} alt={image.alt} />
    </section>
  );
}
