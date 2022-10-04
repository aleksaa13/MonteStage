import React from "react";
import styles from "../Styles/Acoustic.module.css";
import { useNavigate } from "react-router-dom";

const Dj = (props) => {
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
                backgroundImage: `url(images/dj/${
                  group.imageId_naslovna
                    ? group.imageId_naslovna
                    : group.imageId
                }.jpg)`,
              }}
            >
              <strong
                onClick={() => {
                  navigate(`/dj/${group.imageId}`);
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

export default Dj;
