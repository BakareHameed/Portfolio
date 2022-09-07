import React from 'react';
import '../contact/contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'


const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail/>
            <h4>Email</h4>
            <h5>bakarehameed07@gmail.com</h5>
            <a href="mailto:bakarehameed07@gmail.com">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp/>
            <h4>Whatsapp</h4>
            <h5>+2349060180937</h5>
            <a href="https://api.whatsapp.com/send?phone+2349060180937" target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Your full name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" placeholder='Your mesasage' id="" cols="30" rows="10"></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact