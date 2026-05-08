import React from 'react'
import { Link } from 'react-router-dom'
import { FaCameraRetro, FaGift } from "react-icons/fa";
import { MdLibraryMusic, MdMarkEmailUnread } from "react-icons/md";
import CuteCamera from '../components/CuteCamera';
import CuteMusicPlayer from '../components/CuteMusicPlayer';
import CuteLetter from '../components/CuteLetter';
import CuteAnimatedGift from '../components/CuteAnimatedGift';

const SupriseSection = () => {
  return (
    <section className='min-h-dvh flex items-center justify-center flex-col gap-10 font-bold overflow-auto'>
      <h2 className='text-lg md:text-3xl text-white font-bold flex items-center justify-between p-4 z-10'><Link to="/"  className='p-2 hover:scale-110 border rounded-xl text-sm px-4 cursor-pointer bg-white text-violet-500 mr-6 transition-all duration-150'>Back</Link> <span>🎉 Birthday Gift 🎉</span></h2>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-6 p-2'>
        <Link className='flex flex-col items-center justify-between p-6 rounded-2xl bg-violet-600 z-10 gap-2 ' to='/moments'>
        <CuteCamera  className="w-24 h-24"/>
         <p className='text-white'> Favourite Moments </p>
         </Link>
        <Link className='flex flex-col items-center justify-between p-6 rounded-2xl bg-violet-600 z-10 gap-2'>
        <CuteMusicPlayer className='w-24 h-24'/> 
        <p className='text-white'>Songs About You</p>
        </Link>
        <Link className='flex flex-col items-center justify-between p-6 rounded-2xl bg-violet-600 z-10 gap-2'>
        <CuteLetter className='w-24 h-24'/>
         <p className='text-white'>A Letter To You</p>
         </Link>

       <Link className='flex flex-col items-center justify-between p-6 rounded-2xl bg-violet-600 z-10 gap-2'>
        <CuteAnimatedGift className='w-24 h-24'/> <p className='text-white'>A Small Gift</p></Link>
        
        
         
      </section>
    </section>
  )
}

export default SupriseSection;