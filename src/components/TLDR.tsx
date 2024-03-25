"use client";
import { type FunctionComponent, type PropsWithChildren } from "react";

type TLDRProps = PropsWithChildren<{}>;

export const TLDR: FunctionComponent<TLDRProps> = ({ children }) => {
  const handleMouseEnter = () => {
    document.querySelector(".main-container")?.classList.remove("out-blurred");
    document.querySelector(".main-container")?.classList.add("blurred");
  };

  const handleMouseLeave = () => {
    document.querySelector(".main-container")?.classList.remove("blurred");
    document.querySelector(".main-container")?.classList.add("out-blurred");
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col bg-[#24292e] rounded-lg p-4 my-6 tldr"
    >
      <div className="absolute flex flex-col top-1/2 -translate-y-1/2 -left-8 font-bold text-2xl text-center text-secondary">
        <p className="">T</p>
        <p className="">L</p>
        <p className="">;</p>
        <p className="">D</p>
        <p className="">R</p>
        <p className="">;</p>
      </div>

      {children}
    </div>
  );
};
