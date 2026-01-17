import { Button } from "@/components/ui/button";
import { Dispatch, FC, SetStateAction } from "react";
import styles from "./header.module.css";

export const Header: FC<{ setIsOpen: Dispatch<SetStateAction<boolean>> }> = ({
  setIsOpen,
}) => (
  <header className={styles.header}>
    <Button
      className={styles.button}
      aria-label="Click to open navigation drawer."
      onClick={() => setIsOpen((prevState) => !prevState)}
      tabIndex={0}
      size="lg"
    >
      ≣
    </Button>
  </header>
);
