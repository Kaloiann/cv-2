import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FiPhoneCall } from 'react-icons/fi'
import'./contact.css'

const Contact = () => {
  return (
    <section id='contact'>
      <div className="container contact__container">
        <h2>Contact Me</h2>
        <div className="contact__options">
          {/* <article>
            <AiOutlineMail className='icon'/>
            <h4>Email</h4>
            <h5>contact@kaloian-cenkulovski.com</h5>
            <a href="mailto:kaloian.cenkuvloski_5@abv.bg">Send an email</a>
          </article> */}
          <article>
            <FiPhoneCall className='icon'/>
            <h4>Phone</h4>
            <h5>+359 898 437 788</h5>
            <a href="tel:+359898437788">Give me a call</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact