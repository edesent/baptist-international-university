import Link from "next/link";
import { Container, Section, PageHeader } from "@/components/section";
import { getAllFolders } from "@/lib/curricula";

export const metadata = {
  title: "Getting Started",
  description:
    "How to begin with Baptist International University curricula — for personal study, formal degrees, teaching others, or seminary training.",
};

const USES = [
  {
    n: "I.",
    title: "Personal Study",
    body: "Individuals can independently select syllabi and explore topics of interest through the provided scripture passages — no enrollment required.",
  },
  {
    n: "II.",
    title: "Formal Education",
    body: "Students may formally enroll online to earn legitimate, accredited degrees. Church leaders often have most practicum requirements already fulfilled through their service. Transcripts are maintained through Rhode Island Baptist Seminary using Class Assessment documents.",
  },
  {
    n: "III.",
    title: "Teaching Others",
    body: "The syllabi serve as ready-made teaching materials for Sunday School classes, special church series, and small group studies — taught by faithful men in their local churches.",
  },
  {
    n: "IV.",
    title: "Seminary Training",
    body: "Independent Baptist churches can establish their own seminaries using the curriculum. Qualifying pastors with ten years’ ministry experience may gain access to the accelerated master’s programs.",
  },
];

const READING = [
  { code: "000", title: "B.I. Manual / Handbook" },
  { code: "101", title: "Church Discipleship Guide" },
  { code: "200", title: "S.O.S. Compendium (Class 200)" },
];

export default function GettingStartedPage() {
  const folders = getAllFolders();
  const startSlugs = ["pre-class-information", "201-229-associates-level"];
  const startLinks = folders.filter((f) => startSlugs.includes(f.slug));

  return (
    <>
      <PageHeader
        eyebrow="Getting Started"
        title="Where to begin."
        intro="The entire curriculum is offered free of charge, translated into over a hundred languages, and accessible from any smartphone or computer with internet access."
      />

      <Section tone="paper">
        <Container size="narrow" className="prose-classical">
          <p>
            We give it freely because we received it freely. The Scriptures
            command in Proverbs, Matthew, Romans, and Acts that the gospel and
            its labors not be sold for hire. What is offered here is nothing
            compared to the work of Christ that God so freely offers us.
          </p>
          <p>
            Our model is the <em>do and teach</em> model spoken of in the book
            of Acts — practicum and obedience walk hand in hand with study.
            The curriculum is graduated to provide both milk and meat for
            students at every level of maturity, with no prerequisite degree
            required to begin.
          </p>
        </Container>
      </Section>

      <Section tone="cream">
        <Container>
          <div className="text-center mb-14">
            <div className="eyebrow mb-4">Four Primary Uses</div>
            <h2>One curriculum. Four ways to use it.</h2>
            <div className="mt-5 h-px w-12 bg-[var(--color-gold)] mx-auto" />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {USES.map((u) => (
              <div
                key={u.title}
                className="bg-white p-8 border border-[var(--color-rule)]"
              >
                <div className="font-display text-[var(--color-gold)] text-2xl">
                  {u.n}
                </div>
                <h3 className="mt-2">{u.title}</h3>
                <p className="mt-3 text-[var(--color-ink-muted)] leading-relaxed text-[0.97rem]">
                  {u.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container className="grid gap-14 md:grid-cols-[1fr_1fr] items-start">
          <div>
            <div className="eyebrow mb-4">Recommended Reading</div>
            <h2>Read these first, in order.</h2>
            <div className="mt-5 h-px w-12 bg-[var(--color-gold)]" />
            <p className="mt-5 text-[var(--color-ink-muted)] leading-relaxed">
              These three documents introduce the Baptist International School
              of the Scriptures, its convictions, and how the curriculum is
              organized. After reading them you will be well-prepared to
              proceed to enrollment.
            </p>
          </div>
          <ol className="border-y border-[var(--color-rule)] divide-y divide-[var(--color-rule)]">
            {READING.map((r) => (
              <li
                key={r.code}
                className="py-5 flex items-baseline gap-6"
              >
                <span className="font-display text-[var(--color-gold)] text-xl tabular-nums w-12">
                  {r.code}
                </span>
                <span className="font-display text-[1.2rem] text-[var(--color-forest-deep)]">
                  {r.title}
                </span>
              </li>
            ))}
          </ol>
        </Container>
        <Container className="mt-12">
          <div className="bg-[var(--color-cream)] border border-[var(--color-rule)] p-8 md:p-10 grid gap-8 md:grid-cols-[1fr_auto] items-center">
            <div>
              <div className="eyebrow mb-2">Next Step</div>
              <h3 className="!text-[var(--color-forest-deep)]">
                Browse the curricula or apply to enroll.
              </h3>
              <p className="mt-2 text-[var(--color-ink-muted)]">
                You can access every syllabus without registering. To pursue an
                accredited diploma, submit an application for review.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 font-sans text-sm tracking-[0.12em] uppercase">
              <Link
                href="/curricula"
                className="inline-flex items-center px-5 py-3 border border-[var(--color-forest)] text-[var(--color-forest-deep)] hover:bg-[var(--color-forest)] hover:text-white transition-colors"
              >
                Curricula
              </Link>
              <Link
                href="/enrollment"
                className="inline-flex items-center px-5 py-3 bg-[var(--color-forest-deep)] text-white hover:bg-[var(--color-forest)] transition-colors"
              >
                Enroll
              </Link>
            </div>
          </div>
          {startLinks.length > 0 && (
            <p className="mt-6 text-sm text-[var(--color-ink-muted)] font-sans">
              Direct links:{" "}
              {startLinks.map((f, i) => (
                <span key={f.slug}>
                  {i > 0 && " · "}
                  <Link
                    href={`/curricula/${f.slug}`}
                    className="underline decoration-[var(--color-gold)] underline-offset-4 hover:text-[var(--color-forest-deep)]"
                  >
                    {f.name}
                  </Link>
                </span>
              ))}
            </p>
          )}
        </Container>
      </Section>
    </>
  );
}
