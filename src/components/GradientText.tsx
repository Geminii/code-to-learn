import { cn } from "@/lib/utils";
import type { FunctionComponent, PropsWithChildren } from "react";

type GradientTextProps = PropsWithChildren<{
  className?: string;
}>;

export const GradientText: FunctionComponent<GradientTextProps> = ({
  className,
  children,
}) => {
  return (
    <span
      className={cn(
        "bg-gradient-120 from-primary to-accent inline-block text-transparent bg-clip-text",
        className
      )}
    >
      {children}
    </span>
  );
};
