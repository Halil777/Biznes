import { FC } from "react";
import styles from "./social.module.css";
import { useFetchByType } from "../../api/api";

const SocialLinks: FC = () => {
  const {
    data: socialLinks,
    isLoading,
    error,
  } = useFetchByType("social_media");

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data...</p>;

  return (
    <div className={styles.social_links_container}>
      {socialLinks.map((link: any) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={link.asset.url} alt="social links " />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
