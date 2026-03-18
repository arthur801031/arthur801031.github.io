import { awards } from "@/data/awards";
import SectionHeader from "./SectionHeader";

export default function Awards() {
  return (
    <section className="py-12 sm:py-16 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader id="awards" title="Awards" />
        <div className="grid gap-4 sm:grid-cols-2">
          {awards.map((award, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border border-border p-5 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-start gap-3">
                <div className="shrink-0 mt-0.5">
                  <svg
                    className="w-5 h-5 text-amber-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text">
                    {award.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {award.organization}
                  </p>
                  <p className="mt-1 text-xs text-text-secondary/70">
                    {award.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
