import React from 'react';
import './Experience.css';
import { BsPatchCheckFill} from 'react-icons/bs';


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills i Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Front End Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Java Script ES6</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>



        {/* 
        END OF FRONT END */}


        <div className="experiece__backend">
          <h3>Back End Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Express</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>


          </div>
        </div>


      </div>
    </section>
  )
}

export default Experience;