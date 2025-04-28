import React from 'react'
import { Link } from 'react-router-dom';
import menuPizza from '../../assets/menuPizza.svg'

export default function FoodCard({foodData}) {
    const {image,description,name,averageRating,price} = foodData;
  return (
    <Link to={`/food-details/${foodData._id}`}>
        <div className='relative rounded-2xl p-4 sm:w-[270px] sm:h-auto flex flex-col items-center h-auto w-[60vw]'>

            {/* Background blur and opacity layer */}
            <div className="absolute inset-0 bg-[#0b0f2f] opacity-60 backdrop-blur-sm rounded-2xl z-0"></div>

            {/* Actual content */}
            <div className="relative z-10 flex flex-col items-center w-full h-full">
            <div className='bg-white hover:scale-105 transition-all duration-500 ease-in-out relative top-[-50px] rounded-full flex items-center justify-center h-[90px] w-[90px]'>
                <img className='h-[90px] w-[90px] flex items-center justify-center' src={menuPizza} alt="image"/>
            </div>
            <h2 className='tracking-widest text-xl text-zinc-200 font-semibold text-center'>{name}</h2>
            <p className='mt-4 text-sm text-center text-zinc-200'>{description.slice(0,90)}...</p>
            <div className='flex mt-5 justify-between w-full'>
                <p className='mt-2 text-zinc-200 font-semibold'>&#8377; {price}</p>
                <div className="flex items-center gap-1 text-amber-400 text-xl">
                <span className='text-2xl'>★</span>
                <span className='text-white'> {averageRating}</span>
                </div>
            </div>
            </div>

        </div>
</Link>

  )
}
