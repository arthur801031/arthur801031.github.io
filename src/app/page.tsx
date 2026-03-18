import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Publications from "@/components/Publications";
import Experience from "@/components/Experience";
import Awards from "@/components/Awards";
import Service from "@/components/Service";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider max-w-5xl mx-auto" />
        <News />
        <Publications />
        <Experience />
        <Awards />
        <Service />
      </main>
      <Footer />
    </>
  );
}
