import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}) {
  const max =
    size === "narrow"
      ? "max-w-3xl"
      : size === "wide"
        ? "max-w-7xl"
        : "max-w-6xl";
  return (
    <div className={cn("mx-auto px-6", max, className)}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  tone = "paper",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "paper" | "cream" | "forest";
}) {
  const bg =
    tone === "cream"
      ? "bg-[var(--color-cream)]"
      : tone === "forest"
        ? "bg-[var(--color-forest-deep)] text-white"
        : "bg-[var(--color-paper)]";
  return (
    <section className={cn("py-16 md:py-24", bg, className)}>
      {children}
    </section>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="border-b border-[var(--color-rule)] bg-[var(--color-cream)]">
      <Container className="py-14 md:py-20" size="narrow">
        {eyebrow && <div className="eyebrow mb-4">{eyebrow}</div>}
        <h1 className="font-display">{title}</h1>
        {intro && (
          <p className="mt-5 text-lg text-[var(--color-ink-muted)] leading-relaxed">
            {intro}
          </p>
        )}
        <div className="mt-6 h-px w-16 bg-[var(--color-gold)]" />
      </Container>
    </div>
  );
}
