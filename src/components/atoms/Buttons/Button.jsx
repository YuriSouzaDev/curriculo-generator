import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({ name, ...props }) {
  return (
    <button {...props} className={styles.button}>
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
