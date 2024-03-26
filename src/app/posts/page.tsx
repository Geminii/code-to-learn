import type { PostMetadata } from "@/types";
import type { Metadata } from "next";
import type { FunctionComponent } from "react";

import { BlogSummaryCard } from "@/components/BlogSummaryCard";
import { TITLE_BLOG } from "@/constants";
import { readDir, readFile } from "@/helpers/file";
import matter from "gray-matter";
import { cache } from "react";

export type Post = {
  slug: string;
} & PostMetadata;

export const metadata: Metadata = {
  title: `${TITLE_BLOG} • Blog Posts`,
  description: "List of all blog posts.",
};

const getBlogPostList = cache(async () => {
  const blogPosts: Post[] = [];
  const filenames = await readDir("/content/posts");

  for (const filename of filenames) {
    const rawContent = await readFile(`/content/posts/${filename}`);
    const { data } = matter(rawContent);
    const blogPostsMetadata = data as PostMetadata;

    blogPosts.push({
      slug: filename.replace(/\.mdx$/, ""),
      ...blogPostsMetadata,
    });
  }

  return blogPosts.sort((blogPost1, blogPost2) =>
    blogPost1.publishedOn < blogPost2.publishedOn ? 1 : -1
  );
});

const BlogPostsPage: FunctionComponent = async () => {
  const blogPosts = await getBlogPostList();

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
