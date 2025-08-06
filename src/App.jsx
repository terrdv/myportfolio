import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutMe from './components/AboutMe'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
        <Navbar/>
        <div className="main">
        
            <AboutMe />
        </div>
      
    </>
  )
}

export default App
