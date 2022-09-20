import React from "react";
import styles from "./Styles/Footer.module.css";
import image from "../images/0.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.imgContainer}>
        <img src={image} alt="MonteStage" />
      </div>
    </div>
  );
};

export default Footer;
