"use client";
import { TITLE_BLOG } from "@/constants";
import Link from "next/link";

export const metadata = {
  title: `${TITLE_BLOG} • Blog Not Found`,
};

export default function NotFoundPage() {
  return (
    <div className="text-center pt-24">
      <h1 className="mb-4">404 Not Found</h1>
      <p>Could not find this blog post</p>
      <Link href="/posts">Return to blog list</Link>
    </div>
  );
}
