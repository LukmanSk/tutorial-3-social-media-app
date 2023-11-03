/* eslint-disable react/prop-types */
import FormInput from "@components/atoms/FormInput";
import styles from "./FormGroup.module.scss";

const FormGroup = ({ label, name = null, type = "text" }) => {
  const htmlFor = name ? name : label.toLowerCase();

  return (
    <div className={styles.formGroup}>
      <label htmlFor={htmlFor} className={styles.label}>
        {label}
      </label>
      <FormInput type={type} />
    </div>
  );
};

export default FormGroup;
