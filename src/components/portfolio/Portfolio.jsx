import React from 'react'
import './portfolio.css'
import furniture from '../../assets/Furniture-App.png'
import todo from '../../assets/hameedtodoapp.png'
import dashboard from '../../assets/dashboard.JPG'
import intro from '../../assets/starter-files.JPG'
import movie from '../../assets/movie.JPG'
import tesla from '../../assets/tesla.png'

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
            <img src={tesla} alt="" />
          </div>
          <h3>Tesla site clone</h3>
          <div className='cta'>
            <a href="https://github.com/BakareHameed/tesla-clone" className='btn' target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://tesla-clone-f78b9.web.app" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
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
            <img src={intro} alt="" />
          </div>
          <h3>Starter Files</h3>
          <div className='cta'>
            <a href="https://https://github.com/BakareHameed/Dev-files-front-end-Mentor" className='btn' target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://hameeddevfiles.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
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