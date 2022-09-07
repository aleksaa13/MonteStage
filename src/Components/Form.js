import React, { useState } from "react";
import styles from "./Styles/Form.module.css";
import InstrumentsInput from "./InstrumentsInput";
import CityInput from "./CItyInput";
import { db } from "../firebase.config";
import { storage } from "../firebase.config";
import PhoneInput from "react-phone-number-input/input";

const Form = (props) => {
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [instruments, setInstruments] = useState([]);
  const [members, setMembers] = useState(1);
  // const [image, setImage] = useState("");
  const [slikaBenda, setSlikaBenda] = useState("");
  const [yt1_link, setYt1_link] = useState("");
  const [yt2_link, setYt2_link] = useState("");
  const [ig_link, setIg_link] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [fb_link, setFb_link] = useState("");
  const [oNama, setONama] = useState("");
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
  const [errors, setErrors] = useState({
    instruments: false,
    genres: false,
    city: false,
    image: false,
    telephone: false,
  });
  const errorMessages = {
    instruments: "Unesite makar jedan instrument",
    city: "Odakle nam dolazite?",
    genres: "Odaberite makar jedan žanr",
    image: "Željeli bi da znamo i kako izgledate",
    telephone: "Unesite ispravan broj telefona",
  };

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    db.collection("form")
      .doc(`${name}`)
      .set({
        name: name,
        members: members,
        instruments: [...instruments],
        genres: { ...genres },
        city: city,
        mobile: telephone,
        email: email,
        yt1_link: yt1_link,
        yt2_link: yt2_link,
        ig_link: ig_link,
        fb_link: fb_link,
        o_nama: oNama,
      })
      .then(() => {
        console.log("Document successfully written!");
      });

    // storage
    //   .ref(`/uplate/${name}`)
    //   .put(image)
    //   .on("state_changed", alert("Hvala što ste se registrovali!"), alert);

    storage
      .ref(`/slika/${name}`)
      .put(slikaBenda)
      .on("state_changed", alert("Hvala Vam što ste se registrovali!"), alert);

    // console.log(result);
  };

  const validateSlikaBenda = () => {
    if (slikaBenda === "") {
      setErrors((prevState) => {
        return { ...prevState, image: true };
      });
    } else {
      setErrors((prevState) => {
        return { ...prevState, image: false };
      });
    }
  };

  const validateCity = () => {
    if (city === "") {
      setErrors((prevState) => {
        return { ...prevState, city: true };
      });
    } else {
      setErrors((prevState) => {
        return { ...prevState, city: false };
      });
    }
    console.log(errors);
  };

  const allAreFalse = (arr) => {
    return arr.every((element) => element === false);
  };

  const validateGenres = () => {
    if (allAreFalse(Object.values(genres))) {
      setErrors((prevState) => {
        return { ...prevState, genres: true };
      });
    } else {
      setErrors((prevState) => {
        return { ...prevState, genres: false };
      });
    }
    console.log(errors);
  };

  const validateInstruments = () => {
    if (instruments.length === 0) {
      setErrors((prevState) => {
        return { ...prevState, instruments: true };
      });
    } else {
      setErrors((prevState) => {
        return { ...prevState, instruments: false };
      });
    }
    console.log(errors);
  };

  const validateTelephone = () => {
    if (!telephone || telephone.length !== 12 || telephone[4] !== "6") {
      setErrors((prevState) => {
        return { ...prevState, telephone: true };
      });
    } else {
      setErrors((prevState) => {
        return { ...prevState, telephone: false };
      });
    }
    console.log(errors);
  };

  const validate = () => {
    validateTelephone();
    validateSlikaBenda();
    validateCity();
    validateGenres();
    validateInstruments();

    if (Object.values(errors).includes(true)) {
      return false;
    } else return true;
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
    validateGenres();
    console.log(errors);
  };

  const handleInstruments = (term) => {
    let arr = [...instruments];
    if (arr.indexOf(term) === -1) {
      arr.push(term);
    }
    setInstruments([...arr]);
    validateInstruments();
  };

  const handleCity = (term) => {
    setCity(term);
    validateCity();
  };

  const removeInstrument = (term) => {
    let arr = instruments;
    arr.splice(arr.indexOf(term), 1);
    setInstruments([...arr]);
    if (arr.length === 0) {
      setErrors((prevState) => {
        let obj = { ...prevState };
        obj.instruments = true;
        return obj;
      });
    }
    validateInstruments();
  };

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.name}>
          <input
            id="name"
            type="text"
            maxLength="25"
            placeholder="Ime"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.formField}
          />
          <label htmlFor="name" className={styles.label}>
            Naziv izvođača
          </label>
        </div>
        <div className={styles.genre}>
          <div id="list1" className={styles.dropdownCheckList} tabIndex="100">
            <span className={styles.anchor} onClick={handleDropdownClick}>
              Žanrovi
            </span>
            <div
              className={
                dropdownVisible ? styles.genresListWrapper : styles.invisible
              }
            >
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
          <span className={styles.errors}></span>
        </div>
        <span className={styles.error}>
          {errors.genres ? errorMessages.genres : null}
        </span>
        <div className={styles.members}>
          <label htmlFor="members" className={styles.labelMembers}>
            Broj članova:
          </label>
          <input
            className={styles.formFieldNumber}
            placeholder="Broj članova"
            id="memebers"
            type="number"
            min="1"
            max="100"
            onChange={(e) => setMembers(e.target.value)}
            value={members}
            required
          />
        </div>

        <div className={styles.fileInputContainer}>
          <label className={styles.buttonLabel} htmlFor="slika">
            Vaša slika
          </label>
          <input
            id="slika"
            className={styles.fileInput}
            type="file"
            onChange={(e) => {
              setSlikaBenda(e.target.files[0]);
            }}
          />
        </div>
        <span className={styles.error}>
          {errors.image ? errorMessages.image : null}
        </span>

        <div className={styles.name}>
          <PhoneInput
            id="mobile"
            className={styles.formField}
            country="ME"
            international
            value={telephone}
            onChange={setTelephone}
            placeholder="Telefon"
          />
          <label htmlFor="mobile" className={styles.label}>
            Telefon (ex. 069 432 xxx)
          </label>
        </div>
        <span className={styles.error}>
          {errors.telephone ? errorMessages.telephone : null}
        </span>
        <div className={styles.name}>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.formField}
          />
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
        </div>
        <InstrumentsInput
          allInstruments={props.instruments}
          instruments={instruments}
          handleInstruments={(term) => handleInstruments(term)}
          removeInstrument={(term) => removeInstrument(term)}
        />
        <span className={styles.error}>
          {errors.instruments ? errorMessages.instruments : null}
        </span>
        <div className={styles.name}>
          <input
            id="ig_link"
            type="text"
            placeholder="Instagram Link"
            value={ig_link}
            onChange={(e) => setIg_link(e.target.value)}
            className={styles.formField}
          />
          <label htmlFor="ig_link" className={styles.label}>
            Instagram Link
          </label>
        </div>
        <div className={styles.name}>
          <input
            id="fb_link"
            type="text"
            placeholder="Facebook Link"
            value={fb_link}
            onChange={(e) => setFb_link(e.target.value)}
            className={styles.formField}
          />
          <label htmlFor="fb_link" className={styles.label}>
            Facebook Link
          </label>
        </div>
        <div className={styles.name}>
          <input
            id="yt1_link"
            type="text"
            placeholder="Youtube Link 1"
            value={yt1_link}
            onChange={(e) => setYt1_link(e.target.value)}
            className={styles.formField}
          />
          <label htmlFor="yt1_link" className={styles.label}>
            Youtube Link 1
          </label>
        </div>
        <div className={styles.name}>
          <input
            id="yt2_link"
            type="text"
            placeholder="Youtube Link 2"
            value={yt2_link}
            onChange={(e) => setYt2_link(e.target.value)}
            className={styles.formField}
          />
          <label htmlFor="yt2_link" className={styles.label}>
            Youtube Link 2
          </label>
        </div>
        <div className={styles.name}>
          <textarea
            id="o_nama"
            type="text"
            placeholder="O nama"
            value={oNama}
            onChange={(e) => setONama(e.target.value)}
            className={styles.formField}
          />
          <label htmlFor="o_nama" className={styles.label}>
            Opišite sebe u par rečenica
          </label>
        </div>
        {/*  SLIKA UPLATNICE
        <div className={styles.fileInputContainer}>
          <label className={styles.buttonLabel} htmlFor="upload">
            Slika uplatnice
          </label>
          <input
            id="upload"
            className={styles.fileInput}
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
        </div>
        <span className={styles.error}>
          {errors.image ? errorMessages.image : null}
        </span> */}
        <CityInput handleCity={(term) => handleCity(term)} />
        <span className={styles.error}>
          {errors.city ? errorMessages.city : null}
        </span>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
