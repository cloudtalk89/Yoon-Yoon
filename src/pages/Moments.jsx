import React from 'react'
import { Link } from 'react-router-dom'
import ImageCard from '../components/ImageCard';
import image from '../assets/image.png'

const Moments = () => {
  return (
    <section className='min-h-dvh flex items-center justify-center flex-col gap-10 font-bold overflow-auto'>
      <h2 className='text-lg md:text-3xl text-white font-bold flex items-center justify-between p-4 z-10'><Link to="/surprise"  className='p-2 hover:scale-110 border rounded-xl text-sm px-4 cursor-pointer bg-white text-violet-500 mr-6 transition-all duration-150'>Back</Link> <span>🎉 Happy Birthday My Baby 🎉</span></h2>
      
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-auto gap-4'>
        <ImageCard src={image} text="This is test" />
        <ImageCard src={image} text="This is test" />
        <ImageCard src={image} text="This is test" />
        <ImageCard src={image} text="This is test" />
      </section>

    </section>
  )
}

export default Moments