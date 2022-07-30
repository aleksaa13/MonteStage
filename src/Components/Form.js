import React, { useState } from "react";
import styles from "./Styles/Form.module.css";
import InstrumentsInput from "./InstrumentsInput";
import { db } from "../firebase.config";
import { storage } from "../firebase.config";

const Form = (props) => {
  const [name, setName] = useState("");
  const [instruments, setInstruments] = useState([]);
  const [members, setMembers] = useState(1);
  const [image, setImage] = useState("");
  const [genres, setGenres] = useState({
    Pop: false,
    Rok: false,
    Narodna: false,
    Starogradska: false,
    Tehno: false,
    Folk: false,
    Elektronska: false,
    Blues: false,
    Jazz: false,
    Metal: false,
    Funk: false,
  });
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // let result = {
    //   name: name,
    //   members: members,
    //   instruments: [...instruments],
    //   genres: { ...genres },
    // };
    db.collection("form")
      .doc(`${name}`)
      .set({
        name: name,
        members: members,
        instruments: [...instruments],
        genres: { ...genres },
      })
      .then(() => {
        console.log("Document successfully written!");
      });

    if (image == null) return;

    storage
      .ref(`/uplate/${name}`)
      .put(image)
      .put(image)
      .on("state_changed", alert("success"), alert);

    // console.log(result);
  };
  const handleDropdownClick = (e) => {
    setDropdownVisible((prev) => {
      return !prev;
    });
  };

  const handleCheckbox = (e) => {
    setGenres((prevGenres) => {
      let obj = { ...prevGenres };
      obj[e.target.id] = e.target.checked;
      return obj;
    });
  };

  const handleInstruments = (term) => {
    let arr = [...instruments];
    if (arr.indexOf(term) === -1) {
      arr.push(term);
    }
    setInstruments([...arr]);
  };

  const removeInstrument = (term) => {
    let arr = instruments;
    arr.splice(arr.indexOf(term), 1);
    setInstruments([...arr]);
  };

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.name}>
          Ime:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.genre}>
          <div id="list1" className={styles.dropdownCheckList} tabIndex="100">
            <span className={styles.anchor} onClick={handleDropdownClick}>
              Žanrovi
            </span>
            <div className={dropdownVisible ? styles.aleksa : styles.invisible}>
              <ul className={styles.items}>
                {props.genres.map((genre) => {
                  return (
                    <li className={styles.item}>
                      <input
                        id={genre}
                        type="checkbox"
                        onChange={(e) => handleCheckbox(e)}
                      />
                      {genre}
                      <br />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.members}>
          <input
            type="number"
            onChange={(e) => setMembers(e.target.value)}
            value={members}
          />
        </div>
        <InstrumentsInput
          allInstruments={props.instruments}
          instruments={instruments}
          handleInstruments={(term) => handleInstruments(term)}
          removeInstrument={(term) => removeInstrument(term)}
        />
        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
