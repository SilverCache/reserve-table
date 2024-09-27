import React from 'react';
import logo from './Images.js/Logo .svg';

function Footer() {
  return (
    <div className='main-footer'>
      <div className='container'>
        <div className='row'>
        <img src={logo} alt='Logo' />
          {/*column1*/}
          <div className='col'>
            <h4>Doormat Navigation:</h4>
            <ul>
              <li><a href='/Home'>Home</a></li>
              <li><a href='/About'>About</a></li>
              <li><a href='/Menu'>Menu</a></li>
              <li><a href='/Reservations'>Reservations</a></li>
              <li><a href='/Order Online'>Order Online</a></li>
              <li><a href='/Login'>Login</a></li>
            </ul>
          </div>
          {/*column2*/}
          <div className='col'>
            <h4>Contact:</h4>
            <ul>
              <li><a href='/Address'>Address</a></li>
              <li><a href='/Phone number'>Phone number</a></li>
              <li><a href='/Email'>Email</a></li>
            </ul>
          </div>
          {/*column3*/}
          <div className='col'>
            <h4>Social Media Links:</h4>
            <ul>
              <li><a href='/Facebook'>Facebook</a></li>
              <li><a href='/Github'>Github</a></li>
              <li><a href='/LinkedIn'>LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
