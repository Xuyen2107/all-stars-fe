import PropTypes from "prop-types";
import styles from "./Input.module.css";

const Input = ({ labelName, id, type, value, name, onChange }) => {
  return (
    <div className={styles.formGroup}>
      <label className="block text-gray-700 font-bold mb-2" htmlFor={id}>
        {labelName}
      </label>
      <input
        className="w-full border border-gray-400 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder=""
      />
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
};

export default Input;
