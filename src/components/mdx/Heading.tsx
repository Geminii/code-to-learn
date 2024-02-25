import type { ComponentPropsWithoutRef } from "react";

export const Heading = (props: ComponentPropsWithoutRef<"h1">) => {
  return (
    <h1
      className="text-4xl font-bold text-ellipsis text-nowrap leading-tight mb-4"
      {...props}
    />
  );
};
