import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Section } from "@/components/section";
import {
  getAllFolders,
  getFolderBySlug,
  driveEmbedUrl,
  driveFolderUrl,
} from "@/lib/curricula";

export function generateStaticParams() {
  return getAllFolders().map((f) => ({ slug: f.slug }));
}

export async function generateMetadata(props: PageProps<"/curricula/[slug]">) {
  const { slug } = await props.params;
  const folder = getFolderBySlug(slug);
  if (!folder) return { title: "Curriculum" };
  return {
    title: folder.name,
    description: `${folder.kind} curriculum materials — Baptist International University.`,
  };
}

const KIND_DESCRIPTIONS: Record<string, string> = {
  Associate:
    "The Associate of Scripture Ministries level — entry-point coursework numbered 201–229. New students typically begin here after reading the Pre-Class materials.",
  "Pre-Graduate":
    "The 301–310 sequence — preparatory coursework that bridges the Associate and Bachelor levels.",
  Bachelor:
    "The 401–409 sequence — undergraduate-level theological and ministerial training.",
  "Master of Divinity":
    "The Master of Divinity is the institution’s comprehensive ministerial degree — the standard for the parish-pastor.",
  Master:
    "The 501–505 sequence — graduate-level coursework in scripture, doctrine, and applied ministry.",
  "Accelerated Master's":
    "An accelerated track to a master’s degree, available to qualifying pastors with ten years’ ministry experience.",
  Doctorate:
    "The 601–608 sequence — coursework toward the Doctor of Philosophy in Scripture Ministries.",
  "Post-Doctorate":
    "The 701-level — continuing scholarly work for those who have completed the doctorate.",
  "Spanish Curriculum":
    "Currículo en español — the same curriculum, translated and adapted for Spanish-speaking churches.",
  "Pre-Class Information":
    "The 000 B.I. Manual, the 101 Discipleship Guide, and the 200 S.O.S. Compendium — read these first.",
  "Student Forms":
    "Enrollment, class assessment, and other administrative forms used throughout the program.",
  Reference:
    "Reference materials and miscellaneous documents that don’t fit a specific degree level.",
};

export default async function CurriculumLevelPage(
  props: PageProps<"/curricula/[slug]">,
) {
  const { slug } = await props.params;
  const folder = getFolderBySlug(slug);
  if (!folder) notFound();

  const description = KIND_DESCRIPTIONS[folder.kind] ?? "";
  const allFolders = getAllFolders();
  const idx = allFolders.findIndex((f) => f.slug === slug);
  const prev = idx > 0 ? allFolders[idx - 1] : null;
  const next = idx < allFolders.length - 1 ? allFolders[idx + 1] : null;

  return (
    <>
      <div className="border-b border-[var(--color-rule)] bg-[var(--color-cream)]">
        <Container className="py-12 md:py-16">
          <div className="font-sans text-xs tracking-[0.18em] uppercase text-[var(--color-ink-muted)] mb-5">
            <Link href="/curricula" className="hover:text-[var(--color-forest-deep)]">
              Curricula
            </Link>
            <span className="mx-3 text-[var(--color-gold)]">/</span>
            <span>{folder.kind}</span>
          </div>
          <div className="grid gap-8 md:grid-cols-[1fr_auto] items-end">
            <div>
              <div className="eyebrow mb-3">{folder.kind}</div>
              <h1 className="font-display !text-[clamp(2rem,3.5vw,2.75rem)]">
                {folder.name}
              </h1>
              {description && (
                <p className="mt-5 text-[var(--color-ink-muted)] leading-relaxed max-w-2xl">
                  {description}
                </p>
              )}
            </div>
            <a
              href={driveFolderUrl(folder.driveId)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center px-5 py-3 border border-[var(--color-forest)] text-[var(--color-forest-deep)] hover:bg-[var(--color-forest)] hover:text-white transition-colors font-sans text-sm tracking-[0.12em] uppercase"
            >
              Open in Drive ↗
            </a>
          </div>
        </Container>
      </div>

      <Section tone="paper" className="!py-12 md:!py-16">
        <Container>
          <div className="bg-white border border-[var(--color-rule)] overflow-hidden">
            <div className="bg-[var(--color-cream)] border-b border-[var(--color-rule)] px-5 py-3 flex items-center justify-between text-xs tracking-[0.16em] uppercase font-sans text-[var(--color-ink-muted)]">
              <span>Live Drive Folder · {folder.name}</span>
              <a
                href={driveFolderUrl(folder.driveId)}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-forest-deep)]"
              >
                Full View ↗
              </a>
            </div>
            <iframe
              src={driveEmbedUrl(folder.driveId)}
              title={`${folder.name} — Google Drive folder`}
              className="block w-full h-[640px] md:h-[760px] bg-white"
              loading="lazy"
            />
          </div>
          <p className="mt-4 text-xs text-[var(--color-ink-muted)] font-sans">
            Files are loaded directly from Google Drive — click any item to open
            or download. Updates made in Drive appear here automatically.
          </p>
        </Container>
      </Section>

      <Section tone="cream" className="!py-12">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              {prev && (
                <Link
                  href={`/curricula/${prev.slug}`}
                  className="block bg-white border border-[var(--color-rule)] p-6 hover:border-[var(--color-forest)] transition-colors"
                >
                  <div className="eyebrow mb-1">← Previous</div>
                  <div className="font-display text-lg text-[var(--color-forest-deep)]">
                    {prev.name}
                  </div>
                </Link>
              )}
            </div>
            <div className="md:text-right">
              {next && (
                <Link
                  href={`/curricula/${next.slug}`}
                  className="block bg-white border border-[var(--color-rule)] p-6 hover:border-[var(--color-forest)] transition-colors"
                >
                  <div className="eyebrow mb-1">Next →</div>
                  <div className="font-display text-lg text-[var(--color-forest-deep)]">
                    {next.name}
                  </div>
                </Link>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
