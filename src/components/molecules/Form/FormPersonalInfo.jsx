import Button from '../../atoms/Buttons/Button';
import React from 'react';
import Accordion from '../../atoms/Accordion/Accordion';
import Input from '../../atoms/inputs/Input';
import styles from './FormPersonalInfo.module.css';
import AppContext from '../../../utilities/AppContext';

const regexValidation = {
  name: /^[a-zA-Z.'-\s]+$/,
  email: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
  linkedinUrl: /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/,
  phoneNumber: /^\(\d{2}\)\s\d{9}$/,
  portfolioUrl: /^https:\/\/.+$/i,
  githubUrl: /^https:\/\/github\.com\/[a-zA-Z0-9_-]+\/?$/,
};

function FormPersonalInfo() {
  const [isAccordeonOpen, setIsAccordeonOpen] = React.useState(false);
  const {
    setName,
    setLinkedinLink,
    setWhatsapp,
    setWhatsappFormatted,
    setPortifolio,
    setEmail,
    setGithub,
  } = React.useContext(AppContext);

  const nameRef = React.useRef();
  const linkedinLinkRef = React.useRef();
  const whatsappRef = React.useRef();
  const portifolioRef = React.useRef();
  const emailRef = React.useRef();
  const githubRef = React.useRef();
  const updateRef = React.useRef();
  const timeoutRef = React.useRef(null);

  function handleOpen(isOpen) {
    setIsAccordeonOpen(isOpen);
  }

  // Para formatação de numero de telefone
  function formatPhoneNumber(value) {
    const numericValue = value.replace(/\D/g, '');

    const formattedValue = `(${numericValue.slice(0, 2)}) ${numericValue.slice(
      2,
      11
    )}`;

    return formattedValue;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formattedPhoneNumber = formatPhoneNumber(whatsappRef.current.value);

    if (
      nameRef.current.value.length >= 1 &&
      regexValidation.name.test(nameRef.current.value)
    ) {
      updateRef.current.classList.add('activeUpdate');
      setName(nameRef.current.value);
      updateTimeout();
    }

    if (
      linkedinLinkRef.current.value.length >= 1 &&
      regexValidation.linkedinUrl.test(linkedinLinkRef.current.value)
    ) {
      updateRef.current.classList.add('activeUpdate');
      setLinkedinLink(linkedinLinkRef.current.value);
      updateTimeout();
    }

    if (
      formattedPhoneNumber.length >= 1 &&
      regexValidation.phoneNumber.test(formattedPhoneNumber)
    ) {
      updateRef.current.classList.add('activeUpdate');
      setWhatsapp(whatsappRef.current.value);
      setWhatsappFormatted(formattedPhoneNumber);
      updateTimeout();
    }

    if (
      portifolioRef.current.value.length >= 1 &&
      regexValidation.portfolioUrl.test(portifolioRef.current.value)
    ) {
      updateRef.current.classList.add('activeUpdate');
      setPortifolio(portifolioRef.current.value);
      updateTimeout();
    }

    if (
      emailRef.current.value.length >= 1 &&
      regexValidation.email.test(emailRef.current.value)
    ) {
      updateRef.current.classList.add('activeUpdate');
      setEmail(emailRef.current.value);
      updateTimeout();
    }

    if (
      githubRef.current.value.length >= 1 &&
      regexValidation.githubUrl.test(githubRef.current.value)
    ) {
      updateRef.current.classList.add('activeUpdate');
      setGithub(githubRef.current.value);
      updateTimeout();
    }

    function updateTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        if (updateRef.current) {
          updateRef.current.classList.remove('activeUpdate');
        }
      }, 2000);
    }
  }

  React.useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const formClass = isAccordeonOpen
    ? styles.form
    : `${styles.form} ${styles.open__form}`;

  return (
    <>
      <div className={styles.update} ref={updateRef}>
        <p>Curriculo Atualizado</p>
      </div>
      <Accordion name={'Personal Informations'} onToggle={handleOpen} />
      <form className={formClass} onSubmit={handleSubmit}>
        <div className={styles.input__container}>
          <div className={styles.input__item}>
            {/* Nome completo */}
            <Input
              name="nome"
              placeholder="Insira seu nome completo"
              id="nome"
              inputRef={nameRef}
            />
          </div>
          <div className={styles.input__item}>
            {/* Linkedin */}
            <Input
              name="linkedin"
              placeholder="Insira o link do seu perfil"
              id="linkedin"
              inputRef={linkedinLinkRef}
            />
          </div>
          <div className={styles.input__item}>
            {/* telefone */}
            <Input
              name="telefone"
              placeholder="(XX) XXXXX-XXXX"
              id="telefone"
              inputRef={whatsappRef}
            />
          </div>
          <div className={styles.input__item}>
            {/* Portifolio */}
            <Input
              name="portifolio"
              placeholder="Insira o link do seu portifolio"
              id="portifolio"
              inputRef={portifolioRef}
            />
          </div>
          <div className={styles.input__item}>
            {/* Email */}
            <Input
              name="email"
              placeholder="Insira seu email"
              id="email"
              type="email"
              inputRef={emailRef}
            />
          </div>
          <div className={styles.input__item}>
            {/* Github */}
            <Input
              name="github"
              placeholder="Insira o link do seu perfil"
              id="github"
              inputRef={githubRef}
            />
          </div>
        </div>
        <Button name="Enviar" type="submit" />
      </form>
    </>
  );
}

export default FormPersonalInfo;
