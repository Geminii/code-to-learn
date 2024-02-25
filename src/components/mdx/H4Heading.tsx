import type { ComponentPropsWithoutRef, FunctionComponent } from "react";

type H4HeadingProps = {};

export const H4Heading: FunctionComponent<H4HeadingProps> = (
  props: ComponentPropsWithoutRef<"h4">
) => {
  return <h4 className="font-bold text-lg my-2" {...props} />;
};
