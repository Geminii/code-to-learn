import type { FunctionComponent } from "react";

import { getMarkdownPages } from "@/utils/getMarkdownPage";
import Link from "next/link";

type pageProps = {};

type Post = {
  slug: string;
  title: string;
  publishDate: string;
};

export const PostsPage: FunctionComponent<pageProps> = async () => {
  const posts = await getMarkdownPages<Post>("posts");

  return (
    <ol>
      {posts.map(({ slug, title, publishDate }) => (
        <li key={slug}>
          <h2>
            <Link href={`/posts/${slug}`}>{title}</Link>
          </h2>
          <p>
            <strong>Published:</strong>{" "}
            {new Date(publishDate).toLocaleDateString()}{" "}
          </p>
        </li>
      ))}
    </ol>
  );
};

export default PostsPage;
