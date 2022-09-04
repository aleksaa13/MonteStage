import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "../Components/Styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import image from "../images/0.png";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  const navigate = useNavigate();

  const toggle = React.useCallback(() => setDropdown(!dropdown));

  return (
    <React.Fragment>
      <div
        className={dropdown ? styles.backdrop : styles.invisible}
        onClick={toggle}
      />
      <div className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.imgContainer}>
            <img src={image} alt="SBS" onClick={() => navigate("/")} />
          </div>
          <div
            className={dropdown ? styles.responsiveInvisible : styles.bars}
            onClick={toggle}
          >
            <FontAwesomeIcon icon={faBars} className="fa-2x" />
          </div>
        </div>

        <div className={dropdown ? styles.list : styles.invisible}>
          <nav>
            <ul>
              <li className={styles.link} onClick={toggle}>
                <NavLink
                  exact
                  to="/about"
                  activeStyle={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
                  <span>
                    <FontAwesomeIcon icon={faIdCard} className={styles.icon} />
                  </span>
                  O nama
                </NavLink>
              </li>

              <li className={styles.link} onClick={toggle}>
                <NavLink
                  exact
                  to="/form"
                  activeStyle={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
                  <span>
                    <FontAwesomeIcon
                      icon={faSquareCheck}
                      className={styles.icon}
                    />
                  </span>
                  Registracija
                </NavLink>
              </li>

              <li className={styles.link} onClick={toggle}>
                <NavLink
                  exact
                  to="/filter"
                  activeStyle={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
                  <span>
                    <FontAwesomeIcon icon={faFilter} className={styles.icon} />
                  </span>
                  Filteri
                </NavLink>
              </li>

              <li className={styles.link} onClick={toggle}>
                <NavLink
                  exact
                  to="/"
                  activeStyle={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
                  <span>
                    <FontAwesomeIcon icon={faHome} className={styles.icon} />
                  </span>
                  Početna
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
};

export default Header;
