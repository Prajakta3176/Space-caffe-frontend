import React from 'react'
import MenuBar from './MenuBar.jsx'
import MenuGrid from './MenuGrid.jsx'

export default function ShortMenu() {

    const menuData = [
        {
            image: "",
            name : 'Pizza'
        },
        {
            image: "",
            name : 'Burger'
        },
        {
            image: "",
            name : 'French Fries'
        },
        {
            image: "",
            name : 'Cold drink'
        },
        {
            image: "",
            name : 'Sandwitch'
        }
    ]

  return (
    <div id='menu' className='flex flex-col gap-10 w-full'>
        <h1 className='text-3xl text-amber-500 font-bold text-center'>OUR MENU</h1>
        <MenuBar menuData={menuData}/>
        <MenuGrid/>
    </div>
  )
}
