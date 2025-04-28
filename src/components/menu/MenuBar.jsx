import React from 'react'

export default function MenuBar({menuData}) {



  return (
    <div className='flex justify-evenly w-full text-white text-center'>
              
              {
                menuData.map((item)=>(
                    <div onClick={()=>{handleChange(item.name)}} className='flex flex-col items-center w-[50px] sm:w-[70px] md:w-[100px]'>
                    <div className='flex flex-col gap-5 w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] md:w-[100px] md:h-[100px] rounded-full bg-white'>
                      <img className='w-full h-full object-cover' src={item.image} alt="" />
                    </div>
                    <p className='font-semibold text-md'>{item.name}</p>
                </div>
                ))
              }
                
        </div>
  )
}
