import React from 'react';
import logo from './Images.js/Logo.svg';

console. log(logo);

function Header() {
  return (
    <img src={logo} alt='Logo' />
  )
}

export default Header;