import React, { useState } from "react";
import styles from "./Styles/Register.module.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, required, onChange, id, ...inputProps } = props;

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className={styles.name}>
      <input
        focused={focused.toString()}
        required={required}
        {...inputProps}
        onChange={onChange}
        className={styles.formField}
        onBlur={handleFocus}
        min="1"
      />
      <label className={styles.label}>{label}</label>
      <span className={styles.errorMessage}>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
