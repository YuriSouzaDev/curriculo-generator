import React from 'react';
import PropTypes from 'prop-types';
import styles from './Accordion.module.css';
import { IoIosArrowDropdownCircle } from 'react-icons/io';

function Accordion({ name, onToggle }) {
  const [rotate, setRotate] = React.useState(false);

  function handleOpen() {
    setRotate(!rotate);
    if (onToggle) {
      onToggle(!rotate);
    }
  }

  const iconClass = rotate
    ? `${styles.open__form} ${styles.icon__rotate}`
    : styles.open__form;

  return (
    <div className={styles.personal__info} onClick={handleOpen}>
      <h2>{name}</h2>
      <IoIosArrowDropdownCircle className={iconClass} />
    </div>
  );
}

Accordion.propTypes = {
  onToggle: PropTypes.func,
  name: PropTypes.string,
};

export default Accordion;
