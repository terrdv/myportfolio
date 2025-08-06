import { useState } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import Navbar from './components/Navbar'
import About from './pages/About'
import {Routes, Route} from 'react-router-dom'
function App() {

  return (
    <>
        <Navbar/>
        <div className="main">
            <Routes>
                <Route path='/' element={<About />} />
            </Routes>
        </div>
      
    </>
  )
}

export default App
