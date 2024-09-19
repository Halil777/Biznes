import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { useFetchByType } from "../../../api/api";
import styles from "../styles/about.swiper.module.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 4, // Default number of slides
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200, // LG screens
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 992, // MD screens
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768, // SM screens
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576, // XS screens
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
        {data.map((item) => {
          const title =
            i18n.language === "en"
              ? item.title_en || "Default Title"
              : item[`title_${i18n.language}`] ||
                item.title_en ||
                "Default Title";

          return (
            <div key={item.id}>
              <div className={styles.slide}>
                <img
                  src={item.asset?.url || "default_image.jpg"}
                  alt={title}
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
