import React from 'react'
import './header.css'
import ME from '../../assets/me2.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
  <header>
    {/* Teste de header */}
    <div className="container header__container">
      <h3>Oi eu sou o </h3>
      <h1>Fernando Rodrigues</h1>
      <h4 className="text-ligth">Fullstack Developer</h4>
      
      <div className='header__btn'>
        <a href=""download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Vamos conversar</a>        
      </div>

      <HeaderSocials />

      <div className='me'>
        <img src={ME} alt="me" />
      </div>

      <a href="#contact" className='scroll__down'>ScrollDown</a>


    </div>
  </header>  )
}

export default Header