import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { use } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [userData, setUserData] = useState([])

  const [index, setIndex] = useState(1)

  const getData = async () => {
   const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=28`)
   setUserData(response.data);
  }

  useEffect(function(){
    getData();
  },[index])

  let printUserData = <h3 className='text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold'>Loding.....</h3>

  if(userData.length>0){
    printUserData = userData.map(function(elem,idx){

      return <div key={idx}>
        <a href={elem.url} target='_black'>
          <div  className='h-40 w-44 overflow-hidden rounded-xl'>
        <img className='h-full w-full rounded-xl object-cover' src={elem.download_url} alt={elem.author} />
      </div>
        <h2 className='text-center text-bold  mt-2 text-sm'>{elem.author}</h2>
        </a>
      </div>
    })
  }
  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>

      <div className='flex flex-wrap gap-4 p-10'>
        {printUserData}
      </div>

      <div className='flex justify-center gap-6 item-center p-4'>
        <button
          style={{opacity: index == 1 ? 0.6 : 1}}
        className='bg-amber-400 text-black cursor-pointer active:scale-95 rounded text-sm px-4 py-2  font-semibold'
         onClick={()=>{
            if(index>1){
              setIndex(index-1)
              setUserData([])
            }
         }}
        >
          Prev
          </button>
          <h4 className='text-white font-semibold'>Page {index}</h4>
        <button className='bg-amber-400 text-black cursor-pointer active:scale-95 rounded px-4 text-sm py-2 font-semibold'
          onClick={()=>{
            setIndex(index+1)
            setUserData([])
         }}
        >
        Next
        </button>
      </div>
    </div>

    
  )
}

export default App