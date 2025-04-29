import React from 'react'

export default function NewCard({ newData, direction , textAlign, imgPosition }) {
  return (
    <>
    {/*  for laptop */}
    <div className={`hidden md:flex ${direction} items-center justify-center gap-10 mx-auto w-[90%]`}>
      <div className={`w-2/6 flex flex-col gap-5 justify-center ${textAlign}`}>
        <h2 className='newHead text-amber-500 text-3xl'>Newly Added</h2>
        <h1 className='text-4xl text-white font-semibold'>{newData.heading}</h1>
        <p className='text-white font-light'>{newData.desc}</p>
        <div className={`${imgPosition} flex`}>
          <p className='text-white bg-blue-950 py-2 px-5 w-max rounded-3xl font-light'>₹ {newData.price}/-</p>
        </div>
      </div>
      <div className={`w-4/6 flex ${imgPosition}`}>
        <img className='max-w-[60%]' src={newData.image} alt="burger" />
      </div>
    </div>    


{/* for mobile */}
    <div className="flex flex-col md:hidden items-center text-center px-6">
      <h2 className="text-amber-400 newHead italic text-3xl">Newly Added</h2>
      <h1 className="text-white text-2xl font-bold">{newData.heading}</h1>
      <p className="text-white font-light mt-2">{newData.desc}</p>
      <p className="text-white bg-blue-950 py-1 px-4 rounded-3xl font-light text-sm my-3">₹ {newData.price}/-</p>
      <img  src={newData.image} alt="burger" className="w-2/3 mx-auto animate-pulse" />
    </div>

    </>
   
  )
}
