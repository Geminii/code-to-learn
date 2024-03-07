import type { FunctionComponent } from "react";

import { getMarkdownPages } from "@/utils/getMarkdownPage";
import Link from "next/link";

type pageProps = {};

type Playground = {
  slug: string;
  title: string;
  publishDate: string;
};

const PlaygroundsPage: FunctionComponent<pageProps> = async () => {
  const playgrounds = await getMarkdownPages<Playground>("playgrounds");

  return (
    <ol>
      {playgrounds.map(({ slug, title, publishDate }) => (
        <li key={slug} className="mb-6">
          <h2>
            <Link href={`/playgrounds/${slug}`}>{title}</Link>
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

export default PlaygroundsPage;
