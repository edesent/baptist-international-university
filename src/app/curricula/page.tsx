import Link from "next/link";
import { Container, Section, PageHeader } from "@/components/section";
import {
  getDegreeFolders,
  getSupportFolders,
  getLanguageFolders,
  getOtherFolders,
  driveFolderUrl,
  getRootFolderId,
} from "@/lib/curricula";

export const metadata = {
  title: "Curricula",
  description:
    "All Baptist International University course materials, from Associates through Post-Doctorate, plus pre-class information and student forms.",
};

function FolderCard({
  href,
  kind,
  name,
  description,
}: {
  href: string;
  kind: string;
  name: string;
  description?: string;
}) {
  return (
    <Link
      href={href}
      className="group block bg-white border border-[var(--color-rule)] p-7 hover:border-[var(--color-forest)] hover:shadow-sm transition-all"
    >
      <div className="eyebrow text-[var(--color-forest-soft)]">{kind}</div>
      <h3 className="mt-2 !text-[var(--color-forest-deep)] group-hover:text-[var(--color-forest)] !text-[1.25rem] leading-snug">
        {name}
      </h3>
      <div className="mt-4 h-px w-10 bg-[var(--color-gold)] transition-all group-hover:w-16" />
      {description && (
        <p className="mt-4 text-sm text-[var(--color-ink-muted)] leading-relaxed">
          {description}
        </p>
      )}
      <div className="mt-5 inline-flex items-center gap-1 font-sans text-xs tracking-[0.14em] uppercase text-[var(--color-forest)] group-hover:text-[var(--color-forest-deep)]">
        Open <span aria-hidden>→</span>
      </div>
    </Link>
  );
}

const DEGREE_DESCRIPTIONS: Record<string, string> = {
  Associate:
    "Foundational coursework — the entry point for new students seeking a first accredited diploma.",
  "Pre-Graduate":
    "Bridge between Associate and Bachelor levels — preparatory work for advanced study.",
  Bachelor:
    "Full undergraduate-level theological training in scripture and ministry.",
  "Master of Divinity":
    "Comprehensive ministerial preparation — the standard for the parish-pastor.",
  Master:
    "Graduate-level mastery of doctrine, biblical languages, and applied ministry.",
  "Accelerated Master's":
    "For qualifying pastors with ten years’ experience — accelerated track to a master’s degree.",
  Doctorate:
    "Doctor of Philosophy in Scripture Ministries — the institution’s terminal degree.",
  "Post-Doctorate":
    "Continuing scholarly work for those who have completed the doctorate.",
};

export default function CurriculaPage() {
  const degrees = getDegreeFolders();
  const support = getSupportFolders();
  const languages = getLanguageFolders();
  const other = getOtherFolders();

  return (
    <>
      <PageHeader
        eyebrow="Curricula"
        title="The complete curriculum, freely available."
        intro="All syllabi are hosted on Google Drive and can be opened, downloaded, or copied without an account. Translations have been made into more than one hundred languages."
      />

      <Section tone="paper">
        <Container>
          {support.length > 0 && (
            <>
              <div className="flex items-baseline justify-between mb-7">
                <div>
                  <div className="eyebrow mb-2">Begin Here</div>
                  <h2 className="!text-[1.5rem]">Pre-class & Student Forms</h2>
                </div>
                <div className="hidden sm:block flex-1 mx-6 h-px bg-[var(--color-rule)]" />
              </div>
              <div className="grid gap-5 md:grid-cols-2 mb-16">
                {support.map((f) => (
                  <FolderCard
                    key={f.slug}
                    href={`/curricula/${f.slug}`}
                    kind={f.kind}
                    name={f.name}
                  />
                ))}
              </div>
            </>
          )}

          <div className="flex items-baseline justify-between mb-7">
            <div>
              <div className="eyebrow mb-2">Degree Levels</div>
              <h2 className="!text-[1.5rem]">From Associate to Post-Doctorate</h2>
            </div>
            <div className="hidden sm:block flex-1 mx-6 h-px bg-[var(--color-rule)]" />
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {degrees.map((f) => (
              <FolderCard
                key={f.slug}
                href={`/curricula/${f.slug}`}
                kind={f.kind}
                name={f.name}
                description={DEGREE_DESCRIPTIONS[f.kind]}
              />
            ))}
          </div>

          {(languages.length > 0 || other.length > 0) && (
            <div className="mt-16">
              <div className="flex items-baseline justify-between mb-7">
                <div>
                  <div className="eyebrow mb-2">Additional Resources</div>
                  <h2 className="!text-[1.5rem]">Other Materials</h2>
                </div>
                <div className="hidden sm:block flex-1 mx-6 h-px bg-[var(--color-rule)]" />
              </div>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {[...languages, ...other].map((f) => (
                  <FolderCard
                    key={f.slug}
                    href={`/curricula/${f.slug}`}
                    kind={f.kind}
                    name={f.name}
                  />
                ))}
              </div>
            </div>
          )}
        </Container>
      </Section>

      <Section tone="cream">
        <Container size="narrow" className="text-center">
          <div className="eyebrow mb-3">Direct Access</div>
          <h2>Prefer to browse the full Drive folder?</h2>
          <p className="mt-5 text-[var(--color-ink-muted)] leading-relaxed">
            All curricula folders above live in a single Google Drive folder
            you can open in a new tab.
          </p>
          <a
            href={driveFolderUrl(getRootFolderId())}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center px-6 py-3 border border-[var(--color-forest)] text-[var(--color-forest-deep)] hover:bg-[var(--color-forest)] hover:text-white transition-colors font-sans text-sm tracking-[0.12em] uppercase"
          >
            Open Master Drive Folder
          </a>
        </Container>
      </Section>
    </>
  );
}
