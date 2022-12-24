import React from "react";
import { IProductsProps } from "../../type/data";
import styles from "./Block.module.scss";

const ProductBlock: React.FC<IProductsProps> = ({
  id,
  serial,
  weight,
  date,
}) => {
  return (
    <div className={styles.product}>
      <div className={styles.containerProduct}>
        <div className={styles.dF}>
          <h4 className={styles.item}>
            ID Продукта: <a className={styles.green}> {id}</a>
          </h4>
          <h4 className={styles.item}>Серийный номер: {serial}</h4>
        </div>

        <div className={styles.weight}>
          <h4 className={styles.item}>
            Масса КГ : <a> {weight}</a>
          </h4>
        </div>

        <div className={styles.dataBlock}>
          <h4 className={styles.item}>
            Дата производства: {new Date(date).toLocaleDateString()}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProductBlock;
