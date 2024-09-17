import React from "react";
import styles from "../styles/service.cards.module.css";
import ServiceItems from "./ServiceItems";
import ServiceSlides from "./ServiceSlides";
import { useFetchByType } from "../../../api/api";

const ServiceCards: React.FC = () => {
  // Fetch slides and items
  const {
    data: slides,
    error: slidesError,
    isLoading: slidesLoading,
  } = useFetchByType("service_slide");

  const {
    data: items,
    error: itemsError,
    isLoading: itemsLoading,
  } = useFetchByType("service_item");

  if (slidesLoading || itemsLoading) return <div>Loading...</div>;
  if (slidesError || itemsError) return <div>Error loading data</div>;

  return (
    <>
      {slides?.map((slide: any) => {
        const filteredItems = items?.filter(
          (item: any) => item.parentId === slide.id
        );

        return (
          <div key={slide.id} className={styles.service_cards_container}>
            {/* Pass a hasItems prop to indicate if there are related items */}
            <ServiceSlides slide={slide} hasItems={!!filteredItems?.length} />

            {/* Only render ServiceItems if there are related items */}
            {filteredItems && filteredItems.length > 0 ? (
              <ServiceItems items={filteredItems} />
            ) : (
              <p></p>
            )}
          </div>
        );
      })}
    </>
  );
};

export default ServiceCards;
