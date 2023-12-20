import PropTypes from 'prop-types';
import styles from './Accordion.module.css';
import { IoIosArrowDropdownCircle } from 'react-icons/io';

function Accordion({ isOpen, onToggle }) {
  const iconClass = isOpen
    ? `${styles.open__form} ${styles.icon__rotate}`
    : styles.open__form;

  return (
    <div className={styles.personal__info} onClick={onToggle}>
      <h2>Personal Informations</h2>
      <IoIosArrowDropdownCircle className={iconClass} />
    </div>
  );
}

Accordion.propTypes = {
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func,
};

export default Accordion;
