import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setData] = useState([])

  const getData = async () =>{ 

   const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
    console.log(response.data);
    
   setData(response.data)
  }

  return (
    <div>
      <button onClick={getData} className='text-bold text-xl text-gray-500 p-10 border rounded-full hover:bg-gray-700 active:scale-95'>get data</button>
      <div>
          {data.map(function(elem,idx){

            return <h3 className='flex flex-col gap-2 bg-gray-300 p-4 m-2 rounded-lg'> {idx} <br /> Hello <br /> {elem.name} <br /> {elem.email} <br /> {elem.body}  <br /> </h3>
          })}
      </div>
    </div>
  )
}

export default App