import React, { useState } from 'react'
import BirthdayCake from '../components/BirthdayCake'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const [index,setIndex]  = useState(0)
  const  messages = ["No","Are You Sure?","I Made This For You","Please Click Yes","It's A Surprise","I Promise You Will Like It","It's Something I Know You Like","Please Click Yes","I Put A Lot Of Effort Into It"]
  return (
    <section className='min-h-screen flex items-center justify-center flex-col gap-10 font-bold'>
        <h1 className="text-white text-xl md:text-4xl font-bold z-10">
          🎉 Happy Birthday! Yoon Yoon 🎉
        </h1>
        <p className="text-violet-100 text-md md:text-xl font-medium  z-10">
          ♡ I made this little birthday gift just for you ♡
        </p>
        <BirthdayCake className='m-2'/>
          <p className="text-violet-100 text-md md:text-xl font-medium text-center z-10">
    ✧ Do you want to see a little surprise made just for you? ✧
  </p>

  <span className="flex items-center justify-center gap-10 mt-6">
    
    <Link className="px-10 py-3 rounded-2xl bg-white font-semibold hover:scale-110 transition-all duration-300 cursor-pointer z-10" to='/surprise'>  
      ♡ Yes ♡
    </Link>
    {index !==8 && (
      <button className="px-10 py-3 rounded-2xl z-10 bg-white font-semibold hover:scale-110 transition-all duration-300 cursor-pointer text-sm"  onClick={()=>setIndex(index+1)} to='/surprise'>
        ✧ {messages[index]} ✧ 🥺
      </button>
    )}
  </span>

    </section>
  )
}

export default HomePage