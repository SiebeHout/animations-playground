import ArrowCTA from "@/components/sections/CTAs/ArrowCTA";
import OffGrid from "@/components/sections/layouts/OffGrid";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* <div className="container flex">
        Siebe Animation playground (Sections here)
      </div> */}
      <div className="h-screen"></div>
      <OffGrid />
      <OffGrid />

      <ArrowCTA />
    </main>
  );
}
