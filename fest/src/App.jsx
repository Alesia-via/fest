import { useState } from 'react'
import Header from './components/header'
import Home from './components/home'
import About from './components/about'
import Lineup from './components/lineup'
import Schedule from './components/schedule'
import Tickets from './components/tickets'
import venue from './components/venue'
import Footer from './components/footer'
import './App.css'
import Venue from './components/venue'

function App() {

  return (
    <>
      <Header />
      <Home />
      <About />
      <Lineup />
      <Schedule />  
      <Tickets /> 
      <Venue  />
      <Footer />

    </>
  )
}

export default App
