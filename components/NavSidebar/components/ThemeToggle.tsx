"use client";

import { Switch } from "@/components/ui/switch";
import styles from "./ThemeToggle.module.css";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isChecked = theme !== "light";
  const onClick = () => (isChecked ? setTheme("light") : setTheme("dark"));

  return (
    <div className={styles.flexColumn}>
      <div className={styles.themeContainer}>
        <label className={styles.label} htmlFor="light-dark-mode-toggle">
          <span>{`${isChecked ? "Dark" : "Light"} theme `}</span>
          <FontAwesomeIcon icon={isChecked ? faMoon : faSun} />
        </label>
        <Switch
          aria-label="Set light / dark theme"
          id="light-dark-mode-toggle"
          checked={isChecked}
          onClick={onClick}
        />
      </div>
      {!isChecked && <p>⚠️: Please note that light mode is experimental</p>}
    </div>
  );
};
