import React, { useState } from "react";
import FormInput from "./FormInput";
import AutoComplete from "./AutoComplete";
import styles from "./Styles/Register.module.css";
import Genres from "./Genres";
import { db } from "../firebase.config";
import { storage } from "../firebase.config";

const Register = (props) => {
  const [values, setValues] = useState({
    imeBenda: "",
    email: "",
    telephone: "",
    about: "",
    ig_link: "",
    fb_link: "",
    city: "",
    number: 1,
    yt_link_1: "",
    yt_link_2: "",
  });

  const [instrumentsClicked, setInstrumentsClicked] = useState(false);
  const [slikaBenda, setSlikaBenda] = useState("");
  const [genresClicked, setGenresClicked] = useState(false);
  const [instruments, setInstruments] = useState([]);
  const [genres, setGenres] = useState({
    Pop: false,
    Rok: false,
    Narodna: false,
    Starogradska: false,
    Tehno: false,
    Folk: false,
    Blues: false,
    Jazz: false,
    Metal: false,
    Funk: false,
    Psytrance: false,
    House: false,
    EDM: false,
    Etno: false,
    Klasicna: false,
    Evergreen: false,
    HipHop: false,
  });

  const [slikaBendaClicked, setSlikaBendaClicked] = useState(false);
  const handleSlikaBendaClick = () => {
    setSlikaBendaClicked(true);
  };

  const setAllClicked = () => {
    setGenresClickedTrue();
    setInstrumentsClickedTrue();
    setSlikaBendaClicked(true);
  };

  const inputs = [
    {
      id: 1,
      name: "imeBenda",
      type: "text",
      placeholder: "Naziv izvođača",
      errorMessage: "Unesite validno ime benda (2-16 karaktera)",
      label: "Naziv izvođača",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "E-mail adresa nije validnog formata",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "city",
      type: "text",
      placeholder: "Odakle nam dolazite?",
      errorMessage: "Unesite crnogorski grad",
      label: "Grad",
      pattern:
        "^(Budva|Podgorica|Cetinje|Kotor|Niksic|Nikšić|Gusinje|Petnjica|Andrijevica|Plav|Savnik|Šavnik|Tivat|Budva|Herceg Novi|Bijelo Polje|Berane|Bar|Ulcinj|Danilovgrad|Gusinje|Mojkovac|Kolasin|Kolašin|Zabljak|Žabljak|Pluzine|Plužine|Pljevlja|Rozaje|Rožaje|Zeta|Tuzi)$",
      required: true,
    },
    {
      id: 4,
      name: "about",
      type: "text",
      placeholder: "O nama",
      errorMessage: "Recite nam nešto više o vama u par rečenica",
      label: "O nama",
      required: false,
    },
    {
      id: 5,
      name: "number",
      type: "number",
      placeholder: "Broj članova",
      errorMessage: "Unesite broj članova benda",
      label: "Broj članova",
      required: true,
    },
    {
      id: 6,
      name: "telephone",
      type: "tel",
      placeholder: "06xyyyzzz",
      errorMessage: "Unesite broj telefona u formatu 06xyyyzzz",
      pattern: "[0-9]{3}[0-9]{3}[0-9]{3}",
      label: "Broj telefona",
      required: true,
    },
    {
      id: 7,
      name: "ig_link",
      type: "text",
      placeholder: "Instagram link",
      errorMessage: "Desila se greska",
      label: "Instagram link",
    },
    {
      id: 8,
      name: "fb_link",
      type: "text",
      placeholder: "Facebook link",
      errorMessage: "Desila se greska",
      label: "Facebook link",
    },
    {
      id: 9,
      name: "y1_link_1",
      type: "text",
      placeholder: "Youtube link 1",
      errorMessage: "Desila se greska",
      label: "Youtube link 1",
    },
    {
      id: 10,
      name: "y1_link_2",
      type: "text",
      placeholder: "Youtube link 2",
      errorMessage: "Desila se greska",
      label: "Youtube link 2",
    },
  ];

  const handleCheckbox = (e) => {
    setGenres((prevGenres) => {
      let obj = { ...prevGenres };
      obj[e.target.id] = e.target.checked;
      return obj;
    });
  };

  const addInstruments = (item) => {
    setInstruments((prevState) => {
      return [...prevState, item];
    });
  };

  const removeInstrument = (item) => {
    setInstruments((prevState) => {
      let newIns = prevState.filter((e) => e !== item);
      return [...newIns];
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      instruments.length !== 0 &&
      !Object.values(genres).every((v) => v === false) &&
      slikaBenda !== ""
    ) {
      db.collection("form")
        .doc(`${values.imeBenda}`)
        .set({
          ...values,
          instruments: [...instruments],
          genres: { ...genres },
        })
        .then(() => {
          storage
            .ref(`/slika/${values.imeBenda}`)
            .put(slikaBenda)
            .on("state_changed", alert("Hvala Vam što ste se registrovali!"));
        });
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const setGenresClickedTrue = () => {
    setGenresClicked(true);
  };

  const setInstrumentsClickedTrue = () => {
    setInstrumentsClicked(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.formStyle}>
        <Genres
          setGenresClicked={setGenresClickedTrue}
          clicked={genresClicked}
          handleCheckbox={handleCheckbox}
          genres={Object.keys(genres)}
          genresValues={Object.values(genres)}
        />
        <AutoComplete
          setInstrumentsClicked={setInstrumentsClickedTrue}
          clicked={instrumentsClicked}
          instruments={instruments}
          addInstruments={addInstruments}
          removeInstrument={removeInstrument}
          suggestions={[
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
          ]}
        />
        {inputs.map((input) => {
          return (
            <FormInput
              onChange={onChange}
              key={input.id}
              {...input}
              value={values[input.name]}
              placeholder={input.placeholder}
            />
          );
        })}

        <div className={styles.fileInputContainer}>
          <label className={styles.buttonLabel} htmlFor="slika">
            Vaša slika
          </label>
          <input
            accept="image/*"
            onClick={handleSlikaBendaClick}
            id="slika"
            className={styles.fileInput}
            type="file"
            onChange={(e) => {
              setSlikaBenda(e.target.files[0]);
            }}
          />
          <div className={styles.error}>
            {slikaBenda === "" && slikaBendaClicked ? "Nema slike" : null}
          </div>
        </div>

        <button className={styles.submit} onClick={setAllClicked}>
          Registrujte se
        </button>
      </form>
    </div>
  );
};

export default Register;
