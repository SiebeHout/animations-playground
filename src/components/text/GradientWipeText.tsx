"use client";

import { motion } from "motion/react";

export default function GradientWipeText({
  title = "default title",
  duration = 1.5,
}: {
  title: string;
  duration?: number;
}) {
  return (
    <motion.span
      initial={{
        opacity: 0,
        maskImage: "linear-gradient(to right, black 0%, transparent 0%)",
        WebkitMaskImage: "linear-gradient(to right, black 0%, transparent 0%)",
        maskSize: "cover",
        WebkitMaskSize: "cover",
        maskPosition: "0%",
        WebkitMaskPosition: "100%",
      }}
      whileInView={{
        opacity: 1,
        maskImage: "linear-gradient(to left, black 100%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, black 100%, transparent 100%)",
        maskSize: "cover",
        WebkitMaskSize: "cover",
        maskPosition: "100%",
        WebkitMaskPosition: "100%",
      }}
      transition={{
        duration: duration,
        ease: "easeIn",
      }}
      viewport={{
        once: true,
      }}
    >
      {title}
    </motion.span>
  );
}
