import React from 'react'
import hero from '../assets/hero.png'
import think from '../assets/think.png'
import { Link } from 'react-router'

export default function Hero() {
  return (
    <div id='home' className=' w-full md:w-[70%] p-10 flex flex-col-reverse md:flex-row items-center'>
       <div className='w-full md:w-3/6 flex flex-col justify-center gap-6 md:gap-10'>
       <h1 className='text-white text-3xl md:text-5xl font-bold'>Dive into Delights Of Delectable <span className='text-amber-600'>Food</span></h1>
       <p className='text-white text-md md:text-xl text-start'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
       <Link to='/main-menu' className='text-white border-2 border-blue-600 w-max px-6 py-3 rounded-xl bg-black font-semibold hover:rounded-4xl transition-all duration-300'>Explore Menu</Link>

       </div>
       <div className='w-full md:w-3/6'>
       <img className='w-[70%] animate-bounce' src={think} alt="" />
       <img className='' src={hero} alt="" />
       </div>
    </div>
  )
}
