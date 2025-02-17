"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function FunClickSection() {
  const letters = ["D", "P", "D", "K"];
  const [isIntro, setIsIntro] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [positions, setPositions] = useState<
    { top: string | number; left: string | number; rotate: string | number }[]
  >([]);

  const generateRandomPositions = () => {
    return letters.map(() => ({
      top: 20 + Math.random() * 60,
      left: 20 + Math.random() * 60,
      rotate: Math.random() * 360,
    }));
  };

  useEffect(() => {
    // Set initial positions
    const centerY = 40;
    const startX = 50 - letters.length * 3;
    const initialPositions = letters.map((_, index) => ({
      top: centerY,
      left: startX + index * 5,
      rotate: 0,
    }));

    setPositions(initialPositions);

    const timer = setTimeout(() => {
      setIsIntro(false);
      setSelectedIndex(Math.floor(Math.random() * letters.length));
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleLetterClick = (index: number) => {
    if (index === selectedIndex) {
      setSelectedIndex(null);

      // Move letters to random positions
      const newPositions = generateRandomPositions();
      setPositions(newPositions);

      setTimeout(() => {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * letters.length);
        } while (newIndex === index);

        setSelectedIndex(newIndex);
      }, 500);
    }
  };

  return (
    <section className="w-full flex flex-col p-4">
      <div className="relative container bg-blue-500 text-blue-50 min-h-[50vh] rounded-3xl text-[5vw] overflow-hidden">
        {letters.map((letter, index) => (
          <motion.div
            key={index}
            className={cn(
              "absolute select-none",
              index === selectedIndex && !isIntro
                ? "cursor-pointer"
                : "cursor-default"
            )}
            style={{
              top: `${positions[index]?.top}%`,
              left: `${positions[index]?.left}%`,
            }}
            animate={{
              top: `${positions[index]?.top}%`,
              left: `${positions[index]?.left}%`,
              rotate: positions[index]?.rotate,
            }}
            transition={{
              duration: isIntro ? 0 : 0.5,
              ease: "easeInOut",
            }}
            onClick={() => handleLetterClick(index)}
          >
            {selectedIndex === index && !isIntro ? (
              <motion.div
                animate={{ rotate: [-5, 5, -5] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.5,
                }}
              >
                {letter}
              </motion.div>
            ) : (
              letter
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
