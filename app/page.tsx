import { AuroraBackground } from "@/components/AuroraBackground";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink font-sans text-fog">
        <AuroraBackground/>
        <Navbar/>
    </div>
  );
}
