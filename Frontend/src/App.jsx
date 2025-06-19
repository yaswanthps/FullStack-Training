import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Skills from'./Skills.jsx'
//import './App.css'

function App() {
 

  return (
    <>
    {/*<Welcome name='yas' place='gobi'/> */}
    <Skills skill={['React','Node','Express','MongoDB']}/>
    <h1>Hello World</h1>
    </>

  )
}

export default App
