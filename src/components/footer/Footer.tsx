import SocialLinks from "../social/SocialLinks";
import Copyright from "./components/Copyright";
import FooterAddress from "./components/FooterAddress";
import FooterLinks from "./components/FooterLinks";
import FooterLogo from "./components/FooterLogo";
import styles from "./styles/footer.module.css";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer_container}>
      <FooterLogo />
      <FooterLinks />
      <SocialLinks />
      <FooterAddress />
      <Copyright />
    </div>
  );
};

export default Footer;
