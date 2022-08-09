import React from 'react';
import './About.css';
import ME from '../../assets/83481646_2605006996219422_8572243819276271616_n.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { RiFolderChartFill } from 'react-icons/ri';


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>


      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>No Experience in Developer Field</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Skills</h5>
              <small>JavaScript(ES6) <br/>  CSS <br/> HTML <br/> Express <br/> MongoDB</small>
            </article>

            <article className='about__card'>
              <RiFolderChartFill className='about__icon' />
              <h5>Projects</h5>
              <small>Clomar  <br/>Jamming
                <br />  Front-end Mentor   <br />
                Fit-Freinds</small>
            </article>

            

          </div>
          <div>
              <p>
                My name is Wittavat Sripradit, 27 years old. I have worked in the automotive industry for over a year and the petroleum industry for 1 year. I am aware of the change in the world and see the Developer line as an interesting and intimidating line. In the current job market, I decided to join "Generation Thailand" I don't have any experience in this line of work, but I'm always ready to learn and accept new things. Just give me a chance.
              </p>
              <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About