import React from 'react'

function MemoriesCard(props) {
  return (
    <div className='relative'>
    <img src={props.bg} alt=""  className=" w-full h-full object-cover"/>
    <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 text-2xl text-white font-bold absolute '>Infant 1</p>
    </div>
    </div>
   
  )
}

export default MemoriesCard