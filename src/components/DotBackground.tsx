import { cn } from "@/lib/utils";
import type { FunctionComponent, PropsWithChildren } from "react";

type DotBackgroundProps = PropsWithChildren<{
  className?: string;
}>;

export const DotBackground: FunctionComponent<DotBackgroundProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center",
        className
      )}
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-20 w-full">{children}</div>
    </div>
  );
};
