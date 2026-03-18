import { experiences } from "@/data/experience";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader id="experience" title="Research Experience" />
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-border hidden sm:block" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div key={i} className="flex gap-4 sm:gap-6">
                {/* Timeline dot */}
                <div className="hidden sm:flex shrink-0 mt-1.5">
                  <div className="w-[15px] h-[15px] rounded-full border-[3px] border-primary bg-white" />
                </div>

                {/* Card */}
                <div className="flex-1 bg-white rounded-lg border border-border p-4 sm:p-5 hover:shadow-sm transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                    <div>
                      <h3 className="text-sm font-semibold text-text">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-primary font-medium">
                        {exp.organization}
                      </p>
                    </div>
                    <div className="text-xs text-text-secondary sm:text-right shrink-0">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  {exp.description && (
                    <p
                      className="mt-2 text-sm text-text-secondary leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: exp.description }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
