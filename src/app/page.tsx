import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ExperienceEducation from "@/components/ExperienceEducation";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <main className="w-full relative z-10 flex flex-col">
        <About />
        <Skills />
        <Projects />
        <ExperienceEducation />
      </main>
      <ContactFooter />
    </>
  );
}
