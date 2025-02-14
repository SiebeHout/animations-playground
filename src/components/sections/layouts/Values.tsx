"use client";

// this component is inspired from https://halodental.com/company

import { motion } from "motion/react";

const data = {
  title: "Our Values",
  values: [
    {
      title: "Better Together",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sapiente quaerat illum a tempore. Explicabo expedita maxime dicta quaerat aut.",
    },
    {
      title: "Generosity",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sapiente quaerat illum a tempore. Explicabo expedita maxime dicta quaerat aut.",
    },
    {
      title: "Open Door Policy",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sapiente quaerat illum a tempore. Explicabo expedita maxime dicta quaerat aut.",
    },
    {
      title: "Perseverance",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sapiente quaerat illum a tempore. Explicabo expedita maxime dicta quaerat aut.",
    },
  ],
};

export default function Values() {
  return (
    <section className="w-full flex flex-col bg-sky-50">
      <div className="container flex flex-col py-16 gap-12">
        <header>
          <motion.h2
            initial={{
              opacity: 0,
              maskImage: "linear-gradient(to right, black 0%, transparent 0%)",
              WebkitMaskImage:
                "linear-gradient(to right, black 0%, transparent 0%)",
              maskSize: "cover",
              WebkitMaskSize: "cover",
              maskPosition: "0%",
              WebkitMaskPosition: "100%",
            }}
            whileInView={{
              opacity: 1,
              maskImage:
                "linear-gradient(to left, black 100%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, black 100%, transparent 100%)",
              maskSize: "cover",
              WebkitMaskSize: "cover",
              maskPosition: "100%",
              WebkitMaskPosition: "100%",
            }}
            transition={{
              duration: 1.5,
              ease: "easeIn",
            }}
            viewport={{
              once: true,
            }}
            className="text-4xl md:text-5xl xl:text-7xl font-medium"
          >
            {data.title}
          </motion.h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {data.values.map((content, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeIn",
              }}
              key={index}
              className="p-5 bg-white w-full rounded-lg flex flex-col gap-3"
            >
              <h3 className="text-xl md:text-2xl xl:text-3xl">
                {content.title}
              </h3>
              <p>{content.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
