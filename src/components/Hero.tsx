import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="about" className="pt-24 pb-12 sm:pt-28 sm:pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
          {/* Avatar */}
          <div className="shrink-0">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover shadow-lg ring-4 ring-white"
            />
          </div>

          {/* Info */}
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text">
              {profile.name}
            </h1>
            <p className="mt-2 text-lg text-text-secondary">
              {profile.title} &middot;{" "}
              <span className="text-primary font-medium">
                {profile.affiliation}
              </span>
            </p>

            {/* Social links */}
            <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-3">
              <SocialLink
                href={`mailto:${profile.links.email}`}
                label="Email"
                icon={
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                }
              />
              <SocialLink
                href={profile.links.scholar}
                label="Scholar"
                icon={
                  <path d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                }
              />
              <SocialLink
                href={profile.links.github}
                label="GitHub"
                icon={
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                }
              />
              <SocialLink
                href={profile.links.linkedin}
                label="LinkedIn"
                icon={
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                }
              />
              <a
                href={profile.links.cv}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CV"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium text-white bg-primary hover:bg-primary-dark border border-primary transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                CV
              </a>
            </div>

            {/* Bio */}
            <p
              className="mt-6 text-base leading-relaxed text-text-secondary max-w-2xl mx-auto sm:mx-0 px-4 sm:px-0"
              dangerouslySetInnerHTML={{ __html: profile.bio }}
            />

            {/* Research interests */}
            <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-2">
              {profile.researchInterests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                >
                  {interest}
                </span>
              ))}
            </div>

            {/* Education */}
            <div className="mt-6 space-y-1.5 text-left">
              {profile.education.map((edu, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 text-sm text-text-secondary"
                >
                  <svg
                    className="w-4 h-4 mt-0.5 text-primary shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"
                    />
                  </svg>
                  <span>
                    {edu.degree}, <span className="font-medium text-text">{edu.school}</span>{" "}
                    <span className="text-text-secondary/70">({edu.year})</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm text-text-secondary hover:text-primary hover:bg-primary/5 border border-border transition-colors"
    >
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        {icon}
      </svg>
      {label}
    </a>
  );
}
