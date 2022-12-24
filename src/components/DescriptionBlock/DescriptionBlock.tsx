import styles from "./DescriptionBlock.module.scss";

const DescriptionBlock = () => {
  return (
    <div className={styles.wrraper}>
      <div className={styles.parent}>
        <div className={styles.div1}>
          <h4>Номер</h4>
        </div>
        <div className={styles.div2}>
          <h4>Статус</h4>
        </div>
        <div className={styles.div3}>
          <h4>Дата Производства</h4>
        </div>
        <div className={styles.div4}>
          <h4>Продукт</h4>
        </div>
        <div className={styles.div5}>
          <h4>Редактировать</h4>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBlock;
