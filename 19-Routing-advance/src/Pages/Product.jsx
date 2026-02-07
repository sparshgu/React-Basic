import React from 'react'
import {Link,Outlet} from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div className='flex justify-center'>
            <Link to="/product/women" className='text-2xl font-bold text-gray-500 hover:text-gray-700'>Women</Link>
            <Link to="/product/man" className='text-2xl font-bold text-gray-500 hover:text-gray-700 ml-10'>Man</Link>
            <Link to="/product/kids" className='text-2xl font-bold text-gray-500 hover:text-gray-700 ml-10'>Kids</Link>
        </div>
        <Outlet />
        
    </div>
  )
}

export default Product