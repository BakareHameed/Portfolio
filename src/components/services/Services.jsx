import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>Project management</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Plan and Develop the project idea.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create and lead your dream team.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ensure Stakeholder satisfaction.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ensure Project Performance.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Web development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web development support and maintenace.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web hosting.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web optimization.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web programming.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services