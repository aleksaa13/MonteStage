import React from "react";
import styles from "./Styles/InstrumentsInput.module.css";
import SuggestionInputSearch from "suggestion-react-input-search";

const InstrumentsInput = (props) => {
  const handleOnSubmit = (term) => {
    props.handleInstruments(term);
  };

  const placeholder = "Unesite instrument";
  const inputPosition = "center";

  return (
    <div className={styles.instruments}>
      <div className={styles.reccomendationsWrapper}>
        <hr />
        <SuggestionInputSearch
          onSubmitFunction={handleOnSubmit}
          recentSearches={[...props.allInstruments]}
          placeholder={placeholder}
          inputPosition={inputPosition}
          inputClass={styles.inputClass}
          suggestionListClass={styles.suggestionClass}
        />
        <hr />
      </div>

      <div className={styles.activeInstruments}>
        {props.instruments.map((ins) => {
          return (
            <p>
              <span onClick={(term) => props.removeInstrument(ins)}>-</span>
              <span className={styles.ins}>{ins}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default InstrumentsInput;
