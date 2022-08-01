import React, { useState } from "react";
import styles from "./Styles/City.module.css";
import SuggestionInputSearch from "suggestion-react-input-search";

const CityInput = (props) => {
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
  const [city, setCity] = useState("");

  const handleOnSubmit = (term) => {
    if (cities.includes(term)) {
      props.handleCity(term);
      setCity(term);
    }
  };

  const placeholder = "Unesite grad";
  const inputPosition = "center";

  return (
    <div className={styles.instruments}>
      <div className={styles.reccomendationsWrapper}>
        <SuggestionInputSearch
          onSubmitFunction={handleOnSubmit}
          recentSearches={[...cities]}
          placeholder={placeholder}
          inputPosition={inputPosition}
          inputClass={styles.inputClass}
          suggestionListClass={styles.suggestionClass}
          minLength={3}
        />
      </div>
    </div>
  );
};

export default CityInput;
