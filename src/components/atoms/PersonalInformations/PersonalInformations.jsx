import React from 'react';
import styles from './PersonalInformations.module.css';
import AppContext from '../../../utilities/AppContext';
import linkedinIcon from '../../../assets/img/linkedin_icon.svg';
import whatsappIcon from '../../../assets/img/whatsapp_icon.svg';
import portifolioIcon from '../../../assets/img/globe_icon.svg';
import gmailIcon from '../../../assets/img/gmail_icon.svg';
import githubIcon from '../../../assets/img/github_icon.svg';

function PersonalInformations() {
  const { name, linkedinLink, whatsapp, portifolio, email, github } =
    React.useContext(AppContext);

  return (
    <div className={styles.curriculum__container}>
      <div className={styles.name}>
        <h1>{name}</h1>
      </div>
      <ul className={styles.contact__list}>
        <li>
          <a href={linkedinLink} target="blank">
            <img src={linkedinIcon} alt="Linkedin" />
            Linkedin
          </a>
        </li>
        <p>|</p>
        <li>
          <a href={whatsapp} target="blank">
            <img src={whatsappIcon} alt="whatsapp" />
            {whatsapp}
          </a>
        </li>
        <p>|</p>
        <li>
          <a href={portifolio} target="blank">
            <img src={portifolioIcon} alt="portifolio" />
            Portifólio
          </a>
        </li>
        <p>|</p>
        <li>
          <a href={email} target="blank">
            <img src={gmailIcon} alt="email" />
            {email}
          </a>
        </li>
        <p>|</p>
        <li>
          <a href={github} target="blank">
            <img src={githubIcon} alt="github" />
            Github
          </a>
        </li>
      </ul>
    </div>
  );
}

export default PersonalInformations;
