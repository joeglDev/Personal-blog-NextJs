'use client'

import { Switch } from "@/components/ui/switch"
import {useEffect, useState} from "react";
import styles from './ThemeToggle.module.css';

export const ThemeToggle = () => {
    const [isChecked, setIsChecked] = useState(true);

    useEffect(() => {
        console.log(isChecked)
        if (isChecked) {
            document.body.setAttribute("data-theme", "dark")
        } else {
            document.body.setAttribute("data-theme", "light")
        }
    }, [isChecked]);

    return (
        <div className={styles.themeContainer}>
            <label htmlFor="light-dark-mode-toggle">Light / dark mode toggle</label>
            <Switch id="light-dark-mode-toggle" checked={isChecked} onClick={() => setIsChecked((prevState) => !prevState)} />
        </div>
    )
};