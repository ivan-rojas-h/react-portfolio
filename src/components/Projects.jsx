import React from "react";
import '../Assets/styles/Projects.css'
import Card from '../sub-components/Card'
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";

function Projects () {
  return (
    <section id='projects' className='projects'>
      {/* Project title */}
      <h2 className='projects__title title center'>
        Mis proyectos
        <span className="projects__buttons">
          <a href="#" className='floating-buttons center'> <FaGithubAlt /> </a>
          <a href="#" className='floating-buttons center'> <FaLinkedin /> </a>
        </span>
      </h2>
      {/* project cards */}
      <div className='cards center'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

export default Projects