import type React from "react";
import type { ReactNode } from "react";
import { useCursor } from "./cursor-context";
import { cn } from "@/lib/utils";

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

  return (
    <div
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
