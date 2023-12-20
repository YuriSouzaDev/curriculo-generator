// import Button from '../../atoms/Buttons/Button';
import React from 'react';
import Accordion from '../../Accordion/Accordion';
import Input from '../../atoms/inputs/Input';
import styles from './FormPersonalInfo.module.css';

const FormPersonalInfo = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Deu certo');
  }

  const formClass = isOpen
    ? styles.form
    : `${styles.form} ${styles.open__form}`;

  return (
    <>
      <Accordion isOpen={isOpen} onToggle={handleOpen} />
      <form className={formClass} onSubmit={handleSubmit}>
        <div className={styles.input__container}>
          <div className={styles.input__item}>
            {/* Nome completo */}
            <Input
              name="Nome"
              placeholder="Insira seu nome completo"
              id="nome"
              // value={value}
            />
          </div>
          <div className={styles.input__item}>
            {/* Linkedin */}
            <Input
              name="Linkedin"
              placeholder="Insira o link do seu perfil"
              id="linkedin"
              // value={value}
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
        {/* <Button name="Submit" type="submit" /> */}
      </form>
    </>
  );
};

export default FormPersonalInfo;
