import React from 'react'
import { FaHome, FaUserAlt, FaBookOpen, FaPhoneAlt } from 'react-icons/fa'

import './nav.css'

const Nav = () => {
  return (
    <nav>
      <a href="#"><FaHome/></a>
      <a href="#about"><FaUserAlt/></a>
      <a href="#experience"><FaBookOpen/></a>
      <a href="#contact"><FaPhoneAlt/></a>
    </nav>
  )
}

export default Nav