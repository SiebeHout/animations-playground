"use client";

import type React from "react";
import { createContext, useState, useContext, type ReactNode } from "react";
import type { SpringOptions } from "motion/react";

const defaultSpringConfig: SpringOptions = {
  damping: 25,
  stiffness: 300,
  mass: 0.5,
};

type CursorState = {
  isVisible: boolean;
  initialPosition: { x: number; y: number } | null;
};

type CursorContextType = {
  cursors: Record<string, CursorState>;
  setCursorState: (id: string, state: Partial<CursorState>) => void;
  springConfig: SpringOptions;
};

const CursorContext = createContext<CursorContextType | undefined>(undefined);

type CursorProviderProps = {
  children: ReactNode;
  springConfig?: SpringOptions;
};

export const CursorProvider: React.FC<CursorProviderProps> = ({
  children,
  springConfig = defaultSpringConfig,
}) => {
  const [cursors, setCursors] = useState<Record<string, CursorState>>({});

  const setCursorState = (id: string, state: Partial<CursorState>) => {
    setCursors((prev) => {
      const current = prev[id];
      // Only update if values actually changed
      if (
        current?.isVisible === state.isVisible &&
        current?.initialPosition?.x === state.initialPosition?.x &&
        current?.initialPosition?.y === state.initialPosition?.y
      ) {
        return prev;
      }
      return {
        ...prev,
        [id]: {
          ...current,
          ...state,
        },
      };
    });
  };

  return (
    <CursorContext.Provider value={{ cursors, setCursorState, springConfig }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
};
