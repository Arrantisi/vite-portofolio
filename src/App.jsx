import React from 'react'
import Header from './components/Header/Header'
import "./App.css"
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Service from './components/Service/Service'
import Qualification from './components/Qualification/Qualification'
import Testimonial from './components/Testimonial/Testimonial'
import ScrollUp from './components/ScrollUp/ScrollUp'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Service />
        <Qualification />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  )
}

export default App