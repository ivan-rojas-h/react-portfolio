import React from 'react'
import { useState } from 'react';
import '../Assets/styles/MobileMenu.css'
import { FaBars, FaWindowClose } from "react-icons/fa";

function MobileMenu({ listOfLinks = []}) {

  const [show, setShow] = useState(false);

  const iconClick = event => {
    event.preventDefault();
    setShow(!show);
  };

  // Iterate each link and return a 'li' element with its url attached (a element)
  const elements = listOfLinks.map( element =>
    <li key={`mobile-menu-${element.text}`}>
      <a href={element.url} className='mobile-menu__link'>
        {element.text}
      </a>
    </li>
  );

  return ( 
    <>
      <span className='mobile-menu__icon' onClick={iconClick}>
        { show ? <FaWindowClose /> : <FaBars  />}
      </span>
      <ul className={show ? 'mobile-menu mobile-menu-show' : 'mobile-menu'}>
        {elements}
      </ul>
    </>
  )
}

export default MobileMenu