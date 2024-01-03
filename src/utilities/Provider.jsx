import React from 'react';
import AppContext from './AppContext';
import propTypes from 'prop-types';

function Provider({ children }) {
  const [name, setName] = React.useState('Seu Nome');
  const [linkedinLink, setLinkedinLink] = React.useState('');
  const [whatsapp, setWhatsapp] = React.useState('(99) 99999-9999');
  const [whatsappFormatted, setWhatsappFormatted] =
    React.useState('(99) 99999-9999');
  const [portifolio, setPortifolio] = React.useState('');
  const [email, setEmail] = React.useState('seuemail@email.com');
  const [github, setGithub] = React.useState('');

  const value = {
    name,
    setName,
    linkedinLink,
    setLinkedinLink,
    whatsapp,
    setWhatsapp,
    whatsappFormatted,
    setWhatsappFormatted,
    portifolio,
    setPortifolio,
    email,
    setEmail,
    github,
    setGithub,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
