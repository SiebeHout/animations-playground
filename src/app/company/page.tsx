import Values from "@/components/sections/layouts/Values";
import Advisors from "@/components/sections/layouts/Advisors";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Values />
      <Advisors />
    </main>
  );
}
