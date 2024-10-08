import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>HAMEED</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        {/* <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com/HameedSenju"><IoLogoTwitter/></a> */}
      </div>

      <div className="footer__copyright">
        <small>
          &copy; SENJU. All rights reserved
        </small>
      </div>
    </footer>
  )
}

export default Footer