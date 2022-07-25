import React from "react";
import styles from "./Styles/Acoustic.module.css";
import { useNavigate } from "react-router-dom";

const Band = (props) => {
  let navigate = useNavigate();
  return (
    <div className={styles.acoustic}>
      {props.groups.map((group) => {
        return (
          <div
            className={styles.cardWrap}
            style={{ backgroundImage: `url(images/band/${group.imageId}.jpg)` }}
          >
            <strong
              onClick={() => {
                navigate(`/band/${group.imageId}`);
              }}
              className={styles.name}
            >
              {group.name}
            </strong>
          </div>
        );
      })}
    </div>
  );
};

export default Band;
