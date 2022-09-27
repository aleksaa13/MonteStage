import React, { useState } from "react";
import styles from "./Styles/Genres.module.css";

const Genres = (props) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [clicked, setClicked] = useState(false);

  const errorMessage = "Izaberite makar jedan zanr";

  const handleClicked = () => {
    setClicked(true);
  };

  const handleDropdownClick = (e) => {
    setDropdownVisible((prev) => {
      return !prev;
    });
    handleClicked();
  };

  return (
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
                <li className={styles.item} key={genre}>
                  <input
                    id={genre}
                    type="checkbox"
                    onChange={(e) => props.handleCheckbox(e)}
                  />
                  {genre}
                  <br />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <span className={styles.error}>
        {props.genresValues.every((v) => v === false) && clicked
          ? errorMessage
          : null}
      </span>
    </div>
  );
};

export default Genres;
