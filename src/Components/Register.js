import React, { useState } from "react";
import FormInput from "./FormInput";
import CityInput from "./CItyInput";
import AutoComplete from "./AutoComplete";
import styles from "./Styles/Register.module.css";

const Register = (props) => {
  const [values, setValues] = useState({
    imeBenda: "",
    email: "",
    telephone: "",
    about: "",
    ig_link: "",
    fb_link: "",
    city: "",
  });

  const inputs = [
    {
      id: 1,
      name: "imeBenda",
      type: "text",
      placeholder: "Ime Benda",
      errorMessage: "Desila se greska",
      label: "Ime Benda",
      pattern: "^[A-Za-z0-9]{2,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "email",
      errorMessage: "Desila se greska",
      label: "email",
      required: true,
    },
    {
      id: 3,
      name: "city",
      type: "text",
      placeholder: "Odakle nam dolazite?",
      errorMessage: "City Greska",
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
      errorMessage: "Desila se greska",
      label: "O nama",
      required: false,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ides");
    // if (cityValid()) {
    //   // uradi nesto
    //   console.log("ides");
    // }
  };

  // const cityValid = () => {
  //   if (values.city === "") {
  //     return false;
  //   } else return true;
  // };

  // const handleCity = (term) => {
  //   setValues({ ...values, city: term });
  // };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.formStyle}>
        {inputs.map((input) => {
          return (
            <FormInput
              onChange={onChange}
              key={input.id}
              {...input}
              value={values[input.name]}
            />
          );
        })}
        {/* <CityInput handleCity={(term) => handleCity(term)} /> */}
        {/* <AutoComplete
          handleCity={handleCity}
          suggestions={[
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
          ]}
        /> */}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;
