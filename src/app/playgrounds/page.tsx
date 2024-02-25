import type { FunctionComponent } from "react";

import Link from "next/link";
import { getPlaygrounds } from "./getPlaygrounds";

type pageProps = {};

export const PlaygroundsPage: FunctionComponent<pageProps> = async () => {
  const playgrounds = await getPlaygrounds();

  return (
    <ol>
      {playgrounds.map(({ slug, title, publishDate }) => (
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

export default PlaygroundsPage;
