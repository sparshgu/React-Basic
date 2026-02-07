import React from 'react'
import Navebar from './component/Navebar'
import Footer from './component/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Contect from './Pages/Contect'
import Product from './Pages/Product'
import NotFound from './Pages/NotFound'
import Man from './Pages/Man'
import Women from './Pages/Women'
import {Route,Routes} from 'react-router-dom'
import Kids from './Pages/Kids'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navebar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contect />} />
        <Route path="/product" element={<Product />}> 
          <Route path="women" element={<Women />} />
          <Route path="man" element={<Man />} />
          <Route path="kids" element={<Kids />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App