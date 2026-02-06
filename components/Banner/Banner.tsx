import { ReactNode } from "react";
import styles from "./Banner.module.css";

interface BannerProps {
  children: ReactNode;
  type: "Warning" | "Error";
}

export const Banner = ({ children, type }: BannerProps) => (
  <div
    className={type === "Warning" ? styles.bannerWarning : styles.bannerError}
    role="alert"
  >
    {children}
  </div>
);
