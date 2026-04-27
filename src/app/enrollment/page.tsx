import Link from "next/link";
import { Container, Section, PageHeader } from "@/components/section";

export const metadata = {
  title: "Enrollment",
  description:
    "Enroll in Baptist International University to pursue an accredited diploma. Application review is required for all enrolling students and teachers.",
};

const FORM_SRC =
  "https://docs.google.com/forms/d/e/1FAIpQLSdwM5AGlwdHO29_RxSYyQyyX9J5sBEgKId1K0Db2N5PsiKNdA/viewform?embedded=true";

export default function EnrollmentPage() {
  return (
    <>
      <PageHeader
        eyebrow="Enrollment"
        title="Apply to enroll."
        intro="Students and teachers seeking accredited diplomas must enroll and receive approval from the seminary. Approved students and teachers are tracked for class and objective completion."
      />

      <Section tone="paper">
        <Container size="narrow" className="prose-classical">
          <p>
            Anyone is welcome to access the curricula without registering — the
            syllabi, manuals, and reading are freely available and require no
            account. Enrollment is required only for those who wish to be
            credited with an accredited diploma from the institution.
          </p>
          <p>
            Doctrinal alignment is required for graduation. We do not confer
            diplomas to those who disagree with the beliefs of the institution
            (see Class 200 S.O.S. Compendium, pp. 17–18). The seminary reviews
            every application and notifies applicants of approval status — or
            the reasons for rejection — so that the process is plain and
            charitable.
          </p>
        </Container>
      </Section>

      <Section tone="cream" className="!py-12 md:!py-14">
        <Container size="narrow">
          <div className="grid gap-5 sm:grid-cols-[auto_1fr] items-start bg-white border border-[var(--color-rule)] p-7">
            <span className="font-display text-[var(--color-gold)] text-3xl leading-none">
              ✦
            </span>
            <div>
              <div className="eyebrow mb-2">Before You Apply</div>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Begin with the <em>000 B.I. Manual</em>, the{" "}
                <em>101 Church Discipleship Guide</em>, and{" "}
                <em>Class 200 S.O.S. Compendium</em> — available in the{" "}
                <Link
                  href="/curricula/pre-class-information"
                  className="underline decoration-[var(--color-gold)] underline-offset-4 hover:text-[var(--color-forest-deep)]"
                >
                  Pre-Class Information
                </Link>{" "}
                folder.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="paper" className="!pt-4 md:!pt-6">
        <Container>
          <div className="text-center mb-10">
            <div className="eyebrow mb-3">Enrollment Form</div>
            <h2>Submit your application below.</h2>
            <div className="mt-5 h-px w-12 bg-[var(--color-gold)] mx-auto" />
            <p className="mt-5 text-[var(--color-ink-muted)] max-w-2xl mx-auto leading-relaxed">
              Complete the form below to apply. Submissions are reviewed by the
              seminary and you will be notified directly of the decision.
            </p>
          </div>
          <div className="bg-white border border-[var(--color-rule)] overflow-hidden">
            <div className="bg-[var(--color-cream)] border-b border-[var(--color-rule)] px-5 py-3 flex items-center justify-between text-xs tracking-[0.16em] uppercase font-sans text-[var(--color-ink-muted)]">
              <span>Baptist International University · Enrollment</span>
              <a
                href={FORM_SRC.replace("?embedded=true", "")}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-forest-deep)]"
              >
                Open in New Tab ↗
              </a>
            </div>
            <iframe
              src={FORM_SRC}
              title="Baptist International University Enrollment Form"
              className="block w-full h-[5000px] bg-white"
              loading="lazy"
            >
              Loading enrollment form…
            </iframe>
          </div>
        </Container>
      </Section>

      <Section tone="cream">
        <Container size="narrow" className="text-center">
          <div className="eyebrow mb-3">Questions</div>
          <h2>We answer every applicant.</h2>
          <div className="mt-5 h-px w-12 bg-[var(--color-gold)] mx-auto" />
          <p className="mt-6 text-[var(--color-ink-muted)] leading-relaxed">
            Call or write the seminary if you would like to speak with someone
            before applying.
          </p>
          <div className="mt-6 font-display text-xl text-[var(--color-forest-deep)]">
            <a
              href="tel:5089660873"
              className="hover:text-[var(--color-forest)]"
            >
              508-966-0873
            </a>
            <span className="mx-3 text-[var(--color-gold)]">·</span>
            <a
              href="mailto:pastor@bellinghambbc.com"
              className="hover:text-[var(--color-forest)]"
            >
              pastor@bellinghambbc.com
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
