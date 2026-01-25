import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState({user:"Prince Gupta",age:28})

  const btnClick = () => {
    setNum(prev =>({...prev,age:50}))
  }

  return (
    <div>
      <h1> {num.user}  ,  {num.age} </h1>
      <button onClick={btnClick}>Click</button>
    </div>

  )
}

export default App