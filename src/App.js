import styles from "./Components/Styles/App.module.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import db from "./firebase.config";
import Home from "./Components/Home";

function App() {
  const [acoustic, setAcoustic] = useState([]);
  const [vocal_groups, setVocal_groups] = useState([]);
  const [band, setBand] = useState([]);
  const [active, setActive] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = db.collection("acoustic");
    const data = await response.get();
    let acc = [];
    let voc = [];
    let band = [];

    data.docs.forEach((item) => {
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
      <Router>
        {/* <Header />  */}
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
