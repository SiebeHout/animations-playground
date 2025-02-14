"use client";

import { useRef } from "react";
import { easeInOut } from "motion/react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "@/components/ui/button";

const data = {
  title: {
    line1: "Beyond Visions ",
    line2: "Within Reach",
  },
  text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit nisi excepturi quam incidunt explicabo nesciunt ratione nobis tempora maxime error aliquid voluptatem, vero architecto sit maiores, iusto modi. Delectus porro eum ipsum sint repellat dicta cumque deserunt doloremque at accusamus.",
};

export default function OffGrid() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "0"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1], {
    ease: easeInOut,
  });
  const pathOpacity = useTransform(scrollYProgress, [0, 1], [0, 1], {
    ease: easeInOut,
  });

  return (
    <section
      ref={containerRef}
      className="relative w-full flex xl:min-h-[80vh] flex-col items-center justify-center overflow-clip"
    >
      <div className="container flex flex-col gap-6 z-[2] py-16">
        <div className="w-full flex">
          <h1 className="text-4xl md:text-4xl xl:text-8xl w-2/3 text-balance font-medium">
            <span>{data.title.line1}</span>
            <span>{data.title.line2}</span>
          </h1>
        </div>
        <div className="flex justify-end w-full">
          <div className="flex flex-col xl:max-w-[45%] gap-8">
            <p className="text-lg xl:text-2xl text-balance">{data.text}</p>
            <Button className="w-fit xl:px-8 xl:py-4" size="lg">
              Start Now
            </Button>
          </div>
        </div>
      </div>
      <div className="h-full w-full absolute z-[1]">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1220 914"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M 2 22.0889 C 409.292 1.0215 598.539 290.573 501.143 464.64 C 481.402 499.923 449.884 530.46 406.018 552.705 C 283.005 611.875 -85.0127 572.785 140.004 286.071 C 280.189 107.449 398.899 264.334 501.143 464.64 C 573.193 605.792 637.066 768.504 694.518 850.57 C 797.542 997.735 874.284 729.339 1002 515 C 1129.72 300.661 982 879 1197 879"
            stroke="#4AB5EB"
            strokeWidth="41"
            strokeLinejoin="round"
            style={{
              pathLength: pathLength,
              opacity: pathOpacity,
            }}
          />
        </svg>
      </div>
    </section>
  );
}
