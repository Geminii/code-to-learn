import { readdirSync } from "fs";

export const getMarkdownPages = async <T>(directory: string): Promise<T[]> => {
  const directoryData = `${process.cwd()}/src/app/${directory}`;
  // Retrieve slugs from directory routes
  const slugs = readdirSync(directoryData, {
    withFileTypes: true,
  });

  // Retrieve metadata from MDX files
  const data = await Promise.all(
    slugs
      .filter((slug) => !slug.name.includes("."))
      .map(async ({ name, path }) => {
        const { metadata } = await import(
          `@/app/${directory}/${name}/page.mdx`
        );
        return { slug: name, ...metadata };
      })
  );

  // Sort data from newest to oldest
  data.sort(
    (data1, data2) =>
      +new Date(data2.publishedOn) - +new Date(data1.publishedOn)
  );

  return data;
};
