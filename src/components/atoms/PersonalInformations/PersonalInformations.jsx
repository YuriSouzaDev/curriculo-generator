import React from 'react';
import styles from './PersonalInformations.module.css';
import AppContext from '../../../utilities/AppContext';
import LinkedinIcon from '../../../assets/img/linkedin_Icon.svg';

function PersonalInformations() {
  const { name, linkedinLink } = React.useContext(AppContext);

  return (
    <div className={styles.curriculum__container}>
      <div className={styles.name}>
        <h1>{name}</h1>
      </div>
      <ul className={styles.contact__list}>
        <li>
          <a href={linkedinLink} target="blank">
            {' '}
            <img src={LinkedinIcon} alt="" />
            Linkedin
          </a>
        </li>
      </ul>
    </div>
  );
}

export default PersonalInformations;
