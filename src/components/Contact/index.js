import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import'./contact.css'

const Contact = () => {
  return (
    <section id='contact'>
      <h2>Contact Me</h2>
    <div className="container contact__container">
      <div className="contact__options">
        <article>
          <AiOutlineMail className='icon'/>
          <h4>Email</h4>
          <h5>kaloian.cenkuvloski_5@abv.bg</h5>
          <a href="https://nm40.abv.bg/Mail.html">Send a message</a>
        </article>
        <article>
          <RiMessengerLine className='icon'/>
          <h4>Messenger</h4>
          <h5>Kaloian Tsenko</h5>
          <a href="https://www.facebook.com/kaloian.cenkulovski/">Send a message</a>
        </article>
      </div>
    </div>
    </section>
  )
}

export default Contact