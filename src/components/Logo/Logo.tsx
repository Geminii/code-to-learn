import type { FunctionComponent } from "react";

import { Brain } from "lucide-react";
import Link from "next/link";

import styles from "./Logo.module.css";

type LogoProps = {};

export const Logo: FunctionComponent<LogoProps> = () => {
  return (
    <Link href="/" className={styles.button}>
      <Brain className="h-6 w-6" />
      <span className="font-bold">Code To Learn</span>
    </Link>
  );
};
