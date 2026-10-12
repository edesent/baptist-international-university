"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Doc = { href: string; code: string; title: string };

// Opens any `a[data-viewer]` link inside this wrapper in a full-screen PDF
// viewer. Phones keep the plain link: mobile browsers can't render a PDF
// inside an iframe, so they open it in their own viewer instead.
export function PdfLightbox({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [docs, setDocs] = useState<Doc[]>([]);
  const [index, setIndex] = useState<number | null>(null);

  const collect = useCallback((): Doc[] => {
    const links = rootRef.current?.querySelectorAll<HTMLAnchorElement>(
      "a[data-viewer]",
    );
    return Array.from(links ?? []).map((a) => ({
      href: a.getAttribute("href") ?? "",
      code: a.dataset.code ?? "",
      title: a.dataset.title ?? "",
    }));
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    function onClick(e: MouseEvent) {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>(
        "a[data-viewer]",
      );
      if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      if (!window.matchMedia("(min-width: 768px)").matches) return;
      e.preventDefault();
      const list = collect();
      setDocs(list);
      setIndex(list.findIndex((d) => d.href === a.getAttribute("href")));
    }
    root.addEventListener("click", onClick);
    return () => root.removeEventListener("click", onClick);
  }, [collect]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index !== null && !dialog.open) {
      dialog.showModal();
      document.documentElement.style.overflow = "hidden";
    }
    if (index === null && dialog.open) dialog.close();
  }, [index]);

  const close = () => setIndex(null);
  const doc = index !== null ? docs[index] : null;
  const prev = index !== null && index > 0 ? index - 1 : null;
  const next = index !== null && index < docs.length - 1 ? index + 1 : null;

  useEffect(() => {
    if (index === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft" && prev !== null) setIndex(prev);
      if (e.key === "ArrowRight" && next !== null) setIndex(next);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, prev, next]);

  const btn =
    "inline-flex items-center gap-1.5 px-3.5 py-2 font-sans text-[0.75rem] tracking-[0.12em] uppercase transition-colors";

  return (
    <div ref={rootRef}>
      {children}
      <dialog
        ref={dialogRef}
        onClose={() => {
          document.documentElement.style.overflow = "";
          setIndex(null);
        }}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
        aria-label={doc ? `Clase ${doc.code}: ${doc.title}` : "Documento"}
        className="m-auto h-[calc(100dvh-2.5rem)] w-[calc(100vw-2.5rem)] max-w-[1200px] max-h-none p-0 bg-[var(--color-cream)] border border-[var(--color-rule)] shadow-2xl backdrop:bg-[rgba(10,24,16,0.72)] backdrop:backdrop-blur-[2px]"
      >
        {doc && (
          <div className="flex h-full flex-col">
            <div className="flex items-center gap-4 border-b border-[var(--color-rule)] px-5 py-3">
              <div className="min-w-0 flex-1 flex items-baseline gap-4">
                <span className="font-display text-[1.5rem] leading-none text-[var(--color-forest)] lining-nums shrink-0">
                  {doc.code}
                </span>
                <span className="truncate font-serif font-semibold text-[var(--color-forest-deep)]">
                  {doc.title}
                </span>
              </div>
              <div className="flex shrink-0 items-center gap-1">
                <button
                  type="button"
                  onClick={() => prev !== null && setIndex(prev)}
                  disabled={prev === null}
                  className={`${btn} text-[var(--color-ink-muted)] hover:text-[var(--color-forest-deep)] disabled:opacity-30 disabled:pointer-events-none`}
                  aria-label="Clase anterior"
                >
                  ← <span className="hidden lg:inline">Anterior</span>
                </button>
                <button
                  type="button"
                  onClick={() => next !== null && setIndex(next)}
                  disabled={next === null}
                  className={`${btn} text-[var(--color-ink-muted)] hover:text-[var(--color-forest-deep)] disabled:opacity-30 disabled:pointer-events-none`}
                  aria-label="Clase siguiente"
                >
                  <span className="hidden lg:inline">Siguiente</span> →
                </button>
                <a
                  href={doc.href}
                  download
                  className={`${btn} ml-2 bg-[var(--color-forest-deep)] text-white hover:bg-[var(--color-forest)]`}
                >
                  Descargar
                </a>
                <button
                  type="button"
                  onClick={close}
                  className={`${btn} ml-1 border border-[var(--color-rule)] text-[var(--color-ink)] hover:border-[var(--color-forest)]`}
                  aria-label="Cerrar"
                >
                  Cerrar ✕
                </button>
              </div>
            </div>
            <iframe
              key={doc.href}
              src={`${doc.href}#view=FitH`}
              title={`Clase ${doc.code}: ${doc.title}`}
              className="block w-full flex-1 bg-[#525659]"
            />
          </div>
        )}
      </dialog>
    </div>
  );
}
