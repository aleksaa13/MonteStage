import React from "react";
import styles from "../Styles/Acoustic.module.css";
import { useNavigate } from "react-router-dom";

const Instrumental = (props) => {
  let navigate = useNavigate();
  return (
    <div className={styles.acoustic}>
      {props.groups.length === 0 ? (
        <p>
          <i>Još uvijek nema registrovanih sastava iz ove katerogije</i>
        </p>
      ) : (
        props.groups.map((group) => {
          return (
            <div
              key={group.imageId}
              className={styles.cardWrap}
              style={{
                backgroundImage: `url(images/instrumental/${group.imageId}.jpg)`,
              }}
            >
              <strong
                onClick={() => {
                  navigate(`/instrumental/${group.imageId}`);
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

export default Instrumental;
