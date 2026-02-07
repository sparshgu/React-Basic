import React, { useState } from 'react'
import Navebar from './component/Navbar'

const App = () => {

  const [theme, setTheme] = useState("light")
  return (
    <div>
      <h1>Theme is {theme}</h1>
      <Navebar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App