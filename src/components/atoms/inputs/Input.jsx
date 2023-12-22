import PropTypes from 'prop-types';
import styles from './Input.module.css';

function Input({ inputRef, name, id, placeholder, type, ...props }) {
  return (
    <>
      <label className={styles.label} htmlFor={id}>
        {name}
      </label>
      <input
        ref={inputRef}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        id={id}
        {...props}
      />
    </>
  );
}

Input.propTypes = {
  inputRef: PropTypes.object,
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
