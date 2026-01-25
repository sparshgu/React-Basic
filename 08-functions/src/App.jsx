import React from 'react'

const App = () => {
  
  function btnClicked(){
    console.log('button is clicked');
  }

  return (
    <div>
      <button onClick={function(){
        console.log("Hello Everyone");
        
      }}>Click user</button>
    </div>
  )
}

export default App