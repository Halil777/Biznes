import { FC } from "react";
import styles from "../styles/about.module.css";
import AboutHeader from "../components/AboutHeader";
import AboutSwiper from "../components/AboutSwiper";

const About: FC = () => {
  return (
    <div id="about" className={styles.about_container}>
      <AboutHeader />
      <AboutSwiper />
    </div>
  );
};

export default About;
