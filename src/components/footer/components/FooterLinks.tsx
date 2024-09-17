import { FC } from "react";
import styles from "../styles/footer.links.module.css";

const FooterLinks: FC = () => {
  return (
    <div className={styles.footer_links_container}>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </div>
  );
};

export default FooterLinks;
