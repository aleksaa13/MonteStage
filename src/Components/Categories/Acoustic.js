import React from "react";
import styles from "../Styles/Acoustic.module.css";
import { useNavigate } from "react-router-dom";

const Acoustic = (props) => {
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
              <div className={styles.darkenBg}></div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Acoustic;
