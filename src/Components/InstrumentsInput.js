import React from "react";
import styles from "./Styles/InstrumentsInput.module.css";
import SuggestionInputSearch from "suggestion-react-input-search";

const InstrumentsInput = () => {
  const handleOnSubmit = () => {};

  const placeholder = "Unesite instrument";
  const inputPosition = "center";

  const instruments = [
    "gitara",
    "klavijatura",
    "bubanj",
    "violina",
    "kahon",
    "saksofon",
    "bas gitara",
  ];

  const recentSearches = [...instruments];

  return (
    <div>
      <input type="text" />
      <div className={styles.reccomendationsWrapper}>
        <hr />
        <SuggestionInputSearch
          onSubmitFunction={handleOnSubmit}
          recentSearches={recentSearches}
          placeholder={placeholder}
          inputPosition={inputPosition}
          inputClass={styles.inputClass}
          suggestionListClass={styles.suggestionClass}
        />
        <div>
          <button>+</button>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default InstrumentsInput;
