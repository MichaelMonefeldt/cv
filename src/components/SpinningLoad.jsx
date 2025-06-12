// SpinningShape.jsx
import React from "react";
import styles from "../styles/SpinningLoad.module.css";

const SpinningLoad = ({color, size}) => {
  return <div style={{backgroundColor: color, height: size, width: size}} className={styles.spinningShape} />;
};

export default SpinningLoad;