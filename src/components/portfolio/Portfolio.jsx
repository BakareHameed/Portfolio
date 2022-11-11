import React from 'react'
import './portfolio.css'
import furniture from '../../assets/Furniture-App.png'
import todo from '../../assets/hameedtodoapp.png'
import dashboard from '../../assets/dashboard.png'
import intro from '../../assets/intro-section.jpg'
import nft from '../../assets/nft.jpg'
import movie from '../../assets/movie.JPG'

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
            <a href="https://hameedfurnitureapp.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio_item-image">
            <img src={todo} alt="" />
          </div>
          <h3>Todo App</h3>
          <div className='cta'>
            <a href="https://github.com/BakareHameed/Todo-app" className='btn' target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://hameedtodoapp.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio_item-image">
            <img src={dashboard} alt="" />
          </div>
          <h3>React Admin Dashboard</h3>
          <div className='cta'>
            <a href="https://github.com/BakareHameed/Admin-Dashboard" className='btn' target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://senjudashboard.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
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
            <img src={movie} alt=""/>
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