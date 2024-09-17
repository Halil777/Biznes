import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "../styles/portfolioCards.module.css";
import { useFetchByType } from "../../../api/api";
import PortfolioModal from "./PortfolioModal";

const PortfolioCards: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { data, error, isLoading } = useFetchByType("portfolia_item");
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading portfolio items</div>;

  const titleKey = `title_${i18n.language}`;
  const descriptionKey = `short_${i18n.language}`;

  const openModal = (item: any) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className={styles.portfolio_cards_container}>
      {data.length > 0 ? (
        data.map((portfolio: any) => (
          <div key={portfolio.id} className={styles.portfolio_card}>
            <img src={portfolio.asset.url} alt={portfolio[titleKey]} />
            <div className={styles.portfolio_text_container}>
              <h3 className={styles.portfolio_title}>{portfolio[titleKey]}</h3>
              <div className={styles.description_container}>
                <p className={styles.portfolio_description}>
                  {portfolio[descriptionKey].slice(0, 300)} ...
                </p>
              </div>
              <button
                className={styles.portfolio_more_button}
                onClick={() => openModal(portfolio)}
              >
                {t("portfolio.button_text")}
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>No portfolio items found</div>
      )}

      {selectedItem && (
        <PortfolioModal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedItem[titleKey]}
          description={selectedItem[descriptionKey]}
          imageUrl={selectedItem.asset.url}
        />
      )}
    </div>
  );
};

export default PortfolioCards;
