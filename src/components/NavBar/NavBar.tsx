import React from "react";
import styles from "./NavBar.module.scss";

import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FiZap } from "react-icons/fi";
import { AiOutlineEllipsis } from "react-icons/ai";

import { IoMdAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const styleForPaper = {
    width: "30px",
    height: "30px",
  };

  return (
    <div className={styles.headerSpotify}>
      <div className={styles.content}>
        <div className={styles.flexTest}>
          <div className={styles.logo}>
            <h2>
              поли<a>Пак</a>
            </h2>
          </div>

          <div className={styles.navItem}>
            <div className={styles.playNowBlock}>
              <div className={styles.userBlock}>
                <img
                  className={styles.imgAva}
                  src="https://us.123rf.com/450wm/anatolir/anatolir2011/anatolir201105528/anatolir201105528.jpg?ver=6"
                />
                <div>
                  <h4>User</h4>
                  <p>Admin</p>
                </div>
              </div>
            </div>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              <div className={styles.iconSearch}>
                <FiZap style={styleForPaper} />
                <p>Заказы</p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/addwork"
            >
              <div className={styles.iconSearch}>
                <IoMdAddCircleOutline style={styleForPaper} />
                <p>Создать Заказ</p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/nomenclatures"
            >
              <div className={styles.iconSearch}>
                <AiOutlineFundProjectionScreen style={styleForPaper} />
                <p>Номенклатура</p>
              </div>
            </Link>
          </div>

          <div className={styles.reckontly}>
            <span>FAVORITE PRODUCT</span>
            <AiOutlineEllipsis style={styleForPaper} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

// #1eba54
