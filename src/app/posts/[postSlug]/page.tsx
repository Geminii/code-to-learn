import { TITLE_BLOG } from "@/constants";
import { readFile } from "@/helpers/file";
import { PostMetadata } from "@/types";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

import { notFound } from "next/navigation";
import { FunctionComponent, cache } from "react";

type BlogPost = {
  data: PostMetadata;
  content: string;
};

type BlogPostPageProps = {
  params: {
    postSlug: string;
  };
};

const getBlogPost = cache(async (slug: string) => {
  try {
    const rawContent = await readFile(`/content/posts/${slug}.mdx`);

    const { data, content } = matter(rawContent);
    const blogPost = {
      data,
      content,
    };

    return blogPost as BlogPost;
  } catch (error) {
    console.error(error);
    return null;
  }
});

export async function generateMetadata({
  params: { postSlug },
}: BlogPostPageProps) {
  const blogPost = await getBlogPost(postSlug);

  if (!blogPost) return null;

  const { data } = blogPost;
  return {
    title: `${TITLE_BLOG} • ${data.title}`,
    description: data.description,
  };
}

const BlogPostPage: FunctionComponent<BlogPostPageProps> = async ({
  params: { postSlug },
}) => {
  const blogPost = await getBlogPost(postSlug);

  if (!blogPost) return notFound();

  const { data, content } = blogPost;

  return (
    <article className="">
      {/* BLOG BANNER COMPONENT */}
      <div className="mb-6">
        <h1>{data.title}</h1>
        <time dateTime={data.publishedOn}>{data.publishedOn}</time>

        <hr />
      </div>

      <MDXRemote source={content} />
    </article>
  );
};

export default BlogPostPage;
