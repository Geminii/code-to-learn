import { Code } from "bright";
import type { FunctionComponent } from "react";

type CodeSnippetProps = {};

export const CodeSnippet: FunctionComponent<CodeSnippetProps> = (props) => {
  console.log("CodeSnippet", props);
  return (
    <Code
      {...props}
      lineNumbers
      theme={{
        dark: "github-dark",
        light: "github-light",
      }}
      className=""
    />
  );
};
