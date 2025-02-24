"use client";

import type React from "react";
import type { ReactNode } from "react";
import { useCursor } from "./cursor-context";
import { cn } from "@/lib/utils";
import { useInView } from "motion/react";
import { useRef, useEffect } from "react";

type CursorTriggerProps = {
  children: ReactNode;
  cursorId: string;
  className?: string;
};

export const CursorTrigger: React.FC<CursorTriggerProps> = ({
  children,
  cursorId,
  className,
}) => {
  const { setCursorState } = useCursor();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0 });

  // Hide cursor when element is not in view
  useEffect(() => {
    if (!isInView) {
      setCursorState(cursorId, {
        isVisible: false,
        initialPosition: null,
      });
    }
  }, [isInView, cursorId, setCursorState]);

  return (
    <div
      ref={ref}
      className={cn("cursor-none", className)}
      onMouseEnter={(e) =>
        setCursorState(cursorId, {
          isVisible: true,
          initialPosition: { x: e.clientX, y: e.clientY },
        })
      }
      onMouseLeave={() =>
        setCursorState(cursorId, {
          isVisible: false,
          initialPosition: null,
        })
      }
    >
      {children}
    </div>
  );
};
