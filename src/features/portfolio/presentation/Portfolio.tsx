import PortfolioCards from "../components/PortfolioCards";
import PortfolioHeader from "../components/PortfolioHeader";
import styles from "../styles/portfolio.module.css";

const Portfolio: React.FC = () => {
  return (
    <div className={styles.portfolio_container} id="portfolio">
      <PortfolioHeader />
      <PortfolioCards />
    </div>
  );
};

export default Portfolio;
