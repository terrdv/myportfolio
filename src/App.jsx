import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import {Routes, Route} from 'react-router-dom'
import Projects from './pages/Projects'
function App() {

  return (
    <>
        <Navbar/>
        <div className="main">
            <Routes>
                <Route path='/' element={<About />} />
                <Route path='/projects' element={<Projects />} />
            </Routes>
        </div>
      
    </>
  )
}

export default App
