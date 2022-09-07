import React, { useState } from "react";
import FormInput from "./FormInput";

const Register = (props) => {
  const [values, setValues] = useState({
    imeBenda: "",
    email: "",
    telephone: "",
    about: "",
    ig_link: "",
    fb_link: "",
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
      name: "ig_link",
      type: "text",
      placeholder: "Instagram",
      errorMessage: "Desila se greska",
      label: "Instagram",
      required: false,
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
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  return (
    <div>
      <form onSubmit={handleSubmit}>
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

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;
