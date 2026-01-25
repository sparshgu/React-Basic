import React from 'react'
import 'remixicon/fonts/remixicon.css'
import HeroText from './HeroText'
import Arrow from './Arrow'


function LeftContent() {
    return (
        <div className=' flex flex-col h-full w-1/3 justify-between'>
            <HeroText/>
            <Arrow/>
            
        </div>
    )
}

export default LeftContent