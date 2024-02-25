import type { MDXComponents } from "mdx/types";

import { ElementsList } from "@/components/mdx/ElementsList";
import { H4Heading } from "@/components/mdx/H4Heading";
import { SubHeading } from "@/components/mdx/SubHeading";
import { Heading } from "./src/components/mdx/Heading";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  // To customize the components used by MDX, you can use the useMDXComponents hook.
  return {
    h1: Heading,
    h2: SubHeading,
    h4: H4Heading,
    ul: ElementsList,
    ...components,
  };
}
