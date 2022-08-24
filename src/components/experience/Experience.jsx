import React from 'react';
import './Experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills i Have</h5>
      <h2>My Skills</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Front End Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <a href="https://html.com/" target="_blank" rel="noopener noreferrer">
         <img alt="Qries" src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" 
          /></a>
                <small className='text-light'>Intermediate level</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <a href="https://css-tricks.com/" target="_blank" rel="noopener noreferrer">
         <img alt="Qries" src="https://extasius.com/wp-content/uploads/2020/11/css3-logo.png" 
          /></a>
                <small className='text-light'>Intermediate level</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
         <img alt="Qries" src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Javascript-shield.png" 
          /></a>
                <small className='text-light'>Intermediate level</small>
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
                 <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
         <img alt="Qries" src="https://cdn.thenewstack.io/media/2021/07/3025c103-mongodb.png" 
          /></a>
                <small className='text-light'>Intermediate level</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
         <img alt="Qries" src="https://miro.medium.com/max/800/1*Dno6e7KS5HcdGybg9A0onQ.png" 
          /></a>
                <small className='text-light'>Intermediate level</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <a href="https://www.microsoft.com/en-us/sql-server/sql-server-downloads" target="_blank" rel="noopener noreferrer">
         <img alt="Qries" src="https://www.macworld.com/wp-content/uploads/2022/04/setup_learn_sql_mac.jpg?quality=50&strip=all" 
          /></a>
                <small className='text-light'>Intermediate level</small>
              </div>
            </article>


          </div>
        </div>


      </div>
    </section>
  )
}

export default Experience;