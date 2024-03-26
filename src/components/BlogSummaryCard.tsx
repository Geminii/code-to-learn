import type { FunctionComponent, PropsWithChildren } from "react";

import { PostMetadata } from "@/types";
import { format } from "date-fns";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type BlogSummaryCardProps = PropsWithChildren<{
  href: string;
}> &
  PostMetadata;

export const BlogSummaryCard: FunctionComponent<BlogSummaryCardProps> = ({
  href,
  title,
  description,
  publishedOn,
}) => {
  const humanizedDate = format(new Date(publishedOn), "MMMM do, yyyy");

  return (
    <article className="border-2 border-black/[0.2] dark:border-white/[0.1] hover:border-black/[0.1] hover:dark:border-white/[0.3] transition duration-500 ease-in-out rounded-lg p-4 relative">
      <time dateTime={publishedOn} className="text-sm font-light">
        {humanizedDate}
      </time>
      <Link href={href}>
        <h2 className="dark:text-white text-black text-xl font-bold mt-0">
          {title}
        </h2>
      </Link>

      <p className="line-clamp-3 text-base mt-4 min-h-[72px]">{description}</p>

      <Link
        href={href}
        className="flex gap-1 items-center bg-slate-700 justify-center text-white rounded-md p-2"
      >
        <span className="text-sm">Read more</span>
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
};
