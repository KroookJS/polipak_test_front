import React from "react";
import { INomenclatureProps } from "../../type/data";
import styles from "./Block.module.scss";

const BlockNom: React.FC<INomenclatureProps> = ({ id, code, name }) => {
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
