import React from 'react';
import './Nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { useState } from 'react';

const Nav = () => {
  const [activeNav , setactiveNav] = useState('#')
  return (
    <nav>
      <a href="#home" onClick={() => setactiveNav('#home')} className={activeNav === '#home' ? 'active' : '' }><AiOutlineHome /></a>
      <a href="#about" onClick={() => setactiveNav('#about')} className={activeNav === '#about' ? 'active' : '' }><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setactiveNav('#experience')} className={activeNav === '#experience' ? 'active' : '' }><BiBook /></a>
      <a href="#certificates" onClick={() => setactiveNav('#certificates')} className={activeNav === '#certificates' ? 'active' : '' }><RiServiceLine /></a>
      <a href="#contact" onClick={() => setactiveNav('#contact')} className={activeNav === '#contact' ? 'active' : '' }><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav;