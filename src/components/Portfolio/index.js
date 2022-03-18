import React from 'react'

import './portfolio.css'

const MainProject = () => {
  return (
    <section id='mainProject' className='project'>
        <h5>My biggest project</h5>
        <h2>For Baba</h2>
      <div className='wraper'>
        <div>
          <h3>Desktop version</h3>
          <iframe src="https://drive.google.com/file/d/19FzvVHVRdkom5N8D3y72SLudmNX_O-Jk/preview" width="640" height="480" allow="fullscreen"></iframe>
        </div>
        <div>
          <h3>Mobile version</h3>
          <iframe src="https://drive.google.com/file/d/1WyCxet-byQ5Z_YPT5Rh3YFoTNexk5Lv0/preview" width="640" height="480" allow="fullscreen"></iframe>
        </div>
      </div>
    </section>
  )
}

export default MainProject