"use client";
import { motion, type Variants } from "motion/react";
import { useState } from "react";
import Image from "next/image";

const iconVariants: Variants = {
  initial: { rotate: 0 },
  animate: { rotate: -35 },
};

const imageVariants: Variants = {
  initial: { width: 0, marginRight: 0 },
  animate: { width: 300, marginRight: 10 },
};

export type Fund = {
  title: string;
  text: string;
  themes: string[];
  image: string;
  downloadLink: string;
};

const data = {
  title: "Funds",
  text: `
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          odio commodi distinctio quis, provident suscipit necessitatibus
          officiis labore facilis veritatis harum voluptatibus corporis illum
          voluptates a at quisquam id voluptatum.
        `,
  funds: [
    {
      title:
        "Invest in Equality: The Power of Gender-Inclusive Finance | SANAD",
      text: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            dignissimos pariatur harum quis magni. Repellat deleniti alias ea 
            numquam itaque exercitationem odit beatae, neque distinctio officiis, 
            ut sunt incidunt laboriosam!
            `,
      themes: ["Investment theme", "Geographical location", "Asset classes"],
      image:
        "https://images.unsplash.com/photo-1520052203542-d3095f1b6cf0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      downloadLink: "#",
    },
    {
      title:
        "Invest in Equality: The Power of Gender-Inclusive Finance | SANAD",
      text: `
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              dignissimos pariatur harum quis magni. Repellat deleniti alias ea 
              numquam itaque exercitationem odit beatae, neque distinctio officiis, 
              ut sunt incidunt laboriosam!
              `,
      themes: ["Investment theme", "Geographical location", "Asset classes"],
      image:
        "https://images.unsplash.com/photo-1520052203542-d3095f1b6cf0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      downloadLink: "#",
    },
    {
      title:
        "Invest in Equality: The Power of Gender-Inclusive Finance | SANAD",
      text: `
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              dignissimos pariatur harum quis magni. Repellat deleniti alias ea 
              numquam itaque exercitationem odit beatae, neque distinctio officiis, 
              ut sunt incidunt laboriosam!
              `,
      themes: ["Investment theme", "Geographical location", "Asset classes"],
      image:
        "https://images.unsplash.com/photo-1520052203542-d3095f1b6cf0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      downloadLink: "#",
    },
    {
      title:
        "Invest in Equality: The Power of Gender-Inclusive Finance | SANAD",
      text: `
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              dignissimos pariatur harum quis magni. Repellat deleniti alias ea 
              numquam itaque exercitationem odit beatae, neque distinctio officiis, 
              ut sunt incidunt laboriosam!
              `,
      themes: ["Investment theme", "Geographical location", "Asset classes"],
      image:
        "https://images.unsplash.com/photo-1520052203542-d3095f1b6cf0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      downloadLink: "#",
    },
  ],
};

//grid gebruiken, desktop eerst

export default function CardRowGrid() {
  return (
    <section className="w-full flex flex-col gap-8">
      <div className="flex flex-col gap-5 py-16 container">
        <div className="flex flex-col max-w-[70ch] text-balance">
          <h2 className="my-3 text-4xl">{data.title}</h2>
          <p>{data.text}</p>
        </div>
        {/* Room for more buttons if needed */}
        <div className="flex gap-4">
          <motion.button
            initial="default"
            whileHover="animate"
            className="text-sm px-4 py-2 bg-zinc-800 inline-flex items-center gap-2 text-zinc-50 hover:bg-zinc-900/90  [&_svg]:size-6 rounded-full"
          >
            Learn more{" "}
            <motion.svg
              variants={iconVariants}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-arrow-right"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12h8" />
              <path d="m12 16 4-4-4-4" />
            </motion.svg>
          </motion.button>
        </div>
      </div>
      <div className="flex flex-col">
        {data.funds.map((fund, index) => (
          <FundCard fund={fund} key={index} />
        ))}
      </div>
    </section>
  );
}

export function FundCard({ fund }: { fund: Fund }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full hover:bg-zinc-800 hover:text-white transition-colors duration-300"
    >
      <div className="container grid grid-cols-12 border-t border-black">
        <div className="flex col-span-7 min-h-[200px]">
          <motion.div
            style={{
              width: 0,
              height: "100%",
            }}
            animate={isHovered ? "animate" : "initial"}
            variants={imageVariants}
            className="relative"
          >
            <Image src={fund.image} fill alt="image" objectFit="cover" />
          </motion.div>
          <div className="flex flex-col gap-2 pt-6">
            {fund.themes.toString().replaceAll(",", " | ")}
            <h3 className="text-xl text-balance">{fund.title}</h3>
          </div>
        </div>
        <p className="text-xs col-span-3 pt-6">{fund.text}</p>
        <div className="flex flex-col col-span-2 items-end pt-6">
          <motion.svg
            animate={isHovered ? "animate" : "initial"}
            variants={iconVariants}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-circle-arrow-right"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8" />
            <path d="m12 16 4-4-4-4" />
          </motion.svg>
        </div>
      </div>
    </div>
  );
}
