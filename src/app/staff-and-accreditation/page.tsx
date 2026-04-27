import { Container, Section, PageHeader } from "@/components/section";

export const metadata = {
  title: "Staff & Accreditation",
  description:
    "Baptist International University leadership and accreditation through ACI (Accrediting Commission International), with curricular roots in Baptist Christian University International and Rhode Island Baptist Seminary.",
};

const STAFF = [
  {
    name: "N. Sebastian Desent",
    credentials: "Ph.D., Th.D., D.D.",
    role: "President",
    body: "Dr. Desent has led Historic Baptist Church in North Kingstown, Rhode Island since its founding in 1991, where he established the Rhode Island Baptist Seminary that same year. In 2023 he expanded the university to Peru, where he serves as pastor of First Baptist Church of Pachacamac in Lima.",
  },
  {
    name: "Michael E. Carrier",
    credentials: "Ph.D.",
    role: "Vice President · Dean of the English Division",
    body: "Dr. Carrier serves as president of Baptist International University of Bellingham and pastors Bellingham Bible Baptist Church in Massachusetts. He earned his doctorate from the university on January 26, 2025.",
  },
];

export default function StaffPage() {
  return (
    <>
      <PageHeader
        eyebrow="Staff & Accreditation"
        title="Faithful men, established in 1977."
        intro="Baptist International University was established in 1977 to train clergy for the work of the ministry — a calling its faculty have continued for nearly five decades."
      />

      <Section tone="paper">
        <Container className="grid gap-12 md:grid-cols-2">
          {STAFF.map((s) => (
            <article
              key={s.name}
              className="bg-[var(--color-cream)] border border-[var(--color-rule)] p-8 md:p-10"
            >
              <div className="eyebrow mb-3">{s.role}</div>
              <h2 className="!text-[var(--color-forest-deep)] !text-[1.7rem]">
                {s.name}
              </h2>
              <div className="mt-1 font-serif italic text-[var(--color-ink-muted)]">
                {s.credentials}
              </div>
              <div className="mt-5 h-px w-12 bg-[var(--color-gold)]" />
              <p className="mt-6 text-[var(--color-ink)] leading-relaxed">
                {s.body}
              </p>
            </article>
          ))}
        </Container>
      </Section>

      <Section tone="cream">
        <Container size="prose">
          <div>
            <div className="eyebrow mb-4">Accreditation</div>
            <h2>Accredited by ACI. Independent of the state.</h2>
            <div className="mt-5 h-px w-12 bg-[var(--color-gold)]" />
          </div>
          <div className="prose-classical mt-10">
            <p>
              Baptist International University deliberately avoids governmental
              accreditation, holding to a strong belief in the separation of
              powers and preferring independence from state oversight in
              matters of conscience and doctrine.
            </p>
            <p>
              The university is accredited through{" "}
              <strong>ACI (Accrediting Commission International)</strong>, the
              largest non-governmental accrediting commission, which validates
              both curricular and administrative standards.
            </p>
            <p>
              Our core curriculum derives from the Baptist International School
              of the Scriptures, developed over two decades under{" "}
              <strong>Baptist Christian University International</strong> in
              Texas under the direction of Donald M. Fraser, and commissioned
              by J. G. Tharpe. The programs were transferred to{" "}
              <strong>Rhode Island Baptist Seminary</strong> in 1991. Today the
              institution offers degrees from associate to doctoral level and
              maintains conventional standards for class credits, credit hours,
              and practicum work.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container className="grid gap-10 md:grid-cols-3 text-center">
          {[
            { year: "1977", label: "Established" },
            { year: "1991", label: "Curricula transferred to RIBS" },
            { year: "2023", label: "Expanded to Peru" },
          ].map((m) => (
            <div key={m.year} className="border-t border-[var(--color-gold)] pt-6">
              <div className="font-display text-[var(--color-forest-deep)] text-4xl">
                {m.year}
              </div>
              <div className="mt-2 eyebrow">{m.label}</div>
            </div>
          ))}
        </Container>
      </Section>
    </>
  );
}
