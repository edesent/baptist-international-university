import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--color-forest-deep)] text-white/80 mt-20">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-3">
        <div className="flex items-start gap-4">
          <Image
            src="/biu-logo.jpeg"
            alt=""
            width={56}
            height={56}
            className="rounded-full bg-white"
          />
          <div>
            <div className="font-display text-xl text-white">
              Baptist International University
            </div>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Free Baptist International School of the Scriptures curricula —
              taught by Bible-believing Baptist churches for over 50 years.
            </p>
          </div>
        </div>

        <div>
          <div className="eyebrow text-white/70">Visit · Write · Call</div>
          <div className="mt-3 text-sm leading-7 not-italic font-serif">
            <div>365 Hartford Ave</div>
            <div>Bellingham, MA 02019</div>
            <div className="mt-2">
              <a
                href="tel:5089660873"
                className="text-white hover:text-[var(--color-gold)]"
              >
                508-966-0873
              </a>
            </div>
            <div>
              <a
                href="mailto:pastor@bellinghambbc.com"
                className="text-white hover:text-[var(--color-gold)]"
              >
                pastor@bellinghambbc.com
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="eyebrow text-white/70">Navigate</div>
          <ul className="mt-3 space-y-1.5 text-sm font-sans">
            <li><Link href="/getting-started" className="hover:text-[var(--color-gold)]">Getting Started</Link></li>
            <li><Link href="/curricula" className="hover:text-[var(--color-gold)]">Curricula</Link></li>
            <li><Link href="/enrollment" className="hover:text-[var(--color-gold)]">Enrollment</Link></li>
            <li><Link href="/staff-and-accreditation" className="hover:text-[var(--color-gold)]">Staff & Accreditation</Link></li>
            <li>
              <a
                href="https://universidadbautista.org/spanish-curricula.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-gold)]"
              >
                Currículo en Español
              </a>
            </li>
            <li>
              <a
                href="https://bellinghambbc.com/give/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-gold)]"
              >
                Donate
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto max-w-6xl px-6 py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs font-sans text-white/55">
          <span>
            © {new Date().getFullYear()} Baptist International University. All
            rights reserved.
          </span>
          <span>
            Accredited by ACI (Accrediting Commission International) ·
            Authorized King James Version 1611
          </span>
        </div>
      </div>
    </footer>
  );
}
