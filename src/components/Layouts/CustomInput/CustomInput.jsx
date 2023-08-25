import PropTypes from "prop-types";
import styles from "./CustomInput.module.css";

const CustomInput = ({ labelName, id, type, value, name, onChange }) => {
   return (
      <div className={styles.formGroup}>
         <input
            className={styles.formInput}
            id={id}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder=" "
         />
         <label className={styles.formLabel} htmlFor={id}>
            {labelName}
         </label>
      </div>
   );
};

CustomInput.propTypes = {
   labelName: PropTypes.string.isRequired,
   id: PropTypes.string.isRequired,
   type: PropTypes.string.isRequired,
   value: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
};

export default CustomInput;
