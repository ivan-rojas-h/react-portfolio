import React from 'react'
import '../Assets/styles/Card.css'
import { FaGithubAlt } from "react-icons/fa";

function Card() {
  return (
    <div className='card'>
      <div className='card__info'>
        {/* card title and tags */}
        <h3 className='card__title'>
          Titulo Proyecto
          <div className='card__tags'>
            <span className='card__tag'>HTML</span>
            <span className='card__tag'>CSS</span>
            <span className='card__tag'>JSX</span>
            <span className='card__tag'>React</span>
          </div>
        </h3>
        {/* title description */}
        <span>
          <p className='card__description text'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <a href="#" className='card__repository'><FaGithubAlt /> </a>
        </span>
      </div>
    </div>
  )
}

export default Card