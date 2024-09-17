import { useTranslation } from "react-i18next";
import styles from "../styles/footer.address.module.css";

const FooterAddress = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.footer_address_container}>
      <div className={styles.footer_address}>
        <img src="/images/location.png" alt="" />
        <p>{t("contact.addressC")}</p>
      </div>
      <div className={styles.footer_address}>
        <img src="/images/phone.png" alt="" />
        <p>+993 62 531104</p>
      </div>
    </div>
  );
};

export default FooterAddress;
