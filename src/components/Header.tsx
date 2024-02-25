import Link from "next/link";
import type { FunctionComponent } from "react";

type HeaderProps = {};

export const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <header className="z-[50] fixed top-0 w-full border-b backdrop-blur-sm bg-background border-black/[0.2] dark:border-white/[0.1]">
      <div className="container flex gap-8 h-16 items-center max-w-[88rem] mx-auto">
        <Link href="/">Code To Learn</Link>

        <nav className="flex items-center space-x-6 text-sm font-medium xl:flex">
          <Link href="/posts">Posts</Link>
          <Link href="/playgrounds">Playgrounds</Link>
          {/* <Link href="/contact">Contact</Link> */}
        </nav>
      </div>
    </header>
  );
};
