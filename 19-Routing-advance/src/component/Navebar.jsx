import React from 'react'
import {Link} from 'react-router-dom'

const Navebar = () => {
  return (
    <div className='bg-gray-800 p-4 flex justify-between items-center'>
        <h2 className='text-3xl font-bold'>Prty zOne </h2>
        <div className='flex gap-8'>
            <Link to="/home" className='hover:text-gray-400 text-xl font-bold'>Home</Link>
            <Link to="/about" className='hover:text-gray-400 text-xl font-bold'>About</Link>
            <Link to="/contact" className='hover:text-gray-400 text-xl font-bold'>Contact</Link>
            <Link to="/product" className='hover:text-gray-400 text-xl font-bold'>Product</Link>
        </div>
    </div>
  )
}

export default Navebar