import { createContext, useContext } from "react";
import { MotionValue } from "motion/react";

type CursorContextType = {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
  cursorX: MotionValue<number>;
  cursorY: MotionValue<number>;
  isHovered: boolean;
  setIsHovered: (hovered: boolean) => void;
};

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
};

export default CursorContext;
