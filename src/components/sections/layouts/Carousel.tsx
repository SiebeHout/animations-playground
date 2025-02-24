import { useEffect, useRef } from "react";
import clsx from "clsx";
import React from "react";

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  friction?: number;
  ariaLabel?: string;
  role?: string;
  roleDescription?: string;
  tabIndex?: number;
  slideRoleDescription?: string;
  slideAriaLabel?: (index: number, total: number) => string;
}

export default function Carousel({
  children,
  className,
  friction = 0.92,
  ariaLabel = "Image carousel",
  role = "region",
  roleDescription = "carousel",
  tabIndex = 0,
  slideRoleDescription = "slide",
  slideAriaLabel = (index, total) => `Slide ${index + 1} of ${total}`,
}: CarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentX = useRef(0);
  const prevTranslate = useRef(0);
  const currentTranslate = useRef(0);
  const lastDragTime = useRef(Date.now());
  const dragVelocity = useRef(0);

  const animate = () => {
    if (!trackRef.current || !containerRef.current) return;

    if (Math.abs(dragVelocity.current) > 0.1) {
      const maxScroll =
        trackRef.current.scrollWidth - containerRef.current.clientWidth;

      currentTranslate.current += dragVelocity.current;
      currentTranslate.current = Math.max(
        0,
        Math.min(maxScroll, currentTranslate.current)
      );

      trackRef.current.style.transform = `translateX(${-currentTranslate.current}px)`;

      dragVelocity.current *= friction;

      animationRef.current = requestAnimationFrame(animate);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    currentX.current = e.clientX;
    prevTranslate.current = currentTranslate.current;
    lastDragTime.current = Date.now();
    dragVelocity.current = 0;

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current || !containerRef.current)
      return;

    e.preventDefault();
    const currentMouseX = e.clientX;
    const dt = Date.now() - lastDragTime.current;
    const dx = currentMouseX - currentX.current;

    if (dt > 0) {
      dragVelocity.current = -dx * 0.3;
    }

    currentX.current = currentMouseX;
    lastDragTime.current = Date.now();

    const diff = startX.current - currentMouseX;
    const maxScroll =
      trackRef.current.scrollWidth - containerRef.current.clientWidth;

    currentTranslate.current = Math.max(
      0,
      Math.min(maxScroll, prevTranslate.current + diff)
    );

    trackRef.current.style.transform = `translateX(${-currentTranslate.current}px)`;
  };

  const handleMouseUp = () => {
    isDragging.current = false;

    if (Math.abs(dragVelocity.current) > 0.1) {
      animationRef.current = requestAnimationFrame(animate);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!trackRef.current || !containerRef.current) return;

    const itemWidth = trackRef.current.children[0].clientWidth;
    const gap = parseInt(getComputedStyle(trackRef.current).gap || "0");
    const moveAmount = itemWidth + gap;
    const maxScroll =
      trackRef.current.scrollWidth - containerRef.current.clientWidth;

    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        currentTranslate.current = Math.max(
          0,
          currentTranslate.current - moveAmount
        );
        break;
      case "ArrowRight":
        e.preventDefault();
        currentTranslate.current = Math.min(
          maxScroll,
          currentTranslate.current + moveAmount
        );
        break;
    }

    trackRef.current.style.transform = `translateX(${-currentTranslate.current}px)`;
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative overflow-x-hidden w-full"
      role={role}
      aria-label={ariaLabel}
      aria-roledescription={roleDescription}
      tabIndex={tabIndex}
      onKeyDown={handleKeyDown}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        ref={trackRef}
        role=""
        className={clsx(
          "flex transition-transform duration-0 cursor-grab active:cursor-grabbing",
          className
        )}
        style={{
          transform: `translateX(${-currentTranslate.current}px)`,
          touchAction: "none",
        }}
      >
        {React.Children.toArray(children).map((child, index, array) => (
          <div
            key={index}
            role="group"
            aria-roledescription={slideRoleDescription}
            aria-label={slideAriaLabel(index, array.length)}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
