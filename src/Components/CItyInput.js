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
    "Zeta",
    "Andrijevica",
    "Mojkovac",
    "Rožaje",
  ];

  const errorMessage = "Odakle nam dolazite?";

  const handleOnSubmit = (term) => {
    if (cities.includes(term)) {
      props.handleCity(term);
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
          required
        />
      </div>
      <span>{!props.valid && props.focused ? errorMessage : null}</span>
    </div>
  );
};

export default CityInput;
