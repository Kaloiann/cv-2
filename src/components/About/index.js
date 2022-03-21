import React from 'react'
import { FaAward } from 'react-icons/fa'
import { AiFillFolderAdd } from 'react-icons/ai'
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <div className="container about__container">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>6 Months Self Taught</small>
            </article>
            <article className='about__card'>
              <AiFillFolderAdd className='about__icon' />
              <h5>Projects</h5>
              <small>20+</small>
            </article>
          </div>
          <p>
          I'm 20 years old. I live in Sofia(Bulgaria). I am interested in learning new skills about JavaScript and its frameworks. My main learning is from YouTube, Codeacademy and Udemy. I have started coding since October 2021. I started doing this because from the observation of various sites I didn't like how some  of them were done. Then I came up with the idea of creating my own. I had a friend who had already acquired large amount of skills and he helped me during my process of development.
          </p>
          <a href="#contact" className='btn btn-primary'>My Contacts</a>
        </div>
      </div>
    </section>
  )
}

export default About