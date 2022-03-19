import React, { useState } from 'react'
import { FaHome, FaUserAlt, FaBookOpen, FaPhoneAlt } from 'react-icons/fa'
import { RiLightbulbFill } from 'react-icons/ri'

import './nav.css'

const Nav = () => {
  const [active, setActive] = useState('#')

  return (
    <nav>
      <div className="contain">
        <a href="#" 
          onClick={() => setActive('#')}
          className={active === '#' ? 'active' : ''}
          >
          <FaHome/>
        </a>
        <a href="#about" 
          onClick={() => setActive('#about')}
          className={active === '#about' ? 'active' : ''}
        >
          <FaUserAlt/>
        </a>
        <a href="#experience"
        onClick={() => setActive('#experience')}
        className={active === '#experience' ? 'active' : ''}
        ><FaBookOpen/></a>
        <a href="#mainProject"
        onClick={() => setActive('#mainProject')}
        className={active === '#mainProject' ? 'active' : ''}
        ><RiLightbulbFill/></a>
        <a href="#contact"
        onClick={() => setActive('#contact')}
        className={active === '#contact' ? 'active' : ''}
        ><FaPhoneAlt/></a>
      </div>
    </nav>
  )
}

export default Nav