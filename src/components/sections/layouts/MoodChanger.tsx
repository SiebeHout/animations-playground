"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

export default function MoodChanger() {
  const moods = [
    {
      title: "pizza-y",
      textColor: "rgba(255, 224, 133, 1)",
      backgroundColor: "rgba(186, 85, 74, 1)",
      borderColor: "rgba(255, 224, 133, 1)",
    },
    {
      title: "cute",
      textColor: "white",
      backgroundColor: "rgba(236, 182, 214, 1)",
      borderColor: "white",
    },
    {
      title: "smelly",
      textColor: "rgba(51, 153, 51, 1)",
      backgroundColor: "rgba(0, 102, 0, 1)",
      borderColor: "rgba(51, 153, 51, 1)",
    },
  ];

  const [currentMoodIndex, setCurrentMoodIndex] = useState(0);

  const handleMoodChange = () => {
    setCurrentMoodIndex((prevIndex) => (prevIndex + 1) % moods.length);
  };

  const currentMood = moods[currentMoodIndex];

  return (
    <motion.div
      initial={{
        backgroundColor: currentMood.backgroundColor,
        color: currentMood.textColor,
      }}
      animate={{
        backgroundColor: currentMood.backgroundColor,
        color: currentMood.textColor,
      }}
      transition={{ duration: 0.5 }}
      className={"relative w-full flex flex-col items-center"}
      style={{
        backgroundColor: currentMood.backgroundColor,
        color: currentMood.textColor,
        borderColor: currentMood.borderColor,
      }}
    >
      <div className="absolute mt-8">
        <button
          className="italic font-bold px-3 py-2 rounded-full border-2 transition-colors duration-500"
          onClick={handleMoodChange}
          style={{ borderColor: currentMood.borderColor }}
        >
          change the mood?
        </button>
      </div>
      <div className="w-full flex flex-col container pt-24 pb-16">
        <div className="flex flex-col text-center gap-3 text-balance">
          <h1 className="text-4xl">Im feeling very {currentMood.title}</h1>
          <h2 className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, quia
            voluptates. Totam, accusamus! Asperiores doloribus repellendus,
            eligendi deleniti provident nemo.
          </h2>
        </div>
      </div>
    </motion.div>
  );
}
