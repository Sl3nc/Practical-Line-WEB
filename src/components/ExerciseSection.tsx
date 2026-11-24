import type { GetImageResult } from "astro";
import type { ReactNode } from "react";
import type { Exercise } from "../data/aulas";

interface ExerciseSectionProps extends Omit<Exercise, "code" | "image"> {
  image: GetImageResult;
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
      <img {...image.attributes} src={image.src} srcSet={image.srcSet.attribute} />
    </section>
  );
}
