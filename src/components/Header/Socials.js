import React from 'react'
import { BsFacebook, BsGithub } from 'react-icons/bs'

import'./header.css'

const Socials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.facebook.com/kaloian.cenkulovski/" target="_blank"><BsFacebook /></a>
      
      {/* <a href="https://www.facebook.com/kaloian.cenkulovski/" target="_blank"></a> */}
    </div>
  )
}

export default Socials