import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "../Components/Styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faSignal } from "@fortawesome/free-solid-svg-icons";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
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
                  to="/form"
                  activeStyle={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
                  <span>
                    <FontAwesomeIcon icon={faSignal} className={styles.icon} />
                  </span>
                  Registracija
                </NavLink>
              </li>

              <li className={styles.link} onClick={toggle}>
                <NavLink
                  exact
                  to="/events"
                  activeStyle={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
                  <span>
                    <FontAwesomeIcon
                      icon={faCalculator}
                      className={styles.icon}
                    />
                  </span>
                  Događaji
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
                    <FontAwesomeIcon icon={faFile} className={styles.icon} />
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
