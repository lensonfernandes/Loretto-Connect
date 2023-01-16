import React from 'react'

import infant1 from '../assets/infant1.jpg'
import infant2 from '../assets/infant2.jpg'
import infant3 from '../assets/infant3.jpg'
import infant4 from '../assets/infant4.jpg'
import infant5 from '../assets/infant5.jpg'
import infant6 from '../assets/infant6.jpg'

const PastWeek = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4'>
        <h1>Happened last week.</h1> 
        <p>Infant Jesus Feast</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img src={infant1} alt="/"  className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2'/>
             <img src={infant2} alt="/" className='w-full h-full object-cover' />
             <img src={infant3} alt="/"  className='w-full h-full object-cover'/>
             <img src={infant4} alt="/"  className='w-full h-full object-cover'/>
             <img src={infant5} alt="/" className='w-full h-full object-cover' />
             {/* <img src={infant6} alt="/" /> */}
        </div>
    </div>
  )
}

export default PastWeek