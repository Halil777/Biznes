import { FC } from "react";
import styles from "./loading.module.css";

const Loading: FC = () => {
  return (
    <div className={styles.loading_container}>
      <img src="/images/loading.png" alt="loading picture" />
    </div>
  );
};

export default Loading;
