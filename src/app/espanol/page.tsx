import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/section";
import {
  LEVELS,
  RESOURCES,
  TRANSLATED_COUNT,
  type SpanishClass,
} from "@/data/espanol";

export const metadata: Metadata = {
  title: "Programa en español",
  description:
    "El currículo de la Universidad Bautista Internacional en español: clases 000 a 551 en PDF, gratis para las iglesias bautistas de habla hispana.",
  alternates: { canonical: "/espanol" },
  openGraph: {
    title: "Universidad Bautista Internacional · Programa en español",
    description:
      "El currículo completo de la Escuela de las Escrituras, traducido al español. Gratis, no se vende.",
    locale: "es_ES",
  },
};

function formatSize(kb: number) {
  if (kb < 1000) return `${kb} KB`;
  return `${(kb / 1024).toFixed(1).replace(".", ",")} MB`;
}

function ClassRow({ c }: { c: SpanishClass }) {
  const isPdf = c.file.endsWith(".pdf");
  return (
    <li className="grid grid-cols-[4.25rem_1fr] sm:grid-cols-[5.5rem_1fr_auto] gap-x-5 gap-y-3 py-6 border-b border-[var(--color-rule)] last:border-b-0">
      <div className="font-display text-[1.5rem] sm:text-[1.75rem] leading-none text-[var(--color-forest)] pt-0.5 lining-nums tabular-nums">
        {c.code}
      </div>
      <div className="min-w-0">
        <h3 className="!text-[1.125rem] !leading-snug !font-serif !font-semibold !tracking-normal">
          {c.title}
        </h3>
        <p className="mt-1.5 text-[0.95rem] leading-relaxed text-[var(--color-ink-muted)]">
          {c.description}
        </p>
        <div className="mt-2 font-sans text-[0.72rem] tracking-[0.08em] uppercase text-[var(--color-ink-muted)]/80">
          {isPdf ? `${c.pages} págs · ` : ""}
          {formatSize(c.kb)}
          {c.note && (
            <span className="ml-2 text-[var(--color-gold)]">· {c.note}</span>
          )}
        </div>
      </div>
      <div className="col-start-2 sm:col-start-3 flex sm:flex-col items-start sm:items-end gap-x-5 gap-y-2 font-sans text-[0.78rem] tracking-[0.12em] uppercase whitespace-nowrap">
        {isPdf && (
          <a
            href={c.file}
            target="_blank"
            rel="noopener"
            className="text-[var(--color-forest-deep)] border-b border-[var(--color-gold)] hover:text-[var(--color-forest)] hover:border-[var(--color-forest)]"
          >
            Leer
          </a>
        )}
        <a
          href={c.file}
          download
          className="text-[var(--color-ink-muted)] hover:text-[var(--color-forest-deep)]"
        >
          Descargar
        </a>
      </div>
    </li>
  );
}

export default function EspanolPage() {
  return (
    <div lang="es">
      <div className="border-b border-[var(--color-rule)] bg-[var(--color-cream)]">
        <Container className="py-14 md:py-20 grid gap-12 lg:grid-cols-[1.25fr_1fr] items-start">
          <div>
            <div className="eyebrow mb-4">
              Universidad Bautista Internacional
            </div>
            <h1 className="font-display">
              El currículo de la Escuela de las Escrituras, en español.
            </h1>
            <p className="mt-6 text-lg text-[var(--color-ink-muted)] leading-relaxed max-w-xl">
              Los mismos programas de estudio que enseñan las iglesias bautistas
              en inglés, traducidos para las iglesias de habla hispana.{" "}
              {TRANSLATED_COUNT} clases, desde el Manual hasta la Maestría
              Acelerada. Léalas en línea o descárguelas en PDF.
            </p>
            <blockquote className="mt-8 max-w-xl border-l-2 border-[var(--color-gold)] pl-5">
              <div className="font-sans text-[0.72rem] tracking-[0.18em] uppercase font-semibold text-[var(--color-forest-soft)]">
                No se vende
              </div>
              <p className="mt-2 text-[0.98rem] leading-relaxed text-[var(--color-ink)]">
                Todos los materiales ofrecidos por la Universidad Bautista
                Internacional son gratuitos.
              </p>
            </blockquote>
            <p className="mt-8 font-sans text-sm text-[var(--color-ink-muted)]">
              <span lang="en">
                Looking for English?{" "}
                <Link
                  href="/curricula"
                  className="text-[var(--color-forest)] underline underline-offset-4 decoration-[var(--color-gold)] hover:text-[var(--color-forest-deep)]"
                >
                  Browse the English curricula
                </Link>
              </span>
            </p>
          </div>

          <nav
            aria-label="Contenido"
            className="bg-white border border-[var(--color-rule)] p-7 md:p-8"
          >
            <div className="eyebrow mb-5">Contenido</div>
            <ol className="space-y-3.5">
              {LEVELS.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className="group flex items-baseline gap-3 text-[var(--color-ink)] hover:text-[var(--color-forest-deep)]"
                  >
                    <span className="font-display text-lg text-[var(--color-forest)] w-[4.75rem] shrink-0 lining-nums tabular-nums">
                      {l.range}
                    </span>
                    <span className="group-hover:underline underline-offset-4 decoration-[var(--color-gold)]">
                      {l.name}
                    </span>
                    <span
                      aria-hidden
                      className="flex-1 border-b border-dotted border-[var(--color-rule)] translate-y-[-0.3em]"
                    />
                    <span className="font-sans text-xs text-[var(--color-ink-muted)] lining-nums tabular-nums">
                      {l.classes.length}
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#recursos"
                  className="group flex items-baseline gap-3 text-[var(--color-ink)] hover:text-[var(--color-forest-deep)]"
                >
                  <span className="font-display text-lg text-[var(--color-forest)] w-[4.75rem] shrink-0">
                  </span>
                  <span className="group-hover:underline underline-offset-4 decoration-[var(--color-gold)]">
                    Recursos para la iglesia
                  </span>
                  <span
                    aria-hidden
                    className="flex-1 border-b border-dotted border-[var(--color-rule)] translate-y-[-0.3em]"
                  />
                  <span className="font-sans text-xs text-[var(--color-ink-muted)] lining-nums tabular-nums">
                    {RESOURCES.length}
                  </span>
                </a>
              </li>
            </ol>
          </nav>
        </Container>
      </div>

      {LEVELS.map((level, i) => (
        <section
          key={level.id}
          id={level.id}
          className={`scroll-mt-6 py-14 md:py-20 ${
            i % 2 === 1 ? "bg-[var(--color-cream)]/50" : "bg-[var(--color-paper)]"
          } border-b border-[var(--color-rule)]`}
        >
          <Container className="grid gap-8 lg:grid-cols-[17rem_1fr] lg:gap-14">
            <div className="lg:sticky lg:top-8 self-start">
              <div className="font-display text-[2.5rem] leading-none text-[var(--color-gold)] lining-nums tabular-nums">
                {level.range}
              </div>
              <h2 className="mt-3 !text-[1.75rem]">{level.name}</h2>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-[var(--color-ink-muted)]">
                {level.intro}
              </p>
            </div>
            <div>
              <ul className="border-t border-[var(--color-forest)]/30">
                {level.classes.map((c) => (
                  <ClassRow key={c.code} c={c} />
                ))}
              </ul>
              {level.pending && (
                <p className="mt-6 px-5 py-4 border border-dashed border-[var(--color-rule)] text-[0.95rem] text-[var(--color-ink-muted)] leading-relaxed">
                  {level.pending.text}{" "}
                  <Link
                    href={level.pending.href}
                    className="font-sans text-[0.78rem] tracking-[0.12em] uppercase text-[var(--color-forest)] hover:text-[var(--color-forest-deep)] whitespace-nowrap"
                  >
                    Ver en inglés →
                  </Link>
                </p>
              )}
            </div>
          </Container>
        </section>
      ))}

      <section
        id="recursos"
        className="scroll-mt-6 py-14 md:py-20 bg-[var(--color-paper)]"
      >
        <Container className="grid gap-8 lg:grid-cols-[17rem_1fr] lg:gap-14">
          <div className="lg:sticky lg:top-8 self-start">
            <h2 className="!text-[1.75rem]">Recursos para la iglesia</h2>
            <p className="mt-4 text-[0.98rem] leading-relaxed text-[var(--color-ink-muted)]">
              Un libro y materiales para enseñar a los niños.
            </p>
          </div>
          <ul className="border-t border-[var(--color-forest)]/30">
            {RESOURCES.map((c) => (
              <ClassRow key={c.file} c={c} />
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-[var(--color-cream)] border-t border-[var(--color-rule)]">
        <Container className="py-14 md:py-16 grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="max-w-2xl">
            <h2 className="!text-[1.6rem]">
              Maestría, Maestría en Divinidad y Doctorado
            </h2>
            <p className="mt-3 leading-relaxed text-[var(--color-ink-muted)]">
              Los niveles 501 al 701 todavía están solamente en inglés. Las
              traducciones se agregan aquí a medida que se terminan.
            </p>
          </div>
          <Link
            href="/curricula"
            className="inline-flex justify-center items-center px-6 py-3 border border-[var(--color-forest)] text-[var(--color-forest-deep)] font-sans text-sm tracking-[0.12em] uppercase hover:bg-[var(--color-forest)] hover:text-white transition-colors"
          >
            Currículo en inglés
          </Link>
        </Container>
      </section>
    </div>
  );
}
