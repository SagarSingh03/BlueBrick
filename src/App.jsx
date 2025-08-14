import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Home/Header'
import Project from './components/Projects/Project'
import Testimonial from './components/Testimonials/Testimonial'
import { Element } from 'react-scroll'
import Signup from './components/Signup/Signup'

function App() {
  return (
    <div className="App">
      <Navbar />

      <Element name="home">
        <Header />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="projects">
        <Project />
      </Element>

      <Element name="testimonials">
        <Testimonial />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
      
      <Footer />
    </div>
  )
}
export default App
