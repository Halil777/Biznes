import { FC, useState } from "react";
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

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setSelectedLanguage(lang);
    localStorage.setItem("language", lang);
    setMenuOpen(false); // Close menu after selecting language
  };

  return (
    <div className={styles.languageWrapper}>
      <img
        src={languageIcon}
        alt="Select Language"
        className={styles.languageIcon}
        onClick={() => setMenuOpen(!menuOpen)}
      />
      {menuOpen && (
        <div className={styles.menu}>
          <div className={styles.menuItem} onClick={() => changeLanguage("tm")}>
            <img src={tmFlag} alt="Turkmen" className={styles.flagIcon} />{" "}
            Türkmen
          </div>
          <div className={styles.menuItem} onClick={() => changeLanguage("ru")}>
            <img src={ruFlag} alt="Russian" className={styles.flagIcon} />{" "}
            Русский
          </div>
          <div className={styles.menuItem} onClick={() => changeLanguage("en")}>
            <img src={enFlag} alt="English" className={styles.flagIcon} />{" "}
            English
          </div>
        </div>
      )}
    </div>
  );
};

export default Language;
