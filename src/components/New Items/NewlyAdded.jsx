import React from 'react'
import NewCard from './NewCard.jsx'
import newItem from '../../assets/newItem.svg'
import orangeRing from '../../assets/sandwitch/orangeRing.png'  
import sandwitch from '../../assets/sandwitch/sandwitch.png'  
import arrow from '../../assets/sandwitch/arrow.png'  

export default function NewlyAdded() {

  const newData = [
    {
      heading : "Galactic Margherita",
      desc: "Classic margherita pizza topped with cosmic basil and meteor mozzarella.",
      price : "129",
      image : '/newlyadded1.png'
    },
    {
      heading : "Garlic Mayo Crunch Burger",
      desc: "Garlic-infused mayo, crunchy veggies, spicy patty, and soft buns – every bite hits different.",
      price : "150",
      image : '/newlyadded2.jpg'
    }
  ]

  return (
    <div  id='new-collection' className='flex flex-col mt-20 md:mt-0'>
       {/* <NewCard newData={newData[0]} direction='flex-row' textAlign='text-start' imgPosition='justify-start' /> */}


{/* card 1 */}
      <div className={`flex flex-col md:flex-row items-center justify-center gap-5 mx-auto w-[70vw]`}>
      <div className={`w-full md:w-2/6 flex flex-col gap-5 text-center md:text-start items-center md:items-start justify-center`}>
        <h2 className='newHead animate-bounce text-amber-500 text-3xl'>Newly Added</h2>
        <h1 className='text-4xl text-white font-semibold'>Orbital Club Sandwich</h1>
        <p className='text-white font-light'>Multi-layered sandwich orbiting with cosmic flavors.</p>
        <div className={`flex`}>
          <p className='text-white bg-blue-950 py-2 px-5 w-max rounded-3xl font-light'>₹ 9.99/-</p>
        </div>
      </div>

      <div className={`w-full md:w-4/6 flex items-center justify-center relative` }>
        <img className='w-full animate-[spin_10s_linear_infinite]' src={orangeRing} alt="burger" />
        <img className='w-[70%] absolute' src={sandwitch} alt="burger" />
        <img className='w-[70%] -left-10 -bottom-4 animate-pulse absolute' src={arrow} alt="burger" />

      </div>
    </div> 

{/* card 2 */}
    <div className={` flex flex-col md:flex-row-reverse items-center justify-center md:gap-5 mx-auto w-[70vw]`}>
      <div className={`w-full md:w-2/6 flex flex-col gap-5 text-center md:text-start items-center md:items-start justify-center`}>
        <h2 className='newHead animate-bounce text-amber-500 text-3xl'>Newly Added</h2>
        <h1 className='text-4xl text-white font-semibold'>Comet Double Cheese Burger</h1>
        <p className='text-white font-light'>Twin patties with double cheese zooming into your mouth!</p>
        <div className={`flex`}>
          <p className='text-white bg-blue-950 py-2 px-5 w-max rounded-3xl font-light'>₹ 13.99/-</p>
        </div>
      </div>
      <div className={`w-full md:w-4/6 flex items-center justify-center relative` }>
        <img className='w-full animate-[spin_10s_linear_infinite]' src={orangeRing} alt="burger" />
        <img className='w-[40%] absolute' src={newItem} alt="burger" />
        <img className='w-[70%] -left-10 -bottom-4 animate-pulse absolute' src={arrow} alt="burger" />

      </div>
    </div> 

      {/* <NewCard newData={newData[1]} direction='flex-row-reverse' textAlign='text-end' imgPosition='justify-end' /> */}
    </div>
  )
}
