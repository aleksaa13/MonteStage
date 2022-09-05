import React from "react";
import styles from "./Styles/About.module.css";

const About = () => {
  return (
    <div>
      <p className={styles.text}>
        "Montestage" predstavlja mjesto na kom se nalaze kontakt podaci i
        detaljan opis svih muzičara iz Crne Gore koji žele da se promovišu i
        koje je moguće angažovati za različite vrste događaja.
        <br />
        Sa idejom da sve muzičare skupimo na jednom mjestu rodio se naš sajt
        koji je prije svega alat, pomoćno sredstvo za pronalaženje odgovarajućih
        muzičara (od bendova, vokalnih sastava pa sve do DJ-eva...) za planirani
        događaj.
        <br />
        Autori websajta - "Montestage" čine mladi ljudi koji ulažu svoje znanje,
        pažnju i vrijeme sa ciljem da posjetiocima sajta pruže najbolje moguće
        iskustvo u brzom pronalaženju potrebnih informacija o muzičarima.
      </p>
    </div>
  );
};

export default About;
