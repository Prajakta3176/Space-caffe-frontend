import React, { useState } from 'react'
import MenuBar from './MenuBar.jsx'
import MenuGrid from './MenuGrid.jsx'
import burgerImage1 from '../../assets/Burger/burger1.svg'
import burgerImage2 from '../../assets/Burger/burger2.svg'
import burgerImage3 from '../../assets/Burger/burger3.svg'
import burgerImage4 from '../../assets/Burger/burger4.svg'

export default function ShortMenu() {

    const [FoodImages, setFoodImages] = useState();

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

    // const  gridImage = [
    //     {
    //         burger : {
    //             image1 : burgerImage1,
    //             image2 : burgerImage2,
    //             image3 : burgerImage3,
    //             image4 : burgerImage4,
    //         }
    //     }
    // ]

  return (
    <div id='menu' className='flex flex-col gap-10 w-full'>
        <h1 className='text-3xl text-amber-500 font-bold text-center'>OUR MENU</h1>
        <MenuBar menuData={menuData}/>
        <MenuGrid />
    </div>
  )
}
