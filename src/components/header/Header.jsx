import React from 'react'
import '../header/header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Bakare Hameed</h1>
        <h5 className='text-light'>Software Engineer</h5>
        <CTA/>
        <HeaderSocials/>


        <a href="#contact" className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header