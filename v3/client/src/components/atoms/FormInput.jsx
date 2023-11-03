/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./FormInput.module.scss";

const FormInput = ({ type = "text" }) => {
  const [value, setValue] = useState("");

  return (
    <input
      type={type}
      className={styles.formInput}
      onChange={(e) => setValue(e.target.value)}
      value={value}
    />
  );
};

export default FormInput;
