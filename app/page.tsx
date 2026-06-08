import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="divider" style={{ maxWidth: 900, margin: "0 auto" }} />
        <About />
        <div className="divider" style={{ maxWidth: 900, margin: "0 auto" }} />
        <Projects />
        <div className="divider" style={{ maxWidth: 900, margin: "0 auto" }} />
        <Stack />
        <div className="divider" style={{ maxWidth: 900, margin: "0 auto" }} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
