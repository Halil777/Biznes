import { useTranslation } from "react-i18next";
import styles from "../styles/about.header.module.css";

const AboutHeader = () => {
  const { t } = useTranslation();

  return <h1 className={styles.headerText}>{t("navbar.about")}</h1>;
};

export default AboutHeader;
