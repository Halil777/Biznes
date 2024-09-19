import React from "react";
import styles from "../styles/service.slides.module.css";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component"; // Import LazyLoadImage
import "react-lazy-load-image-component/src/effects/blur.css"; // Optional for blur effect

interface Slide {
  id: number;
  title_en: string;
  title_tm: string;
  title_ru: string;
  description_en: string;
  description_tm: string;
  description_ru: string;
  asset: {
    url: string;
  };
}

interface ServiceSlidesProps {
  slide: Slide;
  hasItems: boolean;
}

const ServiceSlides: React.FC<ServiceSlidesProps> = ({ slide, hasItems }) => {
  const { i18n } = useTranslation();

  const titleKey = `title_${i18n.language}`;
  const descriptionKey = `description_${i18n.language}`;

  return (
    <>
      {hasItems ? (
        <div className={styles.service_slides_container}>
          <LazyLoadImage
            src={slide.asset.url}
            alt={(slide as any)[titleKey]}
            effect="blur" // Optional: blur effect while loading
            className={styles.image} // Add any specific styling if needed
          />
          <h1 className={styles.slide_title}>{(slide as any)[titleKey]}</h1>

          <p
            className={styles.slide_description}
            dangerouslySetInnerHTML={{
              __html: (slide as any)[descriptionKey],
            }}
          />
        </div>
      ) : (
        <div className={styles.service_slides_container_noItems}>
          <LazyLoadImage
            src={slide.asset.url}
            alt={(slide as any)[titleKey]}
            effect="blur" // Optional: blur effect while loading
            className={styles.image} // Add any specific styling if needed
          />
          <div className={styles.noItemsTexts}>
            <h1 className={styles.slide_title}>{(slide as any)[titleKey]}</h1>

            <p
              className={styles.slide_description}
              dangerouslySetInnerHTML={{
                __html: (slide as any)[descriptionKey],
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceSlides;
