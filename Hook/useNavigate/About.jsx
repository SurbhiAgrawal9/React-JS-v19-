import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate();
  const goTOHome = () => {
  navigate("/")
  }
  return (
    <div>
      <h1>About</h1>
      <button  onClick={goTOHome}> goto Home </button>
    </div>
  )
}

export default About
