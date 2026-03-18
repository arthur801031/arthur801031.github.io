import { mentees, reviewerRoles, teaching } from "@/data/services";
import SectionHeader from "./SectionHeader";

export default function Service() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader id="service" title="Service & Mentoring" />

        <div className="grid gap-6 sm:grid-cols-3">
          {/* Mentoring */}
          <div className="bg-white rounded-lg border border-border p-5">
            <h3 className="text-sm font-semibold text-text flex items-center gap-2">
              <svg
                className="w-4 h-4 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Mentoring
            </h3>
            <ul className="mt-3 space-y-2">
              {mentees.map((m, i) => (
                <li key={i} className="text-sm text-text-secondary">
                  <span className="font-medium text-text">{m.name}</span>
                  {m.note && (
                    <span className="text-xs text-text-secondary/70">
                      {" "}
                      &middot; {m.note}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Reviewing */}
          <div className="bg-white rounded-lg border border-border p-5">
            <h3 className="text-sm font-semibold text-text flex items-center gap-2">
              <svg
                className="w-4 h-4 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
              Reviewer
            </h3>
            <ul className="mt-3 space-y-2">
              {reviewerRoles.map((role, i) => (
                <li key={i} className="text-sm text-text-secondary">
                  {role}
                </li>
              ))}
            </ul>
          </div>

          {/* Teaching */}
          <div className="bg-white rounded-lg border border-border p-5">
            <h3 className="text-sm font-semibold text-text flex items-center gap-2">
              <svg
                className="w-4 h-4 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Teaching Assistant
            </h3>
            <ul className="mt-3 space-y-2">
              {teaching.map((t, i) => (
                <li key={i} className="text-sm text-text-secondary">
                  <span className="font-medium text-text">{t.course}</span>
                  <br />
                  <span className="text-xs text-text-secondary/70">
                    {t.semester}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
