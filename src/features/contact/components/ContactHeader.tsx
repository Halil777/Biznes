import { useTranslation } from "react-i18next";
import styles from "../styles/contact.header.module.css";

const ContactHeader: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.contact_header_container}>
      <h1 className={styles.headerText}>{t("contact.contact")}</h1>
      <p className={styles.subtitle}>{t("contact.subtitle")}</p>
    </div>
  );
};

export default ContactHeader;
