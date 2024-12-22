import React from 'react'
import './Navbar.css'
import Home from '../Home/Home'


function Navbar() {
  return (
    <>
    <nav >
    <ul >
      <li><span>ABOUT</span></li>
      <li><span>PROJECT</span></li>
      <li><span>Portfolio</span></li>
      <li><span>OPTIONAL</span></li>
      <button>Contect</button>
    </ul>
  </nav>
  <Home/>
    </>
  )
}

export default Navbar








