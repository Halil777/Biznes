import { useTranslation } from "react-i18next";
import styles from "../styles/header.module.css";

const ServiceHeader: React.FC = () => {
  const { t } = useTranslation();
  return <h1 className={styles.header_style}>{t("navbar.services")}</h1>;
};

export default ServiceHeader;
