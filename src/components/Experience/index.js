import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'

import './experience.css'

const Experience = () => {
  return (
    <section id='experience'>
      <div className="container experience__container">
        <h5>My Skills</h5>
        <h2>My Experience</h2>
        <div className="experience__fontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill/>
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill/>
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill/>
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill/>
              <h4>React</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill/>
              <h4>Tailwind</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill/>
              <h4>Sass</h4>
            </article>
          </div>
        </div>
      </div>  
    </section>
  )
}

export default Experience