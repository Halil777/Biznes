import { useTranslation } from "react-i18next";
import styles from "../styles/portfolioHeader.module.css";

const PortfolioHeader: React.FC = () => {
  const { t } = useTranslation();

  return <h1 className={styles.headerText}>{t("navbar.portfolio")}</h1>;
};

export default PortfolioHeader;
