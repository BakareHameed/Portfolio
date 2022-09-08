import React from 'react';
import '../contact/contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9v5g4yp', 'template_et1mued', form.current, 'BPWasNY2sqDygN39U')

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>bakarehameed07@gmail.com</h5>
            <a href="mailto:bakarehameed07@gmail.com">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+2349060180937</h5>
            <a href="https://api.whatsapp.com/send?phone+2349060180937" target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" placeholder='Your mesasage' id="" cols="30" rows="5"></textarea>
          <button type='submit' className='btn'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact