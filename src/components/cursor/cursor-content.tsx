"use client";

import type React from "react";
import { type ReactNode } from "react";
import {
  motion,
  AnimatePresence,
  type Variants,
  type Transition,
} from "motion/react";
import { useCursor } from "./cursor-context";
import { useMousePosition } from "@/lib/use-mouse-position";
import { cn } from "@/lib/utils";

type CursorContentProps = {
  children: ReactNode;
  cursorId: string;
  variants?: Variants;
  className?: string;
  transition?: Transition;
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

export const CursorContent: React.FC<CursorContentProps> = ({
  children,
  cursorId,
  variants = defaultVariants,
  transition = defaultTransition,
  className,
}) => {
  const { cursors } = useCursor();
  const mousePosition = useMousePosition();
  const cursorState = cursors[cursorId];

  if (!cursorState) return null;

  return (
    <AnimatePresence>
      {cursorState.isVisible && (
        <motion.div
          key={cursorId}
          className={cn("fixed pointer-events-none z-50", className)}
          initial={{
            x: cursorState.initialPosition?.x || mousePosition.x,
            y: cursorState.initialPosition?.y || mousePosition.y,
          }}
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            translateX: "-50%",
            translateY: "-50%",
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 300,
            mass: 0.1,
          }}
        >
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={transition}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
