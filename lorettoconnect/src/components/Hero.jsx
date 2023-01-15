import React from 'react'
import lorettoHero from '../assets/lorettoHero.mp4'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
        <video className='w-full h-full object-cover ' src={lorettoHero}  autoPlay loop muted/>
    </div>
  )
}

export default Hero