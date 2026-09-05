import { AuroraBackground } from "@/components/AuroraBackground";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { WhyVertex } from "@/components/WhyVertex";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink font-sans text-fog">
        <AuroraBackground/>
        <Navbar/>
        <main>
            <Hero/>
            <Services/>
            <Projects/>
            <WhyVertex/>
            <Process/>
            <Contact/>
        </main>
        <Footer/>
    </div>
  );
}
