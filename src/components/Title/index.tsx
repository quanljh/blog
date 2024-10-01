import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

const Title = () => {
  const { siteConfig } = useDocusaurusContext();
  const titleCharacters = siteConfig.title.split("");

  return (
    <div className={styles.container}>
      {titleCharacters.map((char, index) => (
        <div key={index} className={styles.animate} style={{ animationDelay: `${(index + 1) * 0.3}s` }}>
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
  );
};

export default Title;
