import styles from "./Components/Styles/App.module.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { db } from "./firebase.config";
import Home from "./Components/Home";
import Vocal from "./Components/Vocal";
import Acoustic from "./Components/Acoustic";
import Band from "./Components/Band";
import Header from "./Components/Header";
import WebFont from "webfontloader";
import Group from "./Components/Group";
import Form from "./Components/Form";

function App() {
  const [acoustic, setAcoustic] = useState([]);
  const [vocal_groups, setVocal_groups] = useState([]);
  const [band, setBand] = useState([]);
  const [all, setAll] = useState([]);

  let genres = [
    "Pop",
    "Rock",
    "Blues",
    "Jazz",
    "Narodna",
    "Starogradska",
    "Metal",
    "Funk",
    "Elektronska",
    "Tehno",
    "Folk",
  ];

  useEffect(() => {
    fetchData();

    WebFont.load({
      google: {
        families: ["Sansita"],
      },
    });
  }, []);

  const fetchData = async () => {
    const response = db.collection("acoustic");
    const data = await response.get();
    let acc = [];
    let voc = [];
    let band = [];

    data.docs.forEach((item) => {
      all.push(item.data());
      switch (item.data().cat) {
        case "acoustic":
          acc.push(item.data());
          return null;
        case "band":
          band.push(item.data());
          return null;
        case "vocal_groups":
          voc.push(item.data());
          return null;
      }
    });
    setAcoustic([...acc]);
    setVocal_groups([...voc]);
    setBand([...band]);
  };

  return (
    <div className={styles.App}>
      <React.Fragment>
        <Router>
          <Header />
          <div>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route
                exact
                path="/acoustic"
                element={<Acoustic groups={[...acoustic]} />}
              ></Route>

              <Route
                exact
                path="acoustic/:id"
                element={<Group groups={[...acoustic]} />}
              />
              <Route
                exact
                path="band/:id"
                element={<Group groups={[...band]} />}
              />

              <Route
                exact
                path="vocal_groups/:id"
                element={<Group groups={[...vocal_groups]} />}
              />

              <Route
                exact
                path="/band"
                element={<Band groups={[...band]} />}
              ></Route>
              <Route
                exact
                path="/vocal_groups"
                element={<Vocal groups={[...vocal_groups]} />}
              ></Route>
              <Route
                exact
                path="/form"
                element={<Form genres={genres} />}
              ></Route>
            </Routes>
          </div>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
