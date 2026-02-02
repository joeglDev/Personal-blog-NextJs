"use client";

import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.css";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ThemeToggle = () => {
  const [isChecked, setIsChecked] = useState(true);

  const onClick = () => setIsChecked((prevState) => !prevState);

  useEffect(() => {
    if (isChecked) {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.setAttribute("data-theme", "light");
    }
  }, [isChecked]);

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
