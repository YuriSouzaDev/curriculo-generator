import React from 'react';
import AppContext from './AppContext';
import propTypes from 'prop-types';

function Provider({ children }) {
  const [name, setName] = React.useState('Seu Nome');
  const [linkedinLink, setLinkedinLink] = React.useState('');

  const value = {
    name,
    setName,
    linkedinLink,
    setLinkedinLink,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
