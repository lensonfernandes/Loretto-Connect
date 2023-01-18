import React from 'react'

import oath1 from '../assets/oath-1.jpg'
import Thanks1 from '../assets/thanks1.jpg'
import LorethmaiFeast from '../assets/loretMaiFeast.jpg'
import Children from '../assets/children.jpg'
import GoGoa from '../assets/goGoa.jpg'
import Environment from '../assets/environment.jpg'
import MemoriesCard from './MemoriesCard'

const Memories = () => {
  return (
    <>
    <h2 className='max-w-[1240px] mx-auto px-4 '>Memories</h2>
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 '>
        <MemoriesCard bg={oath1} desc={"New Parish Council"} />
        <MemoriesCard bg={Thanks1} desc={"Thanksgiving Adoration"} />
        <MemoriesCard bg={LorethmaiFeast} desc={"Lorethmai Feast"} />
        <MemoriesCard bg={Children} desc={"Children's Day"} />
        <MemoriesCard bg={GoGoa} desc={"Go Goa"}  />
        <MemoriesCard bg={Environment}  desc={"Environment Day"}/>

        
    </div></>
    
  )
}

export default Memories