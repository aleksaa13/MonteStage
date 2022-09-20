import React from "react";
import styles from "../Styles/Acoustic.module.css";
import { useNavigate } from "react-router-dom";

const Vocal = (props) => {
  let navigate = useNavigate();
  return (
    <div className={styles.acoustic}>
      {props.groups.length === 0 ? (
        <h1>NEMAA</h1>
      ) : (
        props.groups.map((group) => {
          return (
            <div
              className={styles.cardWrap}
              style={{
                backgroundImage: `url(images/vocal_groups/${group.imageId}.jpg)`,
              }}
            >
              <strong
                onClick={() => {
                  navigate(`/vocal_groups/${group.imageId}`);
                }}
                className={styles.name}
              >
                {group.name}
              </strong>
              <div className={styles.darkenBg}></div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Vocal;
