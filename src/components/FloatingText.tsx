import { cn } from "@/lib/utils";
import type { FunctionComponent, PropsWithChildren } from "react";

type FloatingTextProps = PropsWithChildren<{
  className?: string;
}>;

export const FloatingText: FunctionComponent<FloatingTextProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("motion-safe:animate-float-by", className)}>
      {children}
    </div>
  );
};
