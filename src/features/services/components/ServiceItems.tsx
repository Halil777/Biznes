import React, { useState } from "react";
import styles from "../styles/service.items.module.css";
import { useTranslation } from "react-i18next";

interface Item {
  id: number;
  title_en: string;
  title_tm: string;
  title_ru: string;
  short_en: string;
  short_tm: string;
  short_ru: string;
  asset: {
    url: string;
  };
}

interface ServiceItemsProps {
  items: Item[];
}

const ServiceItems: React.FC<ServiceItemsProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const { i18n } = useTranslation();

  const titleKey = `title_${i18n.language}`;
  const descriptionKey = `short_${i18n.language}`;

  return (
    <div className={styles.service_items}>
      {items.map((item) => (
        <div
          key={item.id}
          className={styles.service_items_container}
          onClick={() =>
            setSelectedItem(selectedItem === item.id ? null : item.id)
          }
        >
          <div className={styles.item_header}>
            <div className={styles.item_picture_title}>
              <img src={item.asset.url} alt={(item as any)[titleKey]} />
              <h3 className={styles.item_title}>{(item as any)[titleKey]}</h3>
            </div>
            <button
              className={styles.show_hide_description}
              onClick={() =>
                setSelectedItem(selectedItem === item.id ? null : item.id)
              }
            >
              {selectedItem === item.id ? "-" : "+"}
            </button>
          </div>
          {selectedItem === item.id && (
            <div className={styles.item_description_container}>
              <hr />
              <p
                dangerouslySetInnerHTML={{
                  __html: (item as any)[descriptionKey],
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ServiceItems;
