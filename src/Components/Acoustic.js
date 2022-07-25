import React from "react";
import styles from "./Styles/Acoustic.module.css";
import { Link, Route, Routes } from "react-router-dom";
import Group from "./Group";
import { useNavigate } from "react-router-dom";

const Acoustic = (props) => {
  let navigate = useNavigate();

  return (
    <React.Fragment>
      <div className={styles.acoustic}>
        {props.groups.map((group) => {
          return (
            <div
              className={styles.cardWrap}
              style={{
                backgroundImage: `url(images/acoustic/${group.imageId}.jpg)`,
              }}
            >
              <strong
                onClick={() => {
                  navigate(`/acoustic/${group.imageId}`);
                }}
                className={styles.name}
              >
                {group.name}
              </strong>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Acoustic;
