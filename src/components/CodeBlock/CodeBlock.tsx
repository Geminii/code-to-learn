import type {
  DetailedHTMLProps,
  FunctionComponent,
  HTMLAttributes,
} from "react";

type CodeBlockProps =
  | DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>
  | undefined;

export const CodeBlock: FunctionComponent<CodeBlockProps> = (props) => {
  if (!props) return null;

  const dataLanguage = (props as any)["data-language"];

  return (
    <div className="relative">
      <span className="absolute right-2 top-1 text-[#F47067] text-sm lowercase">
        {dataLanguage}
      </span>
      <pre {...props} />
    </div>
  );
};
