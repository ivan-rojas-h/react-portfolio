import React from 'react';
import '../Assets/styles/Navbar.css';
import Logo from '../sub-components/Logo'
import Menu from '../sub-components/Menu'

// List of links -> text: url
const listOfLinks = [
  { text : 'Inicio', url: '#' },
  { text : 'Proyectos', url: '#projects' },
  { text : 'About', url: '#about' },
  { text : 'Contacto', url: '#contact' },
];

function Navbar() {
  return (
    <div className='navbar'>
      <Logo />
      <Menu listOfLinks={listOfLinks} />
    </div>
  );
}

export default Navbar;