import React from 'react'
import './nav.css'
import {FcHome} from 'react-icons/fc'
import {FcAbout} from 'react-icons/fc'
//import {FcPortraitMode} from 'react-icons/fc'
import {FcServices} from 'react-icons/fc'
import {FcBusinessContact} from 'react-icons/fc'
import {FcDoughnutChart} from 'react-icons/fc'
import {FcReading} from 'react-icons/fc'
import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FcHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><FcAbout /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FcReading /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><FcServices /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FcBusinessContact /></a>
      {/* <a href="#teste" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FcDoughnutChart /></a> */}
    </nav>
  )
}

export default Nav