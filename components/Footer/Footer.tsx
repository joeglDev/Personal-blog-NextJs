import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faFile} from "@fortawesome/free-solid-svg-icons";
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
  </footer>
);
