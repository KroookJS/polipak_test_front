import React from "react";
import { IProduct } from "../../type/data";
import styles from "./Block.module.scss";

const BlockNom: React.FC<IProduct> = ({ id, code, name }) => {
  return (
    <div className={styles.block}>
      <div className={styles.container}>
        <h4 className={styles.category}>{code}</h4>
        <h4 className={styles.category}>{name}</h4>
      </div>
    </div>
  );
};

export default BlockNom;
