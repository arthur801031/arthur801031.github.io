export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-sm text-text-secondary">
          &copy; {new Date().getFullYear()} I-Chun (Arthur) Liu. Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener"
            className="text-primary hover:underline"
          >
            Next.js
          </a>{" "}
          &amp;{" "}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener"
            className="text-primary hover:underline"
          >
            Tailwind CSS
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
