import PropTypes from "prop-types";
import styles from "./Input.module.css";

const Input = ({ labelName, type, value, name, onChange, err }) => {
  return (
    <div className={styles.formGroup}>
      <div className={styles.formGroupHeader}>
        <input
          className={styles.formInput}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder=" "
        />
        <label className={styles.formLabel} htmlFor="">
          {labelName}
        </label>
      </div>
      {err && <p className="text-red-500 ">{err}</p>}
    </div>
  );
};

Input.propTypes = {
  labelName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  err: PropTypes.string.isRequired,
};

export default Input;
