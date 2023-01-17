import React from 'react'

import oath1 from '../assets/oath-1.jpg'
import Thanks1 from '../assets/thanks1.jpg'
import infant3 from '../assets/infant3.jpg'
import infant4 from '../assets/infant4.jpg'
import infant5 from '../assets/infant5.jpg'
import infant6 from '../assets/infant6.jpg'
import MemoriesCard from './MemoriesCard'

const Memories = () => {
  return (
    <>
    <h2 className='max-w-[1240px] mx-auto px-4 '>Memories</h2>
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 '>
        <MemoriesCard bg={oath1} desc={"New Parish Council"} />
        <MemoriesCard bg={Thanks1} desc={"Thanksgiving Adoration"} />
        <MemoriesCard bg={infant3} />
        <MemoriesCard bg={infant4} />
        <MemoriesCard bg={infant5} />
        <MemoriesCard bg={infant6} />

        
    </div></>
    
  )
}

export default Memories