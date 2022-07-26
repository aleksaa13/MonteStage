import React from "react";
import styles from "../Styles/Acoustic.module.css";
import { useNavigate } from "react-router-dom";

const VIS = (props) => {
  let navigate = useNavigate();
  return (
    <div className={styles.acoustic}>
      {props.groups.length === 0 ? (
        <p>
          <i>Došlo je do greske pri učitavanju sastava iz ove kategorije</i>
        </p>
      ) : (
        props.groups.map((group) => {
          return (
            <div
              key={group.imageId}
              className={styles.cardWrap}
              style={{
                backgroundImage: `url(images/vis/${
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

export default VIS;
