import React, { useState } from "react";
import styles from "./Styles/Autocomplete.module.css";

const AutoComplete = (props) => {
  const [active, setActive] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [input, setInput] = useState("");
  const [focused, setFocused] = useState(false);
  const [clicked, setClicked] = useState(false);

  const errorMessage = "Unesite makar jedan instrument";
  const label = "Instrumenti";

  const handleFocus = () => {
    setClicked(true);
  };

  const onChange = (e) => {
    const { suggestions } = props;
    const input = e.currentTarget.value;
    const newFilteredSuggestions = suggestions.filter(
      (suggestion) => suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1
    );
    setActive(0);
    setFiltered(newFilteredSuggestions);
    setIsShow(true);
    setInput(e.currentTarget.value);
  };
  const onClick = (e) => {
    setActive(0);
    setFiltered([]);
    setIsShow(false);
    setInput(e.currentTarget.innerText);
    props.addInstruments(e.currentTarget.innerText);
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      // enter key
      setActive(0);
      setIsShow(false);
      setInput(filtered[active]);
    } else if (e.keyCode === 38) {
      // up arrow
      return active === 0 ? null : setActive(active - 1);
    } else if (e.keyCode === 40) {
      // down arrow
      return active - 1 === filtered.length ? null : setActive(active + 1);
    }
  };
  const renderAutocomplete = () => {
    if (isShow && input) {
      if (filtered.length) {
        return (
          <ul className={styles.autocomplete}>
            {filtered.map((suggestion, index) => {
              let className;
              if (index === active) {
                className = styles.active;
              }
              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        return (
          <div className={styles.noAutocomplete}>
            <em>Not found</em>
          </div>
        );
      }
    }
    return <></>;
  };
  return (
    <>
      <label className={styles.autoCompleteLabel}>{label}</label>
      <input
        className={styles.input}
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={input}
        onBlur={handleFocus}
        placeholder="Unesite instrument"
      />
      {renderAutocomplete()}
      <span className={styles.errorMessage}>
        {props.instruments.length === 0 && clicked ? errorMessage : null}
      </span>
      <br></br>

      <div>
        {props.instruments.map((ins) => {
          return (
            <div key={ins} className={styles.insWrap}>
              <span className={styles.ins}>{ins}</span>
              <span
                className={styles.removeInstrument}
                onClick={(term) => props.removeInstrument(ins)}
              >
                x
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AutoComplete;
