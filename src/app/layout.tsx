import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "I-Chun (Arthur) Liu | PhD Candidate at USC",
  description:
    "Personal website of I-Chun (Arthur) Liu, PhD Candidate at USC working on robotics, bimanual manipulation, and imitation learning.",
  icons: {
    icon: "/images/profile.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
