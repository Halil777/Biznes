import React from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component"; // Import LazyLoadImage
import "react-lazy-load-image-component/src/effects/blur.css"; // Optional for blur effect
import styles from "../styles/home.module.css";
import { useFetchByType } from "../../../api/api";

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { data, error, isLoading } = useFetchByType("home_title");

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
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
            <h1 className={styles.title}>{items[titleKey]}</h1>
            <p
              className={styles.description}
              dangerouslySetInnerHTML={{
                __html: items[descriptionKey],
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
              <div className={styles.liquid_shape}></div>
            </div>
            <LazyLoadImage
              src={items.asset?.url || "default_image.jpg"}
              alt={t("homeImageAlt")}
              className={styles.image}
              effect="blur" // Optional: add a blur effect while loading
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      ))}
    </>
  );
};

export default Home;
