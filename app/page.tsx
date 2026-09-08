import { Metadata } from "next";

import { AboutSection } from "@/components/About";
import { AuroraBackground } from "@/components/AuroraBackground";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { WhyVertex } from "@/components/WhyVertex";


export const metadata: Metadata = {
  title: "Vertex Software | Custom Web & Full-Stack Development",
  description:
    "Vertex Software builds custom websites, web applications, APIs, and full-stack software for startups, small businesses, and growing teams.",

  keywords: [
    "software development agency",
    "web development",
    "full-stack development",
    "custom software development",
    "MVP development",
    "backend development",
    "API development",
    "Vertex Software",
  ],

  openGraph: {
    title: "Vertex Software | Custom Web & Full-Stack Development",
    description:
      "Custom websites, web applications, APIs, and full-stack software built for your business.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vertex Software | Custom Web & Full-Stack Development",
    description:
      "Custom websites, web applications, APIs, and full-stack software built for your business.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink font-sans text-fog">
        <AuroraBackground/>
        <Navbar/>
        <main>
            <Hero/>
            <Services/>
            <Projects/>
            <AboutSection/>
            <WhyVertex/>
            <Process/>
            <Contact/>
        </main>
        <Footer/>
    </div>
  );
}
