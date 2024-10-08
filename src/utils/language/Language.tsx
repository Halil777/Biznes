import { FC, useState, useEffect, useRef } from "react";
import tmFlag from "/images/tm.png";
import ruFlag from "/images/ru.png";
import enFlag from "/images/en.png";
import languageIcon from "/images/language.png";
import i18n from "./i18n";
import styles from "../../styles/language.module.css";

const Language: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    localStorage.getItem("language") || "en"
  );
  const menuRef = useRef<HTMLDivElement>(null);

  // Update the language on initial render based on localStorage
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(storedLanguage);
  }, []);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setSelectedLanguage(lang);
    localStorage.setItem("language", lang);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className={styles.languageWrapper} ref={menuRef}>
      <img
        src={languageIcon}
        alt="Select Language"
        className={styles.languageIcon}
        onClick={() => setMenuOpen(!menuOpen)}
      />
      {menuOpen && (
        <div className={styles.menu}>
          <div
            className={`${styles.menuItem} ${
              selectedLanguage === "tm" ? styles.active : ""
            }`}
            onClick={() => changeLanguage("tm")}
          >
            <img src={tmFlag} alt="Turkmen" className={styles.flagIcon} />
            Türkmen
          </div>
          <div
            className={`${styles.menuItem} ${
              selectedLanguage === "ru" ? styles.active : ""
            }`}
            onClick={() => changeLanguage("ru")}
          >
            <img src={ruFlag} alt="Russian" className={styles.flagIcon} />
            Русский
          </div>
          <div
            className={`${styles.menuItem} ${
              selectedLanguage === "en" ? styles.active : ""
            }`}
            onClick={() => changeLanguage("en")}
          >
            <img src={enFlag} alt="English" className={styles.flagIcon} />
            English
          </div>
        </div>
      )}
    </div>
  );
};

export default Language;
