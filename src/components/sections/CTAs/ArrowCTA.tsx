"use client";
// inspired from https://www.wheregiantsroam.co.uk/

import { useRef } from "react";
import { motion } from "motion/react";
import { useMousePosition } from "@/lib/use-mouse-position";

export default function ArrowCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition();

  return (
    <section
      ref={containerRef}
      className="w-full bg-zinc-900 grid grid-cols-10 grid-rows-6 relative"
    >
      {Array.from({ length: 60 }).map((_, i) => {
        return <Arrow key={i} mouseX={x} mouseY={y} />;
      })}
      <a
        href="#"
        className="text-[11vw] m-0 text-white hover:text-zinc-700 bg-zinc-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-colors duration-300"
      >
        Play
      </a>
    </section>
  );
}

interface ArrowProps {
  mouseX: number;
  mouseY: number;
}

function Arrow({ mouseX, mouseY }: ArrowProps) {
  const arrowRef = useRef<HTMLDivElement>(null);
  const prevAngleRef = useRef<number>(0);

  // hiervoor heb ik ai gebruikt
  const calculateAngle = () => {
    if (!arrowRef.current) return 0;

    const rect = arrowRef.current.getBoundingClientRect();
    const arrowCenterX = rect.left + rect.width / 2;
    const arrowCenterY = rect.top + rect.height / 2;

    // Calculate angle in radians
    const angleRad = Math.atan2(mouseY - arrowCenterY, mouseX - arrowCenterX);
    let angleDeg = (angleRad * 180) / Math.PI + 90;

    // Normalize the angle to prevent sudden flips
    const prevAngle = prevAngleRef.current;
    while (angleDeg - prevAngle > 180) angleDeg -= 360;
    while (angleDeg - prevAngle < -180) angleDeg += 360;

    prevAngleRef.current = angleDeg;
    return angleDeg;
  };

  return (
    <div className="overflow-clip">
      <motion.div
        ref={arrowRef}
        animate={{
          rotate: calculateAngle(),
        }}
        transition={{
          type: "tween",
          duration: 0.1,
        }}
        // transition={{
        //   type: "spring",
        //   bounce: 0.4,
        // }}
        className="size-[8vw]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='600' height='600' viewBox='0 0 600 600' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M276.718 600V121.558C277.821 113.271 280.258 103.917 281.987 97.6162C282.401 96.3285 282.466 95.1972 282.153 94.2223C281.886 93.3761 281.187 92.2447 279.412 91.6745L279.173 91.6009L277.922 91.4261C276.589 91.4261 274.805 92.0608 273.839 95.0684C272.34 99.7501 269.544 108.46 265.736 114.365C254.295 132.071 191.166 200.586 140.775 238.453L113 201.147C189.768 143.706 246.799 74.1986 278.06 0H321.94C353.191 74.1986 410.232 143.706 487 201.147L459.234 238.453C408.843 200.586 345.705 132.071 334.264 114.365C330.465 108.488 327.669 99.7685 326.161 95.0868C325.186 92.0516 323.402 91.4261 322.068 91.4261H321.82L320.579 91.6745C318.803 92.2447 318.104 93.3761 317.838 94.2223C317.525 95.1972 317.589 96.3285 318.022 97.6806C319.732 103.898 322.17 113.234 323.292 121.77V600H276.718Z' fill='white'/%3E%3C/svg%3E")`,
          backgroundSize: "50%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transformOrigin: "50%",
        }}
      />
    </div>
  );
}
