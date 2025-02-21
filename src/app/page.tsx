import ArrowCTA from "@/components/sections/CTAs/ArrowCTA";
import OffGrid from "@/components/sections/layouts/OffGrid";
import Values from "@/components/sections/layouts/Values";
import MoodChanger from "@/components/sections/layouts/MoodChanger";
import FunClickSection from "@/components/sections/layouts/FunClickSection";
import Advisors from "@/components/sections/layouts/Advisors";
// import DisappearCarousel from "@/components/sections/layouts/DisappearCarousel";
import Anime from "@/components/sections/layouts/Anime";
// import CardRowGrid from "@/components/sections/layouts/CardRowGrid";
// import CardRowGridV2 from "@/components/sections/layouts/CardRowGridV2";
import StickyFooter, {
  ExampleFooter,
} from "@/components/sections/layouts/StickyFooter";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="container flex">
        Siebe Animation playground (scroll down)
      </div>
      <div className="h-screen"></div>
      {/* <CardRowGridV2 /> */}
      {/* <DisappearCarousel /> */}
      <Anime />
      <FunClickSection />
      <MoodChanger />
      <OffGrid />
      <Values />
      <Advisors />

      <ArrowCTA />
      <StickyFooter className="h-[200px] md:h-[300px] xl:h-[600px] bg-zinc-500 text-zinc-800">
        <ExampleFooter />
      </StickyFooter>
    </main>
  );
}
