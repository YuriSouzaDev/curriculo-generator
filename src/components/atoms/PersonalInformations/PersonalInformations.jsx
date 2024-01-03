import React from 'react';
import styles from './PersonalInformations.module.css';
import AppContext from '../../../utilities/AppContext';
import linkedinIcon from '../../../assets/img/linkedin_icon.svg';
import whatsappIcon from '../../../assets/img/whatsapp_icon.svg';
import portifolioIcon from '../../../assets/img/globe_icon.svg';
import gmailIcon from '../../../assets/img/gmail_icon.svg';
import githubIcon from '../../../assets/img/github_icon.svg';

function PersonalInformations() {
  const {
    name,
    linkedinLink,
    whatsapp,
    whatsappFormatted,
    portifolio,
    email,
    github,
  } = React.useContext(AppContext);

  return (
    <div className={styles.curriculum__container}>
      <div className={styles.name}>
        <h1>{name}</h1>
      </div>
      <ul className={styles.contact__list}>
        <li>
          <a href={linkedinLink} target="_blank" rel="noreferrer noopener">
            <img src={linkedinIcon} alt="Linkedin" />
            Linkedin
          </a>
        </li>
        <p>|</p>
        <li>
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={whatsappIcon} alt="whatsapp" />
            {whatsappFormatted}
          </a>
        </li>
        <p>|</p>
        <li>
          <a href={portifolio} target="_blank" rel="noreferrer noopener">
            <img src={portifolioIcon} alt="portifolio" />
            Portifólio
          </a>
        </li>
        <p>|</p>
        <li>
          <a href={email} target="_blank" rel="noreferrer noopener">
            <img src={gmailIcon} alt="email" />
            {email}
          </a>
        </li>
        <p>|</p>
        <li>
          <a href={github} target="_blank" rel="noreferrer noopener">
            <img src={githubIcon} alt="github" />
            Github
          </a>
        </li>
      </ul>
    </div>
  );
}

export default PersonalInformations;
