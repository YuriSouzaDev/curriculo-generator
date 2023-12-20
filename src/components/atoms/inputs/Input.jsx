import PropTypes from 'prop-types';
import styles from './Input.module.css';

function Input({ value, name, id, placeholder, type, ...props }) {
  return (
    <>
      <label className={styles.label} htmlFor={id}>
        {name}
      </label>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        value={value}
        id={id}
        {...props}
      />
    </>
  );
}

Input.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

// Default text for input
Input.defaultProps = {
  type: 'text',
};

export default Input;
