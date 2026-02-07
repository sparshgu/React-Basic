import React from 'react'
import Nav2 from './Nav2'
import { useContext } from 'react'
import {ThemeContext} from '../context/ThemeContex'


const Navbar = () => {

  const data = useContext(ThemeContext)
  console.log(data);
  
  return (
    <div className='nav'>
      <h2>Praty zOne</h2>
      <Nav2 />
    </div>
  )
}

export default Navbar