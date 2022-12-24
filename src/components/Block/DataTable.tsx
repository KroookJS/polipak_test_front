import React from "react";
import { Link } from "react-router-dom";
import { IWorkordersProps } from "../../type/data";
import styles from "./Block.module.scss";
import { TbEdit } from "react-icons/tb";

const Block: React.FC<IWorkordersProps> = ({
  id,
  number,
  is_finished,
  start_date,
  product,
}) => {
  const styleForPaper = {
    width: "30px",
    height: "30px",
  };
  return (
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to={`/product/${id}`}
    >
      <div className={styles.block}>
        <div className={styles.parent}>
          <div className={styles.div1}>
            <h4>{number}</h4>
          </div>
          <div className={styles.div2}>
            {is_finished ? <h4 className={styles.green}>Завершен</h4> : <h4 className={styles.red}>Не готов</h4>}
          </div>
          <div className={styles.div3}>
            <h4>{start_date === null ? " - " : start_date}</h4>
          </div>
          <div className={styles.div4}>
            <h4>{product?.name}</h4>
          </div>
          <div className={styles.div5}>
            <Link
              style={{ textDecoration: "none", color: "gray" }}
              to={`/fullwork/${id}`}
            >
              <button className={styles.btn}>
                <TbEdit style={styleForPaper} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Block;
