import { readdirSync } from "fs";

type Post = {
  slug: string;
  title: string;
  publishDate: string;
};

export const getPosts = async (): Promise<Post[]> => {
  const directoryPosts = `${process.cwd()}/src/app/(posts)`;
  // Retrieve slugs from post routes
  const slugs = readdirSync(directoryPosts, {
    withFileTypes: true,
  });

  // Retrieve metadata from MDX files
  const posts = await Promise.all(
    slugs.map(async ({ name, path }) => {
      const { metadata } = await import(`../(posts)/${name}/page.mdx`);
      return { slug: name, ...metadata };
    })
  );

  // Sort posts from newest to oldest
  posts.sort(
    (post1, post2) =>
      +new Date(post2.publishDate) - +new Date(post1.publishDate)
  );

  return posts;
};
