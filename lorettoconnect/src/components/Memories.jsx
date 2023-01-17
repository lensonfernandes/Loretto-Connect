import React from 'react'

import infant1 from '../assets/infant1.jpg'
import infant2 from '../assets/infant2.jpg'
import infant3 from '../assets/infant3.jpg'
import infant4 from '../assets/infant4.jpg'
import infant5 from '../assets/infant5.jpg'
import infant6 from '../assets/infant6.jpg'
import MemoriesCard from './MemoriesCard'

const Memories = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 '>
        <MemoriesCard bg={infant1} />
        <MemoriesCard bg={infant2} />
        <MemoriesCard bg={infant3} />
        <MemoriesCard bg={infant4} />
        <MemoriesCard bg={infant5} />
        <MemoriesCard bg={infant6} />

        
    </div>
  )
}

export default Memories