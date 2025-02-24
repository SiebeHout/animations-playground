"use client";

import Carousel from "@/components/sections/layouts/Carousel";
import clsx from "clsx";
import Image from "next/image";

interface Image {
  url: string;
}

const images: Image[] = [
  {
    url: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=2940&auto=format&fit=crop",
  },
  {
    url: "https://images.unsplash.com/photo-1682687220199-d0124f48f95b?q=80&w=2940&auto=format&fit=crop",
  },
  {
    url: "https://images.unsplash.com/photo-1682687220509-61b8a906ca19?q=80&w=2940&auto=format&fit=crop",
  },
  {
    url: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=2940&auto=format&fit=crop",
  },
  {
    url: "https://images.unsplash.com/photo-1682687220199-d0124f48f95b?q=80&w=2940&auto=format&fit=crop",
  },
  {
    url: "https://images.unsplash.com/photo-1682687220509-61b8a906ca19?q=80&w=2940&auto=format&fit=crop",
  },
  {
    url: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=2940&auto=format&fit=crop",
  },
  {
    url: "https://images.unsplash.com/photo-1682687220199-d0124f48f95b?q=80&w=2940&auto=format&fit=crop",
  },
  {
    url: "https://images.unsplash.com/photo-1682687220509-61b8a906ca19?q=80&w=2940&auto=format&fit=crop",
  },
  {
    url: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=2940&auto=format&fit=crop",
  },
  {
    url: "https://images.unsplash.com/photo-1682687220199-d0124f48f95b?q=80&w=2940&auto=format&fit=crop",
  },
  {
    url: "https://images.unsplash.com/photo-1682687220509-61b8a906ca19?q=80&w=2940&auto=format&fit=crop",
  },
  {
    url: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=2940&auto=format&fit=crop",
  },
  {
    url: "https://images.unsplash.com/photo-1682687220199-d0124f48f95b?q=80&w=2940&auto=format&fit=crop",
  },
  {
    url: "https://images.unsplash.com/photo-1682687220509-61b8a906ca19?q=80&w=2940&auto=format&fit=crop",
  },
];

const CarouselExample = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="overflow-x-hidden mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Image Gallery</h2>

        <Carousel className="gap-6" friction={0.9}>
          {images.map((image, index) => (
            <div
              key={index}
              className={clsx(
                "relative w-[500px] h-[300px] flex-shrink-0 rounded-2xl overflow-hidden",
                "hover:scale-[1.02]",
                "transition-transform duration-300"
              )}
            >
              <Image
                src={image.url}
                alt={`Gallery image`}
                fill
                className="object-cover"
                draggable="false"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default CarouselExample;
