import React from 'react';
import './Certificates.css';
import Generation from '../../assets/1634288510579.jpg';
import Code_Academy from '../../assets/unnamed.png';
import x_lane from '../../assets/download.png';
import future_skill from '../../assets/Screen_Shot_2563_02_05_at_12.01.25.png';
import monGo_DB from '../../assets/mongodb.png';
import cswip from '../../assets/cswip.png';
import council from '../../assets/โลโก้-สภาวิศวกร.png';
import CNI from '../../assets/CNI-Logo-1.png';
import world_steel from '../../assets/0906202029.jpg';
import thai_german from '../../assets/53257_logo_20220301102546.jpeg';
import mtec from '../../assets/download.jpg';
import seda from '../../assets/LOGO_SEDA_NEW.jpg';
import ocsc from '../../assets/ocsc-big.png';
import link1 from '../../assets/600px-LinkedIn_logo_initials.png';



const Certificates = () => {
  return (
    <section id='certificates'>
      <h5>What Certified i Have</h5>
      <h2>My Certificates</h2>

      <div className='container certificates__container'>
        <div className='certificates__frontend'>
          <h3>Web Developer</h3>
          <div className="certificates__content">

            <article className='certificates__details'>
              <img src={Generation} className='certificates__details-icon' alt='generation' />
              <div>
                <div className='code-aca1'><a href="https://sv1.picz.in.th/images/2022/11/06/v2TY0b.jpg" target="_blank" className="text-decoration-none" rel="noopener noreferrer">Junior Software Developer Cohort2 (Generation Thailand)</a></div>
                <small className='text-light'>Intermediate Level</small>
              </div>
            </article>

            <article className='certificates__details'>
              <img src={Code_Academy} className='certificates__details-icon' alt="code_aca" />
              <div>
                <div className='code-aca1'><a href="https://sv1.picz.in.th/images/2022/07/26/XkxP9I.jpg" target="_blank" className="text-decoration-none" rel="noopener noreferrer">Learn HTML Course (Code Academy)</a></div>
                <small className='text-light'>Intermediate Level</small>
              </div>
            </article>

            <article className='certificates__details'>
            <img src={Code_Academy} className='certificates__details-icon' alt='code_aca' />
              <div>
                <div className='code-aca2'><a href="https://sv1.picz.in.th/images/2022/07/26/XkQSGf.jpg" target="_blank" class="text-decoration-none" rel="noopener noreferrer">Learn Command Line Course (Code Academy)</a></div>
                <small className='text-light'>Intermediate Level</small>
              </div>
            </article>

            <article className='certificates__details'>
            <img src={Code_Academy} className='certificates__details-icon' alt='code_aca' />
              <div>
                <div className='code-aca3'><a href="https://sv1.picz.in.th/images/2022/07/26/XkQcHl.jpg" target="_blank" class="text-decoration-none" rel="noopener noreferrer">Learn Bootstrap Course (Code Academy)</a></div>
                <small className='text-light'>Intermediate Level</small>
              </div>
            </article>

            <article className='certificates__details'>
            <img src={Code_Academy} className='certificates__details-icon' alt='code_aca' />
              <div>
                <div className='code-aca4'><a href="https://sv1.picz.in.th/images/2022/07/26/XkQqtV.jpg" target="_blank" class="text-decoration-none" rel="noopener noreferrer">Learn CSS Course (Code Academy)</a></div>
                <small className='text-light'>Intermediate Level</small>
              </div>
            </article>

            <article className='certificates__details'>
            <img src={Code_Academy} className='certificates__details-icon' alt='code_aca' />
              <div>
                <div className='code-aca4'><a href="https://sv1.picz.in.th/images/2022/11/06/v2Tzcf.jpg" target="_blank" class="text-decoration-none" rel="noopener noreferrer">Learn Express Course (Code Academy)</a></div>
                <small className='text-light'>Intermediate Level</small>
              </div>
            </article>

            <article className='certificates__details'>
            <img src={Code_Academy} className='certificates__details-icon' alt='code_aca' />
              <div>
                <div className='code-aca4'><a href="https://sv1.picz.in.th/images/2022/11/06/v2TNyq.jpg" target="_blank" class="text-decoration-none" rel="noopener noreferrer">Learn React Course (Code Academy)</a></div>
                <small className='text-light'>Intermediate Level</small>
              </div>
            </article>

            <article className='certificates__details'>
              <img src={x_lane} className='certificates__details-icon' alt='x_lane'  />
              <div>
                <div className='sut-xlane1'><a href="https://sv1.picz.in.th/images/2022/07/26/XkU7ME.jpg" target="_blank" class="text-decoration-none" rel="noopener noreferrer">Data Analytics for Beginner (SUT X-lane)</a></div>
                <small className='text-light'>Intermediate Level</small>
              </div>
            </article>

            <article className='certificates__details'>
            <img src={x_lane} className='certificates__details-icon' alt='x_lane' />
              <div>
                <div className='sut-xlane2'><a href="https://sv1.picz.in.th/images/2022/07/26/XkUEWR.jpg" target="_blank" class="text-decoration-none" rel="noopener noreferrer">Cyber Security for Beginner (SUT X-lane)</a></div>
                <small className='text-light'>Intermediate Level</small>
              </div>
            </article>

            <article className='certificates__details'>
            <img src={future_skill} className='certificates__details-icon' alt='future' />
              <div>
                <div className='future'><a href="https://sv1.picz.in.th/images/2022/07/26/XkUed1.jpg" target="_blank" class="text-decoration-none" rel="noopener noreferrer">Basic Programing HTML5/CSS/JS  (Future Skill)</a></div>
                <small className='text-light'>Entry Level</small>
              </div>
            </article>

            <article className='certificates__details'>
            <img src={monGo_DB} className='certificates__details-icon' alt='mongo' />
              <div>
                <div className='mongoDB'><a href="https://sv1.picz.in.th/images/2022/11/06/v2TfTz.jpg" target="_blank" class="text-decoration-none" rel="noopener noreferrer">Mongo DB (Mongo DB University)</a></div>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='certificates__details'>
            <img src={link1} className='certificates__details-icon' alt='link1' />
              <div>
                <div className='link1'><a href="https://www.linkedin.com/learning/certificates/c053576e385c692ce606230f7e28179d66fb3f111abf08920d007bb00e37b64c?u=100575394" target="_blank" class="text-decoration-none" rel="noopener noreferrer">Programming Foundations Fundamental</a></div>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='certificates__details'>
            <img src={link1} className='certificates__details-icon' alt='link2' />
              <div>
                <div className='link2'><a href="https://www.linkedin.com/learning/certificates/d91113aa45995f0e7e6850ad392e43ae57aeff4cf3655b8904699e7f979953d6?u=100575394" target="_blank" class="text-decoration-none" rel="noopener noreferrer">Introduction to Career Skills in Software Development</a></div>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>





          </div>
        </div>



        {/* 
        END OF FRONT END */}


        <div className="certificates__backend">
          <h3>Engineering and Relate Field</h3>
          <div className="certificates__content">

            <article className='certificates__details'>
            <img src={cswip} className='certificates__details-icon' alt='cswip' />
              <div className='card3-li'>
                <div className='cswip'><a href="https://sv1.picz.in.th/images/2022/07/26/XkZvIb.jpg" target="_blank" class="text-decoration-none" rel="noopener noreferrer">Visual Welding Inspector (CSWIP 3.0)</a></div>
                <small className='text-light'>Intermediate Level</small>
              </div>
            </article>

            <article className='certificates__details'>
            <img src={council} className='certificates__details-icon' alt='council' />
              <div>
                <div className='council'><a href="https://sv1.picz.in.th/images/2022/07/26/XkZIVR.png" target="_blank" class="text-decoration-none" rel="noopener noreferrer">Council of Mining Engineer (Metallurgical Field)</a></div>
                <small className='text-light'>Association Level</small>
              </div>
            </article>

            <article className='certificates__details'>
            <img src={world_steel} className='certificates__details-icon' alt='world_steel' />
              <div>
                <div className='steel'><a href="https://sv1.picz.in.th/images/2022/06/11/V7Hjqv.jpg" target="_blank" class="text-decoration-none" rel="noopener noreferrer">Continuous Casting Process (World Steel Association) </a></div>
                <small className='text-light'>Intermediate Level</small>
              </div>
            </article>

            <article className='certificates__details'>
            <img src={CNI} className='certificates__details-icon' alt='cni' />
              <div>
                <div className='steel'><a href="https://sv1.picz.in.th/images/2022/11/06/v2Thj8.jpg" target="_blank" class="text-decoration-none" rel="noopener noreferrer">Liquid Penetrant Testing      #Level 2 (CNI Inspection)  </a></div>
                <small className='text-light'>Intermediate Level</small>
              </div>
            </article>

            <article className='certificates__details'>
            <img src={thai_german} className='certificates__details-icon' alt='thai-german' />
              <div>
                <div className='steel'><a href="https://sv1.picz.in.th/images/2022/11/06/v2TkvR.jpg" target="_blank" class="text-decoration-none" rel="noopener noreferrer">Mesurement System Analysis 4th Edition (Technology Promotion Assosiate Thailand-German) </a></div>
                <small className='text-light'>Master Level</small>
              </div>
            </article>

            <article className='certificates__details'>
            <img src={mtec} className='certificates__details-icon' alt='mtec' />
              <div>
                <div className='steel'><a href="https://sv1.picz.in.th/images/2022/11/06/v2Tt8Z.jpg" target="_blank" class="text-decoration-none" rel="noopener noreferrer">IATF 16949 2016 "Requirement Interpretaion" (Entec Quality Management) </a></div>
                <small className='text-light'>Intermediate Level</small>
              </div>
            </article>

            <article className='certificates__details'>
            <img src={mtec} className='certificates__details-icon' alt='mtec'/>
              <div>
                <div className='steel'><a href="https://sv1.picz.in.th/images/2022/11/06/v2T9B0.jpg" target="_blank" class="text-decoration-none" rel="noopener noreferrer">IATF 16949' 2016 "Internal Audit" (Entec Quality Management) </a></div>
                <small className='text-light'>Intermediate Level</small>
              </div>
            </article>

            <article className='certificates__details'>
            <img src={seda} className='certificates__details-icon' alt='seda'/>
              <div>
                <div className='entrepreneur'><a href="https://sv1.picz.in.th/images/2022/11/06/v2TKcP.jpg" target="_blank" class="text-decoration-none" rel="noopener noreferrer">Social Entrepreneur Ship and Start Up Camp (SEDA) </a></div>
                <small className='text-light'>Intermediate Level</small>
              </div>
            </article>

            <article className='certificates__details'>
            <img src={ocsc} className='certificates__details-icon' alt='ocsc'/>
              <div>
                <div className='ocsc'><a href="https://sv1.picz.in.th/images/2022/11/06/v2TRlk.jpg" target="_blank" class="text-decoration-none" rel="noopener noreferrer">Certificate of the results of general knowledge measurement(OCSC) </a></div>
                <small className='text-light'>Certificate</small>
              </div>
            </article>



          </div>
        </div>


      </div>
    </section>
  )
}

export default Certificates;