import React from "react";
import styles from "../styles/copyright.module.css";

const Copyright: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <p className={styles.copyright_text}>
        © {currentYear} All Rights Reserved, Inc.
      </p>
    </div>
  );
};

export default Copyright;
