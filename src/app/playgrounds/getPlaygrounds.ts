import { readdirSync } from "fs";

type Playground = {
  slug: string;
  title: string;
  publishDate: string;
};

export const getPlaygrounds = async (): Promise<Playground[]> => {
  const directoryPlaygrounds = `${process.cwd()}/src/app/(playgrounds)`;
  // Retrieve slugs from post routes
  const slugs = readdirSync(directoryPlaygrounds, {
    withFileTypes: true,
  });

  // Retrieve metadata from MDX files
  const playgrounds = await Promise.all(
    slugs.map(async ({ name, path }) => {
      const { metadata } = await import(`../(playgrounds)/${name}/page.mdx`);
      return { slug: name, ...metadata };
    })
  );

  // Sort playgrounds from newest to oldest
  playgrounds.sort(
    (post1, post2) =>
      +new Date(post2.publishDate) - +new Date(post1.publishDate)
  );

  return playgrounds;
};
