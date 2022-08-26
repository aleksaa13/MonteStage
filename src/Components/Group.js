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
      <h3 className={styles.name}>{group[0].name}</h3>
      <div className={styles.pushImg}>
        <div className={styles.imageContainer}>
          <img src={`/images/${group[0].type}/${group[0].imageId}.jpg`} />
        </div>
        <div className={styles.pushImgOther}>
          <div className={styles.wrapper}>
            <div className={styles.wrapperText}>Osnovne informacije</div>

            <div className={styles.markWrapper}>
              <span className={styles.mark}>Broj clanova : </span>
              <span className={styles.value}>{group[0].people}</span>
            </div>
            {group[0].instruments ? (
              <div className={styles.markWrapper}>
                <span className={styles.mark}>Instrumenti : </span>
                <span className={styles.value}>
                  {group[0].instruments.map((instrument) => {
                    return <span>{`${instrument}   `}</span>;
                  })}
                </span>
              </div>
            ) : null}
            <div className={styles.markWrapper}>
              <span className={styles.mark}>Grad : </span>
              <span className={styles.value}>{group[0].grad}</span>
            </div>
          </div>

          <div className={styles.wrapper}>
            <span className={styles.wrapperText}>Kontakt info</span>
            <div className={styles.markWrapper}>
              <span className={styles.mark}>Email : </span>
              <span className={styles.value}>{group[0].email}</span>
            </div>
            <div className={styles.markWrapper}>
              <span className={styles.mark}>Telefon : </span>
              <span className={styles.value}>{group[0].mobile}</span>
            </div>
            <div className={styles.socialMedia}>
              <a href={`${group[0].ig_link}`} target="blank">
                <span className={styles.icon}>
                  <svg
                    width="30"
                    height="30"
                    className={styles.svg}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 1000"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </span>
              </a>
              <a href={`${group[0].fb_link}`} target="blank">
                <span className={styles.icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 1000"
                    width="30"
                    height="30"
                  >
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div className={styles.wrapper}>
            <span className={styles.wrapperText}>Dodatne informacije</span>
            <div className={styles.markWrapper}>
              <span className={styles.mark}>O nama: </span>
              <span className={styles.value}>{group[0].info}</span>
            </div>
          </div>
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
      </div>
    </div>
  );
};

export default Group;
