"use client";

import { useEffect } from "react";
import anime from "animejs";

export default function Anime() {
  useEffect(() => {
    anime({
      targets: "#test",
      translateX: 250,
      duration: 100,
    });
  });

  return (
    <div className="container flex flex-col py-16">
      <p id="test" className="text-5xl">
        Hallo
      </p>
    </div>
  );
}
