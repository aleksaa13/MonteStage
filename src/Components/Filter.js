import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Styles/Filter.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Filter = (props) => {
  const [filterParams, setFilterParams] = useState({
    genres: [],
    instruments: [],
    cities: [],
  });

  let navigate = useNavigate();

  // const filterGenres = () => {
  //   return filterParams["genres"].every((v) =>
  //   props.performers[0].genres.includes(v)
  // )
  // }

  // const applyFilter = () => {
  //   let filteredItems = props.performers.filter((performer) =>
  //     filterParams["genres"].every((v) => performer.genres.includes(v))
  //   )
  //   .filter((performer) =>
  //   filterParams["instruments"].every((v) => performer.instruments.includes(v))
  // )
  // .filter((performer) =>
  //     filterParams["cities"].every((v) => performer.cities.includes(v))
  //   )

  // };

  const toggleActivity = (e) => {
    let type = e.target.id.split(" ")[0];
    let param = e.target.id.split(" ")[1];
    let obj = { ...filterParams };
    if (type === "cities") {
      obj["cities"] = [param];
    } else {
      let params = [...filterParams[`${type}`]];
      if (isActive(param, type)) {
        let index = filterParams[`${type}`].indexOf(param);
        params.splice(index, 1);
      } else {
        params.push(param);
      }
      obj[`${type}`] = [...params];
    }
    setFilterParams({ ...obj });

    // applyFilter();
  };

  const isActive = (param, type) => {
    if (filterParams[`${type}`].includes(param)) {
      return true;
    } else return false;
  };

  return (
    <div>
      <Accordion allowZeroExpanded={true} className={styles.accordion}>
        <AccordionItem className={styles.accordion__item}>
          <AccordionItemHeading>
            <AccordionItemButton className={styles.accordion__button}>
              Zanrovi
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className={styles.accordion__panel}>
            <div className={styles.filterWrapepr}>
              <div className={styles.filterButtons}>
                {props.genres.map((genre) => {
                  return (
                    <div
                      className={
                        isActive(genre, "genres")
                          ? `${styles.filterButton} ${styles.active}`
                          : styles.filterButton
                      }
                      onClick={(e) => {
                        toggleActivity(e);
                      }}
                      id={`genres ${genre}`}
                      key={genre}
                    >
                      {genre}
                    </div>
                  );
                })}
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className={styles.accordion__item}>
          <AccordionItemHeading>
            <AccordionItemButton className={styles.accordion__button}>
              Instrumenti
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className={styles.accordion__panel}>
            <div className={styles.filterWrapepr}>
              <div className={styles.filterButtons}>
                {props.instruments.map((instrument) => {
                  return (
                    <div
                      className={
                        isActive(instrument, "instruments")
                          ? `${styles.filterButton} ${styles.active}`
                          : styles.filterButton
                      }
                      onClick={(e) => {
                        toggleActivity(e);
                      }}
                      id={`instruments ${instrument}`}
                      key={instrument}
                    >
                      {instrument}
                    </div>
                  );
                })}
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className={styles.accordion__item}>
          <AccordionItemHeading>
            <AccordionItemButton className={styles.accordion__button}>
              Gradovi
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className={styles.accordion__panel}>
            <div className={styles.filterWrapepr}>
              <div className={styles.filterButtons}>
                {props.cities.map((city) => {
                  return (
                    <div
                      className={
                        isActive(city, "cities")
                          ? `${styles.filterButton} ${styles.active}`
                          : styles.filterButton
                      }
                      onClick={(e) => {
                        toggleActivity(e);
                      }}
                      id={`cities ${city}`}
                      key={city}
                    >
                      {city}
                    </div>
                  );
                })}
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>

      {/* <div className={styles.filterWrapepr}>
          <p className={styles.filterName}>Zanrovi</p>
          <div className={styles.filterButtons}>
            {props.genres.map((genre) => {
              return (
                <div
                  className={
                    isActive(genre, "genres")
                      ? `${styles.filterButton} ${styles.active}`
                      : styles.filterButton
                  }
                  onClick={(e) => {
                    toggleActivity(e);
                  }}
                  id={`genres ${genre}`}
                  key={genre}
                >
                  {genre}
                </div>
              );
            })}
          </div>
        </div> */}
      <div className={styles.acoustic}>
        {props.performers
          .filter((performer) =>
            filterParams["genres"].every((v) => performer.genres.includes(v))
          )
          .filter((performer) =>
            filterParams["instruments"].every((v) =>
              performer.instruments.includes(v)
            )
          )
          .filter((performer) =>
            filterParams["cities"].every(
              (v) => performer.grad === v || v === ""
            )
          )
          .map((group) => {
            console.log(group);
            return (
              <div
                className={styles.cardWrap}
                style={{
                  backgroundImage: `url(images/${group.type}/${group.imageId}.jpg)`,
                }}
              >
                <strong
                  onClick={() => {
                    navigate(`/${group.type}/${group.imageId}`);
                  }}
                  className={styles.name}
                >
                  {group.name}
                </strong>
                <div className={styles.darkenBg}></div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Filter;
