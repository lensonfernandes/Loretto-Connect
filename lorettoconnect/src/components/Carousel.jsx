import React , {useState} from 'react'
import {BsArrowLeftSquareFill, BsArrowRightSquareFill} from 'react-icons/bs'


const sliderData = [
    {
        url: 'https://images.unsplash.com/photo-1673831792426-8cedbe848c34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        url: 'https://images.unsplash.com/photo-1673741479014-1eb0bae54a7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        url: 'https://images.unsplash.com/photo-1673809625354-36867021fea1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    },
]

const Carousel = () => {

    let [slide, setSlide] = useState(0);
    const length = sliderData.length;

    const prevSlide = () => {
        setSlide(slide === length -1 ? 0: slide + 1)
    }

    const nextSlide = () => {

        setSlide(slide === 0 ? length-1 : slide-1)

    }

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center bg-slate-100">
        <BsArrowLeftSquareFill  onClick={prevSlide} className='absolute  top-[50%] text-3xl text-white cursor-pointer left-8 bg-slate-900 rounded-md'/>
        <BsArrowRightSquareFill  onClick={nextSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer right-8 bg-slate-900 rounded-md'/>
        {sliderData.map((item, index)=>(
            <div className={index === slide ? 'opacity-100' : 'opacity-0'}> 
              { index === slide && ( <img className='w-full rounded-md ' src={item.url} alt='' />)}
            </div>
        ))}
    </div>
  )
}

export default Carousel