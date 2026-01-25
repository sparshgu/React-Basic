import React from 'react'

function RightCardContent(props) {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white text-xl font-semibold rounded-full h-11 w-11 flex justify-center items-center'>{props.id+1}</h2>
            <div>
              <p className=' text-shadow-2xs text-xl leading-normal text-white mb-14 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odio fugit quas tenetur enim vero! Dignissimos et totam cum odit?</p>
              <div className='flex justify-between'>
                <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                <button className='bg-blue-500 text-white font-medium px-3 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>

              </div>
            </div>
        </div>
  )
}

export default RightCardContent