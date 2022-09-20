import styles from "./Components/Styles/App.module.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { db } from "./firebase.config";
import Home from "./Components/Home";
import Vocal from "./Components/Categories/Vocal";
import Acoustic from "./Components/Categories/Acoustic";
import Dj from "./Components/Categories/Dj";
import Band from "./Components/Categories/Band";
import Header from "./Components/Header";
import WebFont from "webfontloader";
import Group from "./Components/Group";
import Form from "./Components/Form";
import Filter from "./Components/Filter";
import About from "./Components/About";
import Register from "./Components/Register";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

function App() {
  const [acoustic, setAcoustic] = useState([]);
  const [vocal_groups, setVocal_groups] = useState([]);
  const [band, setBand] = useState([]);
  const [ostalo, setOStalo] = useState([]);
  const [dj, setDj] = useState([]);
  const [solo, setSolo] = useState([]);
  const [instrumental, setInstrumental] = useState([]);
  const [all, setAll] = useState([]);

  let genres = [
    "Zabavna/Pop",
    "Rok",
    "Blues",
    "Jazz",
    "Narodna",
    "Starogradska",
    "Metal",
    "Funk",
    "Psytrance",
    "House",
    "EDM",
    "Tehno",
    "Folk",
    "Etno/Izvorna",
    "Klasična",
    "Evergreen",
  ];

  const instruments = [
    "Bas gitara",
    "Akustična gitara",
    "Klasična gitara",
    "Električna gitara",
    "Klavijatura",
    "Klavir",
    "Bubanj/Perkusije",
    "Violina",
    "Viola",
    "Violončelo",
    "Kahon",
    "Harmonika",
    "Saksofon",
    "Kontrabas/Berda",
    "Tambura",
    "Flauta",
    "Truba",
    "Trombon",
    "Mandolina",
    "Matrice/DJ",
  ];

  const cities = [
    "Podgorica",
    "Mojkovac",
    "Kolašin",
    "Žabljak",
    "Pljevlja",
    "Tivat",
    "Petnjica",
    "Kotor",
    "Šavnik",
    "Herceg Novi",
    "Budva",
    "Cetinje",
    "Nikšić",
    "Berane",
    "Bijelo Polje",
    "Ulcinj",
    "Bar",
    "Tuzi",
    "Gusinje",
    "Plav",
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
    let dj = [];
    let solo = [];
    let rest = [];
    let instrumental = [];
    let allPerformers = [];

    data.docs.forEach((item) => {
      allPerformers.push(item.data());
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
        case "solo":
          solo.push(item.data());
          return null;
        case "dj":
          dj.push(item.data());
          return null;
        case "instrumental":
          instrumental.push(item.data());
          return null;
        case "ostalo":
          ostalo.push(item.data());
          return null;
      }
    });
    setAcoustic([...acc]);
    setVocal_groups([...voc]);
    setBand([...band]);
    setDj([...dj]);
    setSolo([...solo]);
    setInstrumental([...instrumental]);
    setOStalo([...rest]);
    setAll([...allPerformers]);
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
              <Route exact path="/about" element={<About />}></Route>
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
                element={<Register genres={genres} instruments={instruments} />}
              ></Route>
              <Route
                exact
                path="/instrumental"
                element={<Acoustic groups={[...instrumental]} />}
              ></Route>

              <Route
                exact
                path="instrumental/:id"
                element={<Group groups={[...instrumental]} />}
              />

              <Route
                exact
                path="/solo"
                element={<Acoustic groups={[...solo]} />}
              ></Route>
              <Route
                exact
                path="solo/:id"
                element={<Group groups={[...solo]} />}
              />
              <Route exact path="/dj" element={<Dj groups={[...dj]} />}></Route>
              <Route exact path="dj/:id" element={<Group groups={[...dj]} />} />
              <Route
                exact
                path="/ostalo"
                element={<Acoustic groups={[...ostalo]} />}
              ></Route>
              <Route
                exact
                path="ostalo/:id"
                element={<Group groups={[...ostalo]} />}
              />
              <Route
                exact
                path="filter"
                element={
                  <Filter
                    performers={[...all]}
                    cities={cities}
                    instruments={instruments}
                    genres={genres}
                  />
                }
              />
              <Route exact path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
