import React from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"; // Import Framer Motion
import styles from "../styles/home.module.css";
import { useFetchByType } from "../../../api/api";

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { data, error, isLoading } = useFetchByType("home_title");

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  if (isLoading) return <div>{t("loading")}</div>;
  if (error) return <div>{t("error")}</div>;

  const titleKey = `title_${i18n.language}`;
  const descriptionKey = `description_${i18n.language}`;

  return (
    <>
      {data.map((items: any) => (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.home}
          id="home"
          key={`home_items_${items.id}`}
        >
          <div className={styles.content}>
            <h1 className={styles.title}>{(items as any)[titleKey]}</h1>
            <p
              className={styles.description}
              dangerouslySetInnerHTML={{
                __html: (items as any)[descriptionKey],
              }}
            />
            <a href="#contact">
              <button className={styles.contactButton}>
                {t("navbar.contact")}
              </button>
            </a>
          </div>

          <motion.div
            className={styles.imageContainer}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className={styles.shape_image}>
              <img src="/shapes/shape1.png" alt="" loading="lazy" />
            </div>
            <img
              src={items.asset?.url || "default_image.jpg"}
              alt={t("homeImageAlt")}
              className={styles.image}
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      ))}
    </>
  );
};

export default Home;
