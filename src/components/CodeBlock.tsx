import type { FunctionComponent } from "react";
import { Loader } from "react-feather";
import { CopyClipboard } from "./CopyClipboard";

type CodeBlockProps = {
  copyCode?: string;
  language: string;
  html: string;
};

export const CodeBlock: FunctionComponent<CodeBlockProps> = ({
  copyCode,
  language,
  html,
}) => {
  return (
    <div className="relative mt-14">
      <div className="absolute -top-9 left-4 bg-[#24292e] px-4 py-2 rounded-tl-md rounded-tr-md font-bold uppercase">
        {language}
      </div>
      <div className="relative flex min-h-6 bg-[#24292e] rounded-lg p-4">
        {!html && (
          <Loader className="w-8 h-8 text-slate-400 mx-auto my-4 animate-spin" />
        )}
        {html && (
          <>
            {copyCode && (
              <CopyClipboard
                className="absolute top-4 right-4"
                text={copyCode}
              />
            )}
            <div dangerouslySetInnerHTML={{ __html: html }} tabIndex={-1} />
          </>
        )}
      </div>
    </div>
  );
};
