import React from 'react';
import { TiHtml5, TiCss3 } from "react-icons/ti";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { FaGithubAlt, FaGitSquare  } from "react-icons/fa";

import '../Assets/styles/Hero.css';

function Hero() {
  return (
    <section id="hero" className='center hero'>
      <div className='icons'>
        <TiHtml5  className='hero__icon'/>
        <TiCss3 className='hero__icon' />
        <IoLogoJavascript className='hero__icon' />
        <IoLogoReact className='hero__icon' />
        <FaGithubAlt className='hero__icon' />
        <FaGitSquare className='hero__icon' />
      </div>
      <h1 className='title'>IVAN ROJAS</h1>
      <p className='text'>{`< Desarrollador FrontEnd />`}</p>
    </section>
  )
}

export default Hero;