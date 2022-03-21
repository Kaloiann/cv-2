import React from 'react'
import Links from './Links'

import img from '../../assets/cv-photo2.png'
import { BsGithub } from 'react-icons/bs'

import './header.css'
import Socials from './Socials'


const Header = () => {
  return (
    <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Kaloian Tsenkulovski</h1>
          <h5 className="text-ligth">Frontend Developer</h5>
          {/* <Socials /> */}
          {/* <Links /> */}
          <div className="me">
            <img src={img} alt="" />
          </div>
          <a className="link" href="https://github.com/Kaloiann" target="_blank"><BsGithub /> Link to my Github</a>
          <div className="scroll-button">
            <a href="#contact" className="scroll_down">Scroll Down</a>
          </div>
        </div>
    </header>
  )
}

export default Header