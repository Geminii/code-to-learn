"use client";

import { useState, type FunctionComponent } from "react";
import { Check, Clipboard } from "react-feather";
import { Button } from "./ui/Button";

type CopyClipboardProps = {
  className?: string;
  text: string;
};

export const CopyClipboard: FunctionComponent<CopyClipboardProps> = ({
  className,
  text,
}) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    if (!setCopied) return;

    navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className={className}>
      <Button variant="outline" size="icon" onClick={handleClick}>
        {!copied && <Clipboard className="w-4 h-4" />}
        {copied && <Check className="w-4 h-4 text-primary" />}
      </Button>
    </div>
  );
};
