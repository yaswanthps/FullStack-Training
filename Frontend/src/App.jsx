import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Skills from'./Skills.jsx'
import Welcome from './Welcome.jsx'
import Navbar from './Components/Navbar.jsx'
import {Route , Routes} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Services from './Pages/Services.jsx' 
import State from './hooks/State.jsx'
import Form from './hooks/Form.jsx'
import Effect from './hooks/Effect.jsx'
//import './App.css'

function App() {
 

  return (
    <>
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/state' element={<State/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/effect' element={<Effect/>}/>
    </Routes>
    </div>
    </>

  )
}

export default App
