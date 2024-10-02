import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const Header = () => {
  const { siteConfig } = useDocusaurusContext();
  const titleCharacters = siteConfig.title.split("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.headerContainer}>
          {titleCharacters.map((char, index) => (
            <div
              key={index}
              className={isLoaded ? styles.animate : styles.animateInitial}
              style={{ animationDelay: `${(index + 1) * 0.3}s` }}
            >
              <svg className={styles.svg}>
                <use href={`#Stroke-${char}`} className={styles.use} />
                <text id={`Stroke-${char}`} className={styles.text}>
                  {char}
                </text>
              </svg>
              <div className={styles.hidden}>{char}</div>
            </div>
          ))}
        </div>
        <p className={styles.subTitle}>{siteConfig.tagline}</p>
      </div>
    </header>
  );
};

export default Header;
