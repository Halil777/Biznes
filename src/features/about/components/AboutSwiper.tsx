import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component"; // Import LazyLoadImage
import "react-lazy-load-image-component/src/effects/blur.css"; // Optional for blur effect
import { useFetchByType } from "../../../api/api";
import styles from "../styles/about.swiper.module.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const AboutSwiper: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { data, error, isLoading } = useFetchByType("about_title");

  if (isLoading) return <div>{t("loading")}</div>;
  if (error) return <div>{t("error")}</div>;

  return (
    <div className={styles.swiperContainer}>
      <Slider {...settings}>
        {data.map((item: any) => {
          const title =
            i18n.language === "en"
              ? item.title_en || "Default Title"
              : item[`title_${i18n.language}`] ||
                item.title_en ||
                "Default Title";

          return (
            <div key={item.id}>
              <div className={styles.slide}>
                <LazyLoadImage
                  src={item.asset?.url || "default_image.jpg"}
                  alt={title}
                  effect="blur" // Optional: blur effect while loading
                  className={styles.image}
                />
                <div className={styles.textContainer}>
                  <h3 className={styles.title}>{title}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default AboutSwiper;
