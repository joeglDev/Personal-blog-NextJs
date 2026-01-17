import { ReactNode } from "react";
import styles from "./Heading.module.css";

interface HeadingProps {
  children: ReactNode;
  variant: "1" | "2" | "3";
}

export const Heading = ({ variant, children }: HeadingProps) =>
  variant === "1" ? (
    <h1 className={styles.h1}>{children}</h1>
  ) : variant === "2" ? (
    <h2 className={styles.h2}>{children}</h2>
  ) : (
    <h3 className={styles.h3}>{children}</h3>
  );
