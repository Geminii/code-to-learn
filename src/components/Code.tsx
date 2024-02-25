import { codeToHtml } from "@/lib/shiki";
import type { FunctionComponent } from "react";
import { CodeBlock } from "./CodeBlock";

type CodeProps = {
  code: string;
  language: string;
};

export const Code: FunctionComponent<CodeProps> = async ({
  code,
  language,
}) => {
  const html = await codeToHtml({
    code: code.trim(),
    language,
  });

  return <CodeBlock language={language} html={html} />;
};
