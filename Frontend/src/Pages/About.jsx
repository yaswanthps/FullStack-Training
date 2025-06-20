import React from 'react'
import State from '../hooks/State'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <Link to='/State'>UseState Example</Link>
      <Link to='/Form'>Control Form</Link>
      <Link to='/Effect'>Effect Example</Link>
    </div>
  )
}

export default About
