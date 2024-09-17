import styles from "../styles/footer.logo.module.css";

const FooterLogo = () => {
  return (
    <div className={styles.footer_logo_container}>
      <img src="/images/logo.png" alt="footer  logo" />
    </div>
  );
};

export default FooterLogo;
