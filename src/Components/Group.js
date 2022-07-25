import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Styles/Group.module.css";
import ReactPlayer from "react-player";

const Group = (props) => {
  const params = useParams();

  //   console.log(props.groups.filter((group) => group.imageId == params.id));
  let group = props.groups.filter((group) => group.imageId === params.id);

  return (
    <div className={styles.groupWrapper}>
      <h3>{group[0].name}</h3>
      <div className={styles.imageContainer}>
        <img src={`/images/${group[0].type}/${group[0].imageId}.jpg`} />
      </div>
      <div>
        <span>Broj clanova : </span>
        <span>{group[0].people}</span>
      </div>
      {group[0].instruments ? (
        <div>
          <span>Instrumenti : </span>
          <span>
            {group[0].instruments.split(/[ ,]+/).map((instrument) => {
              return <span>{`${instrument} `}</span>;
            })}
          </span>
        </div>
      ) : null}
      <div className={styles.videos}>
        {group[0].videoLink1.split(/[ ,]+/).map((link) => {
          return (
            <div className={styles.videoContainer}>
              <ReactPlayer url={link} width="100%" height="100%" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Group;
