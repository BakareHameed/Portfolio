import React from 'react'
import './portfolio.css'
import furniture from '../../assets/Furniture-App.png'
import space from '../../assets/mars.jpg'
import basket from '../../assets/active-states-basket-empty.jpg'
import intro from '../../assets/intro-section.jpg'
import nft from '../../assets/nft.jpg'
import todo from '../../assets/movie.JPG'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio_item-image">
            <img src={furniture} alt="furniture site" />
          </div>
          <h3>Furniture App</h3>
          <div className='cta'>
            <a href="https://github.com/BakareHameed/Furniture-App-" className='btn' target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://flourishing-kleicha-f590bd.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio_item-image">
            <img src={space} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='cta'>
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio_item-image">
            <img src={basket} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='cta'>
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio_item-image">
            <img src={intro} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='cta'>
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio_item-image">
            <img src={nft} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='cta'>
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio_item-image">
            <img src={todo} alt=""/>
          </div>
          <h3>Movie Hub</h3>
          <div className='cta'>
            <a href="https://github.com/BakareHameed/Movie-app" className='btn' target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://frabjous-gingersnap-c0cc18.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio