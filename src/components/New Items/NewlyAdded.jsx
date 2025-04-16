import React from 'react'
import NewCard from './NewCard.jsx'
import newItem from '../../assets/newItem.svg'


export default function NewlyAdded() {

  const newData = [
    {
      heading : "The Cheesy Overload Burger",
      desc: "Melts in your mouth with double cheese, crispy patty, soft buns, and saucy perfection.",
      price : "249",
      image : newItem
    },
    {
      heading : "Garlic Mayo Crunch Burger",
      desc: "Garlic-infused mayo, crunchy veggies, spicy patty, and soft buns – every bite hits different.",
      price : "150",
      image : newItem
    }
  ]

  return (
    <div  id='new-collection' className='flex flex-col gap-20 my-25'>
      <NewCard newData={newData[0]} direction='flex-row' textAlign='text-start' imgPosition='justify-start' />     
      <NewCard newData={newData[1]} direction='flex-row-reverse' textAlign='text-end' imgPosition='justify-end' />
    </div>
  )
}
