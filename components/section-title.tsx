export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  centered = false
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-orange-300/90">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-black leading-tight sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-base text-zinc-300 sm:text-lg">{subtitle}</p> : null}
    </div>
  );
}
