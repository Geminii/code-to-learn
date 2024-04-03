import { BlogSummaryCard } from "@/components/BlogSummaryCard";
import { TITLE_BLOG } from "@/constants";
import { PostMetadata } from "@/types";
import { getMarkdownPages } from "@/utils/getMarkdownPage";
import type { Metadata } from "next";
import { FunctionComponent } from "react";

export type Post = {
  slug: string;
} & PostMetadata;

export const metadata: Metadata = {
  title: `${TITLE_BLOG} • Blog Posts`,
  description: "List of all blog posts.",
};

const BlogPostsPage: FunctionComponent = async () => {
  const blogPosts = await getMarkdownPages<Post>("posts");

  return (
    <div className="">
      <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">
        Latest content:
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {blogPosts.map(({ slug, title, description, publishedOn }) => (
          <BlogSummaryCard
            key={slug}
            href={`/posts/${slug}`}
            title={title}
            publishedOn={publishedOn}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPostsPage;
