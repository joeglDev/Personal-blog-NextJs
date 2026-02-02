"use client";

import { Switch } from "@/components/ui/switch";
import styles from "./ThemeToggle.module.css";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const isChecked = theme !== "light";
  const onClick = () => (isChecked ? setTheme("light") : setTheme("dark"));

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

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
