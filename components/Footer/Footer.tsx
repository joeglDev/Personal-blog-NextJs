import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import styles from "./Footer.module.css";

export const Footer = () => (
  <footer className={styles.footerContainer}>
    <a
      href="https://www.linkedin.com/in/joegilbertdev/"
      target="_blank"
      className={styles.iconContainer}
    >
      <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
      <p>LinkedIn</p>
    </a>

    <a
      href="mailto:joegilbertdev@outlook.com"
      target="_blank"
      className={styles.iconContainer}
    >
      <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
      <p>Email</p>
    </a>

    <a
      href="https://github.com/joeglDev"
      target="_blank"
      className={styles.iconContainer}
    >
      <FontAwesomeIcon className={styles.icon} icon={faGithub} />
      <p>Github</p>
    </a>

    <a
      href="https://joe-gilbert-developer.xyz"
      target="_blank"
      className={styles.iconContainer}
    >
      <FontAwesomeIcon className={styles.icon} icon={faFile} />
      <p>My cv</p>
    </a>

    <a
      className={`${styles.progress} ${styles.flag} ${styles.iconContainer}`}
      href="https://goodlawproject.org/resource/support-resources-for-trans/"
      target="_blank"
      aria-label="Progress Pride Flag. The traditional gay pride flag with 6 bars: red, orange, yellow, green, blue, and indigo. On the left side, it has triangles of color: white, pink, light blue, brown, and black. The brown stripe represents people of colour, black represents people sadly lost through the HIV / AIDs crisis or are suffering with HIV / AIDs today and the white, blue and pink represents the transgender community."
    ></a>
  </footer>
);
