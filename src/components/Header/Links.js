import React from 'react'

import './header.css'

const Links = () => {

  const printCV = () => window.print()
  return (
    <div className="links">
      <div onClick={printCV} className='btn'>Print CV</div>  
    </div>
  )
}

export default Links