import type { ComponentPropsWithoutRef } from "react";

export const ElementsList = (props: ComponentPropsWithoutRef<"ul">) => {
  return <ul className="pl-4 list-disc list-inside mb-4" {...props} />;
};
