import type { FunctionComponent } from "react";

import Link from "next/link";
import { getPosts } from "./getPosts";

type pageProps = {};

export const PostsPage: FunctionComponent<pageProps> = async () => {
  const posts = await getPosts();

  return (
    <ol>
      {posts.map(({ slug, title, publishDate }) => (
        <li key={slug}>
          <h2>
            <Link href={`/${slug}`}>{title}</Link>
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
