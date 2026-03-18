import { publications } from "@/data/publications";
import SectionHeader from "./SectionHeader";

export default function Publications() {
  return (
    <section className="py-12 sm:py-16 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader id="publications" title="Selected Publications" />
        <p className="text-sm text-text-secondary -mt-4 mb-6">* denotes equal contribution. † denotes equal advising.</p>
        <div className="space-y-8">
          {publications.map((pub, i) => (
            <article
              key={i}
              className="bg-white rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                {/* GIF */}
                {pub.gif && (
                  <div className="md:w-72 lg:w-80 shrink-0 bg-surface-alt flex items-center justify-center p-4">
                    <img
                      src={pub.gif}
                      alt={`${pub.title} demo`}
                      className="pub-gif w-full rounded-lg"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Details */}
                <div className="flex-1 p-5 sm:p-6">
                  <h3 className="text-base font-semibold text-text leading-snug">
                    {pub.title}
                  </h3>
                  <p
                    className="mt-2 text-sm text-text-secondary leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: pub.authors }}
                  />
                  <p className="mt-1 text-sm font-medium text-primary">
                    {pub.venue}
                  </p>

                  {/* Links */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {pub.links.map((link, j) => (
                      <a
                        key={j}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-pill inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-surface-alt text-text-secondary hover:text-primary border border-border"
                      >
                        <LinkIcon type={link.label} />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LinkIcon({ type }: { type: string }) {
  const lower = type.toLowerCase();
  if (lower.includes("arxiv") || lower.includes("paper") || lower === "doi") {
    return (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    );
  }
  if (lower === "code") {
    return (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    );
  }
  if (lower === "project") {
    return (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    );
  }
  if (lower === "poster") {
    return (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    );
  }
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}
