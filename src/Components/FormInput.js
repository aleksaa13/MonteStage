import React, { useState } from "react";
import styles from "./Styles/Register.module.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, required, onChange, id, ...inputProps } = props;

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className={styles.formInput}>
      <label>{label}</label>
      <input
        focused={focused.toString()}
        required={required}
        {...inputProps}
        onChange={onChange}
        className={styles.formInputField}
        onBlur={handleFocus}
      />
      <span className={styles.errorMessage}>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
