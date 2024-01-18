import React from 'react'
import '../Assets/styles/About.css'

function About() {
  return (
    <section id='about' className='about center'>
      <h2 className='title'>Sobre Mi</h2>
      <p className='about__text text'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <p className='about__cta-text text'>¿Quieres saber un poco mas? <a href="#" className='about__cta-button'>Visita mi web de links</a></p>
    </section>
  )
}

export default About