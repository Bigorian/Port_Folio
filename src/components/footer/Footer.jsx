import React from 'react';
import './Footer.css';
import { AiFillFacebook } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';



const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Wittavat</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#certificates">Certificates</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.facebook.com/wittavatbig/"><AiFillFacebook /></a>


        <a href="https://www.instagram.com/_wittavat_sripradit_/?hl=en"><BsInstagram /></a>
      </div>

      <div className="footer__copyright"><small>&copy; Bigorian Wittavat. All right reserves</small></div>
    </footer>
  )
}

export default Footer;