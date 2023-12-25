import Button from '../../atoms/Buttons/Button';
import React from 'react';
import Accordion from '../../atoms/Accordion/Accordion';
import Input from '../../atoms/inputs/Input';
import styles from './FormPersonalInfo.module.css';
import AppContext from '../../../utilities/AppContext';

function FormPersonalInfo() {
  const [isAccordeonOpen, setIsAccordeonOpen] = React.useState(false);
  const { setName, setLinkedinLink } = React.useContext(AppContext);

  const updateRef = React.useRef();
  const timeoutRef = React.useRef(null);
  const nameRef = React.useRef();
  const linkediLinknRef = React.useRef();
  console.log(updateRef.current);

  function handleOpen(isOpen) {
    setIsAccordeonOpen(isOpen);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (nameRef.current.value.length >= 1) {
      updateRef.current.classList.add('activeUpdate');
      setName(nameRef.current.value);
      updateTimeout();
    }

    if (linkediLinknRef.current.value.length >= 1) {
      setLinkedinLink(linkediLinknRef.current.value);
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
    return () => clearTimeout();
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
              name="Nome"
              placeholder="Insira seu nome completo"
              id="nome"
              inputRef={nameRef}
            />
          </div>
          <div className={styles.input__item}>
            {/* Linkedin */}
            <Input
              name="Linkedin"
              placeholder="Insira o link do seu perfil"
              id="linkedin"
              inputRef={linkediLinknRef}
            />
          </div>
          <div className={styles.input__item}>
            {/* telefone */}
            <Input
              name="Telefone"
              placeholder="(XX) XXXXX-XXXX"
              id="telefone"
              // value={value}
            />
          </div>
          <div className={styles.input__item}>
            {/* Portifolio */}
            <Input
              name="Link Portifólio"
              placeholder="Insira o link do seu portifolio"
              id="telefone"
              // value={value}
            />
          </div>
          <div className={styles.input__item}>
            {/* Email */}
            <Input
              name="Email"
              placeholder="Insira seu email"
              id="email"
              type="email"
              // value={value}
            />
          </div>
          <div className={styles.input__item}>
            {/* Github */}
            <Input
              name="Github"
              placeholder="Insira o link do seu perfil"
              id="telefone"
              // value={value}
            />
          </div>
        </div>
        <Button name="Submit" type="submit" />
      </form>
    </>
  );
}

export default FormPersonalInfo;
