"use client";
import React, { useEffect, useState, useCallback } from "react";
import {
  motion,
  SpringOptions,
  useMotionValue,
  useSpring,
  AnimatePresence,
  Transition,
  Variant,
} from "motion/react";
import { cn } from "@/lib/utils";
import CursorContext, { useCursor } from "./cursor-context";

// Types
type CursorProviderProps = {
  children: React.ReactNode;
  springConfig?: SpringOptions;
};

type CursorContentProps = {
  children: React.ReactNode;
  className?: string;
  variants?: {
    initial: Variant;
    animate: Variant;
    exit: Variant;
  };
  transition?: Transition;
};

type CursorTriggerProps = {
  children: React.ReactNode;
  className?: string;
};

const defaultSpringConfig: SpringOptions = {
  damping: 25,
  stiffness: 300,
  mass: 0.5,
};

const defaultVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.15 } },
};

const defaultTransition = {
  duration: 0.15,
  ease: "easeOut",
};

// Components
export const CursorProvider = ({
  children,
  springConfig = defaultSpringConfig,
}: CursorProviderProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    cursorX.set(window.innerWidth / 2);
    cursorY.set(window.innerHeight / 2);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <CursorContext.Provider
      value={{
        isVisible,
        setIsVisible,
        cursorX: springX,
        cursorY: springY,
        isHovered,
        setIsHovered,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const CursorContent = ({
  children,
  className,
  variants = defaultVariants,
  transition = defaultTransition,
}: CursorContentProps) => {
  const { isHovered, cursorX, cursorY } = useCursor();

  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          className={cn(
            "pointer-events-none fixed left-0 top-0 z-50",
            className
          )}
          style={{
            x: cursorX,
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          transition={transition}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const CursorTrigger = ({ children, className }: CursorTriggerProps) => {
  const { setIsHovered } = useCursor();

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div
      className={cn("cursor-none", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};
