import ArrowCTA from "@/components/sections/CTAs/ArrowCTA";
import OffGrid from "@/components/sections/layouts/OffGrid";
import Values from "@/components/sections/layouts/Values";
import MoodChanger from "@/components/sections/layouts/MoodChanger";
import FunClickSection from "@/components/sections/layouts/FunClickSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="container flex">
        Siebe Animation playground (scroll down)
      </div>
      <div className="h-screen"></div>
      <FunClickSection />
      <MoodChanger />
      <OffGrid />
      <Values />

      <ArrowCTA />
    </main>
  );
}
