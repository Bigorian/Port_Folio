import React from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  const ShowAlert = () =>{
    alert("This Website is not Responsive without PC Devices\n")
  }
  const ShowAlert1 = () =>{
    alert("เว็บไซต์นี้ไม่รองรับการใช้งานในอุปกรณ์อื่นๆนอกจาก Personal Computer")
  }
  return (
    <header>
     <ShowAlert/>
     <ShowAlert1/>
      <div className='container header__container' id='home'>
        <h5>Hello I'm</h5>
        <h1>Wittavat Sripradit</h1>
        <h5 className="text-light">
          Metallurgical Engineer
        </h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
   </header>
  )
}

export default Header;