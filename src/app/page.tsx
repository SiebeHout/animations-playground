import ArrowCTA from "@/components/sections/CTAs/ArrowCTA";
import OffGrid from "@/components/sections/layouts/OffGrid";
import Values from "@/components/sections/layouts/Values";
import MoodChanger from "@/components/sections/layouts/MoodChanger";
import FunClickSection from "@/components/sections/layouts/FunClickSection";
import Advisors from "@/components/sections/layouts/Advisors";
// import DisappearCarousel from "@/components/sections/layouts/DisappearCarousel";
import Anime from "@/components/sections/layouts/Anime";
// import CardRowGrid from "@/components/sections/layouts/CardRowGrid";
import CardRowGridV2 from "@/components/sections/layouts/CardRowGridV2";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="container flex">
        Siebe Animation playground (scroll down)
      </div>
      <CardRowGridV2 />
      {/* <DisappearCarousel /> */}
      <div className="h-screen"></div>
      <Anime />
      <FunClickSection />
      <MoodChanger />
      <OffGrid />
      <Values />
      <Advisors />

      <ArrowCTA />
    </main>
  );
}
