import type { DecorationItem } from "shiki/bundle/web";
import { bundledLanguages, getHighlighter } from "shiki/bundle/web";

type CodeToHtmlProps = {
  code: string;
  language: string;
  decorations?: DecorationItem[];
};

export const codeToHtml = async ({
  code,
  language,
  decorations,
}: CodeToHtmlProps) => {
  const highlighter = await getHighlighter({
    themes: ["github-dark"],
    langs: [...Object.keys(bundledLanguages)],
  });

  return highlighter.codeToHtml(code, {
    lang: language,
    theme: "github-dark",
    transformers: [
      {
        root: (hast) => {
          // Add tabindex="-1" to the root element to be not focusable
          if (hast.children && hast.children[0].type === "element") {
            hast.children[0].properties = {
              ...(hast.children[0].properties || {}),
              tabindex: -1,
            };
          }
        },
        span(node, line, col) {
          node.properties["data-token"] = `token:${line}:${col}`;
        },
      },
    ],
    decorations,
  });
};
