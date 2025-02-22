"use client";
import { CursorTrigger, CursorContent } from "@/components/cursor";
import { motion } from "motion/react";

import { useCursor } from "@/components/cursor/cursor-context";

export default function ElementMouseHover() {
  const cursorVariants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: { duration: 0.15 },
    },
  };

  const svgVariants = {
    initial: {
      rotate: 0,
      scale: 1,
    },
    animate: {
      rotate: [0, -45],
      transition: {
        times: [0, 0.4, 0.7, 1],
        duration: 1.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.2,
      transition: { duration: 0.15 },
    },
  };

  const pathVariants = {
    initial: {
      pathLength: 0,
      opacity: 0,
    },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 0.5, delay: 0.2 },
        opacity: { duration: 0.2 },
      },
    },
  };

  return (
    <section className="relative flex flex-col w-full bg-zinc-200 py-16 isolate">
      <div className="container flex justify-between">
        <CursorTrigger className="cursor-none">
          <div className="w-[600px] h-[600px] bg-zinc-300 flex flex-col items-center justify-center">
            Hover me
          </div>
        </CursorTrigger>
        <CursorContent variants={cursorVariants}>
          <div className="size-16 rounded-full bg-pink-200 font-medium flex items-center justify-center">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-arrow-right"
              variants={svgVariants}
              initial="initial"
              animate="animate"
              whileTap="tap"
            >
              <motion.circle cx="12" cy="12" r="10" variants={pathVariants} />
              <motion.path d="M8 12h8" variants={pathVariants} />
              <motion.path d="m12 16 4-4-4-4" variants={pathVariants} />
            </motion.svg>
          </div>
        </CursorContent>
        <div className="w-[8vw] h-[600px] bg-zinc-300 flex flex-col items-center justify-center">
          Hover me
        </div>
        <div className="w-[8vw] h-[600px] bg-zinc-300 flex flex-col items-center justify-center">
          Hover me
        </div>
      </div>
    </section>
  );
}
