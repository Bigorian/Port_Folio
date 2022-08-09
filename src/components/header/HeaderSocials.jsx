import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithubSquare} from 'react-icons/fa';
import {BsYoutube} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/wittavat-sripradit-b990531b4/" target="_blank" rel="noopener noreferrer" ><BsLinkedin/></a>
        <a href="https://github.com/Bigorian/Bigorian.github.io" target="_blank" rel="noopener noreferrer"><FaGithubSquare/></a>
        <a href="https://www.youtube.com/channel/UCNDYmo_k-uDwjaJ5qUFUsbA" target="_blank" rel="noopener noreferrer"><BsYoutube /></a>
        <a href="https://www.facebook.com/wittavatbig/" target="_blank" rel="noopener noreferrer"><BsFacebook /></a>

    </div>
  )
}

export default HeaderSocials;