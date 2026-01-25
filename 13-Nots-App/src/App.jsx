import React from 'react'
import { useState } from 'react';
import { X } from 'lucide-react';


const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault(e)

    const copyTask = [...task];
    copyTask.push({title,details})

    setTask(copyTask)
    console.log(task);

    setTitle('')
    setDetails('')
  }

const deleteNotes = (idx) =>{
  const copyTask =[...task];
  copyTask.splice(idx,1);
  setTask(copyTask);
}


  return (
    <div className='h-screen lg:flex bg-black text-white '>
      <form className='flex items-start lg:w-1/2 gap-4 flex-col p-10 '
        onSubmit={(e) => {
          submitHandler(e)
        }}>
        <h1 className="text-4xl font-bold">Add Notes</h1>

        {/* PAHLA INPUT FOR HEADING  */} 
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className='px-5 w-full py-2 font-medium border-2 rounded outline-none'
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
        />
        <textarea
          type="text"
          className='px-5 h-32 w-full font-medium py-2 border-2 rounded outline-none'
          placeholder='Write Details Here' 
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
            
          }}  
          />

        <button className='bg-white active:scale-95 text-black font-medium px-5 w-full py-2 outline-none border-2 rounded'>Add Notes</button>
      </form>
      <div className=" lg:w-1/2 lg:border-l-2 border-gray-700 p-10">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className='flex flex-wrap items-start gap-5 mt-5 h-[90%] overflow-auto'>
          {task.map(function(elem,idx){

            return <div key={idx} className=" flex justify-between flex-col pt-9 px-4 pb-5 relative h-52 bg-cover w-40 text-black py-9 px-4 rounded-2xl bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <h3 className='leading-tight text-xl font-bold '>{elem.title}</h3>
              <p className='mt-4 leading-tight font-medium text-gray-600'>{elem.details}</p>
              <button onClick={()=>{
                deleteNotes(idx)
              }} className='w-full bg-red-500 cursor-pointer text-white py-1 text-white rounded font-bold active:scale-95'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App