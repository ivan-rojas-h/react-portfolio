import React from 'react'
import '../Assets/styles/Menu.css'

function Menu({ listOfLinks }) {
  // Iterate each link and return a 'li' element with its url attached (a element)
  const elements = listOfLinks.map( element =>
    <li key={`menu-${element.text}`}>
      <a href={element.url} className='menu__link' >
        {element.text}
      </a>
    </li>
  );

  return ( <ul className='menu'>{elements}</ul>) ;
}

export default Menu