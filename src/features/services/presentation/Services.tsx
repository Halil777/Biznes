import ServiceCards from "../components/ServiceCards";
import ServiceHeader from "../components/ServiceHeader";
import styles from "../styles/service.module.css";

const Services: React.FC = () => {
  return (
    <div className={styles.service_container} id="services">
      <ServiceHeader />
      <ServiceCards />
    </div>
  );
};

export default Services;
