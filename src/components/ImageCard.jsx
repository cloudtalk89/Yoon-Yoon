import React from 'react'

const ImageCard = ({src,text}) => {
  return (
    <span className='flex flex-col items-center justify-around rounded-2xl shadow-lg shadow-gray-600 p-4 gap-2 bg-violet-500 w-full md:w-40 lg:w-64'>
      <img src={src} alt="Image"  className='w-full h-auto  rounded-2xl'/>
      <p>{text}</p>
    </span>
  )
}

export default ImageCard