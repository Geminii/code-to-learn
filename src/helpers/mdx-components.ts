import { CodeSnippet } from "@/components/CodeSnippet/CodeSnippet";
import type { MDXProvider } from "@mdx-js/react";
import type { ComponentProps } from "react";

export const COMPONENT_MAP: ComponentProps<typeof MDXProvider>["components"] = {
  pre: CodeSnippet,
};
