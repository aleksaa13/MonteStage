import React from "react";
import { Link } from "react-router-dom";
import styles from "./Styles/Home.module.css";
import acoustic from "../images/acoustic.jpg";
import vocal from "../images/vocal.jpg";
import band from "../images/band.jpg";

const Home = (props) => {
  return (
    <React.Fragment>
      <div className={styles.home}>
        <div
          className={styles.card}
          style={{ backgroundImage: `url(${band})` }}
        >
          <strong>
            <Link to="/band">Bendovi</Link>
          </strong>
        </div>
        <div
          className={styles.card}
          style={{ backgroundImage: `url(${acoustic})` }}
        >
          <strong>
            {" "}
            <Link exact to="/acoustic">
              Akustični bendovi
            </Link>
          </strong>
        </div>
        <div
          className={styles.card}
          style={{ backgroundImage: `url(${vocal})` }}
        >
          <strong>
            <Link to="/vocal_groups">Vokalni sastavi</Link>
          </strong>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
