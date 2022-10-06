import React from 'react'
import '../about/about.css'
import ME from '../../assets/blue.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderOpened} from 'react-icons/vsc'



const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        {/* <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about img" />
          </div>
        </div> */}

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ years</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>15 - 20 worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderOpened className='about__icon'/>
              <h5>Projects</h5>
              <small>40+ completed</small>
            </article>
          </div>

          <p>I'm a Software Engineer.I design software, algorithms, flowcharts and appliations. I also have a solid understanding of database design, version control concepts
            and the relational database; preferred competencies such as exposure C, C++, Java, HTML, CSS, Javascript,
            and agile development methodologies
          </p>

          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About