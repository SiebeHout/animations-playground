"use client";
// this component is inspired from https://halodental.com/company

import { useRef, useEffect } from "react";
import { motion, useInView, Variants } from "motion/react";
import Image from "next/image";

import GradientWipeText from "@/components/text/GradientWipeText";
import { User } from "lucide-react";

const data = {
  title: "Our Advisors",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores veritatis quae enim praesentium voluptas? Error ad eius architecto, unde id voluptatibus quibusdam incidunt ipsum dolore obcaecati deserunt? Dolor natus esse dolore. Eos laborum omnis quos aspernatur at reiciendis qui beatae.",
  people: [
    {
      name: "Dr Yvan Poitras",
      title: "Founder of the XYZ institute",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Dr Yvan Poitras",
      title: "Founder of the XYZ institute",
      image:
        "https://images.unsplash.com/photo-1573496799515-eebbb63814f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1c2luZXNzJTIwcGVyc29ufGVufDB8fDB8fHww",
    },
    {
      name: "Dr Yvan Poitras",
      title: "Founder of the XYZ institute",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Dr Yvan Poitras",
      title: "Founder of the XYZ institute",
      image:
        "https://images.unsplash.com/photo-1573496799515-eebbb63814f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1c2luZXNzJTIwcGVyc29ufGVufDB8fDB8fHww",
    },
  ],
};

const peopleVariants: Variants = {
  offscreen: {
    opacity: 0,
    maskImage: "linear-gradient(to right, black 0%, transparent 0%)",
    WebkitMaskImage: "linear-gradient(to right, black 0%, transparent 0%)",
    maskSize: "cover",
    WebkitMaskSize: "cover",
    maskPosition: "100%",
    WebkitMaskPosition: "100%",
  },
  onscreen: (custom) => ({
    opacity: 1,
    maskImage: "linear-gradient(to left, black 100%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(to right, black 100%, transparent 100%)",
    maskSize: "cover",
    WebkitMaskSize: "cover",
    maskPosition: "100%",
    WebkitMaskPosition: "100%",
    transition: {
      duration: 0.4,
      ease: "easeIn",
      delay: custom * 0.2,
    },
  }),
};

export default function Advisors() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  useEffect(() => {}, [isInView]);

  return (
    <section ref={containerRef} className="w-full bg-sky-50 flex flex-col">
      <div className="container grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-0 py-16">
        <div className="flex flex-col gap-3 text-balance">
          <h3 className="text-3xl md:text-4xl xl:text-5xl font-medium">
            <GradientWipeText title={data.title} duration={0.5} />
          </h3>
          <p>{data.text}</p>
        </div>
        <ul className="w-full flex flex-col gap-8">
          {data.people.map((person, index) => (
            <motion.li
              key={index}
              className="relative grid grid-cols-6 gap-5 xl:grid-cols-12"
              initial="offscreen"
              whileInView="onscreen"
              variants={peopleVariants}
              custom={index}
            >
              <div className="col-span-1 xl:col-span-2">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={100}
                  height={100}
                  className="object-cover object-top aspect-square rounded-lg"
                />
              </div>
              <div className="col-span-4  xl:col-span-9 flex flex-col gap-2 xl:py-2">
                <p className="text-2xl font-medium">{person.name}</p>
                <p>{person.title}</p>
              </div>
              <div className="w-full h-fit flex items-center xl:py-2">
                <div className="bg-sky-100 p-[2px] rounded-md ml-auto">
                  <User size={20} />
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
