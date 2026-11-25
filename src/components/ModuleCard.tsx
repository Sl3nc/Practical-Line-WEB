interface ModuleCardProps {
  title: string;
  href: string;
}

export default function ModuleCard({ title, href }: ModuleCardProps) {
  return (
    <section className="card">
      <h3>{title}</h3>
      <a className="btn-roteiro" href={href}>
        Ver roteiro →
      </a>
    </section>
  );
}
