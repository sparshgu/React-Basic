import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

function Page2Content() {
  return (
    <div className='pb-16 pt-5 flex items-center justify-between gap-10 h-[90vh] px-18'>
        <LeftContent />
        <RightContent />
    </div>


  )
}

export default Page2Content