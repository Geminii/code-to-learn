import type { ComponentPropsWithoutRef } from "react";

export const SubHeading = (props: ComponentPropsWithoutRef<"h2">) => {
  return <h2 className="text-2xl tracking-normal font-bold my-4" {...props} />;
};
