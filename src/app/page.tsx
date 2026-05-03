import Image from "next/image";
import Link from "next/link";
import { Container, Section } from "@/components/section";
import { getDegreeFolders } from "@/lib/curricula";

const DEGREES = [
  "Associate of Scripture Ministries",
  "Graduate of Theology Scripture Ministries",
  "Bachelor of Theology Scripture Ministries",
  "Master of Arts Scripture Ministries",
  "Master of Divinity",
  "Doctor of Philosophy Scripture Ministries",
];

export default function HomePage() {
  const degreeFolders = getDegreeFolders();

  return (
    <>
      <section className="relative bg-[var(--color-cream)] border-b border-[var(--color-rule)] overflow-hidden">
        <Image
          src="/biu-hero-bg.jpeg"
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[var(--color-cream)]/70"
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 30%, var(--color-forest) 1px, transparent 1.5px)",
            backgroundSize: "28px 28px",
          }}
        />
        <Container className="relative py-20 md:py-28 grid gap-12 md:grid-cols-[1.2fr_1fr] items-center">
          <div>
            <div className="eyebrow mb-5">
              Established 1977 <span className="rule" /> Authorized King James Version 1611
            </div>
            <h1 className="font-display">
              Free Baptist curricula for the church, the classroom, and the mission field.
            </h1>
            <p className="mt-6 text-lg text-[var(--color-ink-muted)] leading-relaxed max-w-xl">
              The complete Baptist International School of the Scriptures curricula — taught by Bible-believing Baptist churches for over fifty years, closely associated with Bearing Precious Seed ministries.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 font-sans text-sm tracking-[0.12em] uppercase">
              <Link
                href="/getting-started"
                className="inline-flex items-center px-6 py-3 bg-[var(--color-forest-deep)] text-white hover:bg-[var(--color-forest)] transition-colors"
              >
                Begin Here
              </Link>
              <Link
                href="/curricula"
                className="inline-flex items-center px-6 py-3 border border-[var(--color-forest)] text-[var(--color-forest-deep)] hover:bg-[var(--color-forest)] hover:text-white transition-colors"
              >
                Browse Curricula
              </Link>
            </div>
          </div>
          <div className="relative aspect-square max-w-md mx-auto md:ml-auto">
            <div className="absolute inset-4 border border-[var(--color-gold)]/40" />
            <Image
              src="/biu-logo.jpeg"
              alt="Baptist International University seal"
              fill
              className="object-contain p-8"
              priority
            />
          </div>
        </Container>
      </section>

      <Section tone="paper">
        <Container size="narrow" className="text-center">
          <div className="eyebrow mb-4">Our Mission</div>
          <h2>Fulfilling the Great Commission</h2>
          <div className="mt-6 h-px w-16 bg-[var(--color-gold)] mx-auto" />
          <blockquote className="mt-10 font-display text-2xl md:text-[1.6rem] leading-snug text-[var(--color-forest-deep)]">
            “All power is given unto me in heaven and in earth. Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world. Amen.”
          </blockquote>
          <div className="mt-4 eyebrow">Matthew 28:18–20</div>
          <p className="mt-10 text-[var(--color-ink-muted)] leading-relaxed">
            We labor with high vision, long vision, and world vision — to reproduce sowers, senders, and the seed itself: by obeying, going, sowing, teaching, preaching, training, and ordaining faithful men for the work of the ministry.
          </p>
        </Container>
      </Section>

      <Section tone="cream">
        <Container className="grid gap-12 md:grid-cols-[1fr_1.4fr] items-start">
          <div>
            <div className="eyebrow mb-4">Freely Given</div>
            <h2>No tuition. No charge. No exception.</h2>
            <div className="mt-5 h-px w-12 bg-[var(--color-gold)]" />
          </div>
          <div className="prose-classical text-[var(--color-ink)]">
            <p>
              All information, syllabi, diplomas, and instruction are offered at no cost. We follow Matthew 10:8: <em>“freely ye have received, freely give.”</em> Teachers do not charge tuition or seek financial compensation — it is a labor of love.
            </p>
            <p>
              Students are expected to obey Christ’s commandments, remain faithful to their churches through tithes and offerings, support missions, give alms, and serve others. As Galatians 6:6 commands, <em>“Let him that is taught in the word communicate unto him that teacheth in all good things.”</em> Such blessings can range from bringing coffee to class to providing food for a teacher’s family.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container className="grid gap-14 md:grid-cols-[1fr_1.1fr] items-center">
          <div className="relative aspect-[3/4] max-w-md mx-auto md:mx-0 w-full">
            <Image
              src="/biu-funnel.png"
              alt="Baptist International University degree progression diagram"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <div className="eyebrow mb-4">Degrees Offered</div>
            <h2>From Associate to Doctor of Philosophy.</h2>
            <div className="mt-5 h-px w-12 bg-[var(--color-gold)]" />
            <p className="mt-5 text-[var(--color-ink-muted)] leading-relaxed">
              The curriculum is graduated — designed to provide both milk and meat to students at every stage of maturity, with practicum and service requirements alongside coursework.
            </p>
            <ul className="mt-8 divide-y divide-[var(--color-rule)] border-y border-[var(--color-rule)]">
              {DEGREES.map((d) => (
                <li
                  key={d}
                  className="py-3.5 flex items-center gap-4 font-display text-[1.15rem] text-[var(--color-forest-deep)]"
                >
                  <span className="text-[var(--color-gold)]">✦</span>
                  {d}
                </li>
              ))}
            </ul>
            <Link
              href="/curricula"
              className="mt-8 inline-flex items-center gap-2 font-sans text-sm tracking-[0.14em] uppercase text-[var(--color-forest-deep)] hover:text-[var(--color-forest)] underline underline-offset-4 decoration-[var(--color-gold)]"
            >
              View all {degreeFolders.length} degree levels →
            </Link>
          </div>
        </Container>
      </Section>

      <Section tone="forest">
        <Container size="narrow" className="text-center">
          <div className="eyebrow text-[var(--color-gold)] mb-4">Why Choose Us</div>
          <h2 className="text-white">A proven system. A worldwide vision.</h2>
          <div className="mt-6 h-px w-16 bg-[var(--color-gold)] mx-auto" />
          <p className="mt-8 text-white/80 leading-relaxed">
            We specialize in teaching faithful men for the ministry — through a system that has been proven across countries and peoples. It fulfills the Great Commission and reproduces sowers, senders, and seed, operating in Christian love rather than for profit. Though designed for Baptist church teaching, the program is taught by independent Baptist churches worldwide.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3 font-sans text-sm tracking-[0.12em] uppercase">
            <Link
              href="/staff-and-accreditation"
              className="inline-flex items-center px-6 py-3 border border-white/40 text-white hover:bg-white hover:text-[var(--color-forest-deep)] transition-colors"
            >
              Staff & Accreditation
            </Link>
            <Link
              href="/enrollment"
              className="inline-flex items-center px-6 py-3 bg-[var(--color-gold)] text-[var(--color-forest-deep)] hover:bg-white transition-colors"
            >
              Enroll
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
