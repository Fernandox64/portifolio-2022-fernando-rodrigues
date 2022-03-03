import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Services from './components/Services/Services'
import Experience from './components/experience/Experience'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Portifilio from './components/Portifolio/Portifilio'
import Testemonials from './components/Testemonials/Testemonials'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
      
      <div>

        <Header /><Nav /><About /><Experience/><Services/><Portifilio/><Testemonials/><Contact/><Footer/>
      
      </div>

  )
}

export default App