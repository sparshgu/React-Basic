import React from 'react'
import Card from './assets/components/card'

function App() {
  return (
    <div className='parent'>
      <Card user="Prince gupta" age={22} img="https://plus.unsplash.com/premium_photo-1767721104447-a54a0a2db7fc?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="Muskan gupta" age={21} img="https://plus.unsplash.com/premium_photo-1736338574510-11a82f432258?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTV8fHxlbnwwfHx8fHw%3D"/>
      <Card user="adity gupta" age={24} img="https://images.unsplash.com/photo-1562917127-52bfc7d186ba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9vcnxlbnwwfHwwfHx8MA%3D%3D"/>
    </div>
  )
}

export default App