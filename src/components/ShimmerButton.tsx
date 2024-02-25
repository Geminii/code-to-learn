import { cn } from "@/lib/utils";
import type {
  ComponentPropsWithoutRef,
  FunctionComponent,
  PropsWithChildren,
} from "react";

type ShimmerButtonProps = PropsWithChildren<{
  isActive?: boolean;
  className?: string;
}> &
  ComponentPropsWithoutRef<"button">;

export const ShimmerButton: FunctionComponent<ShimmerButtonProps> = ({
  isActive = false,
  className,
  children,
  ...restProps
}) => {
  const activeClassname = isActive
    ? "ring-2 ring-slate-400 ring-offset-slate-50"
    : "";

  return (
    <button
      className={cn(
        "inline-flex h-12 hover:animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#000103,45%,#1e2631,80%,#000103)] bg-[length:200%_100%] border border-slate-800 px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
        activeClassname,
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
};
