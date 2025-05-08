import React, { useState } from 'react'
import MenuBar from './MenuBar.jsx'
import MenuGrid from './MenuGrid.jsx'
import burgerImage1 from '../../assets/Burger/burger1.svg'
import burgerImage2 from '../../assets/Burger/burger2.svg'
import burgerImage3 from '../../assets/Burger/burger3.svg'
import burgerImage4 from '../../assets/Burger/burger4.svg'
import { Link } from 'react-router'
import Card from '../Card.jsx'

export default function ShortMenu() {

    const [FoodImages, setFoodImages] = useState();

    const menuData = [
        {
            image1: "/menu/pizza1.png",
            image2 : 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_960,w_960//InstamartAssets/Receipes/veg_cheese_pizza.webp',
            image3: "/menu/pizza3.png",
            name : 'Pizza'
        },
        {
            image1: "/menu/burger1.png",
            image2 : '/menu/burger2.png',
            image3: "https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/1:1/w_2560%2Cc_limit/basically-burger-1.jpg",
            name : 'Burger'
        },
        {
            
            image1: "/menu/fries1.png",
            image2 : '/menu/fries4.png',
            image3: "/menu/fries2.png",
            name : 'French Fries'
        },
        
        {
            image1: "/menu/sand3.png",
            image2 : 'https://media.istockphoto.com/id/489768292/photo/turkey-sandwich.jpg?s=612x612&w=0&k=20&c=WQuFb0acIQfjvT1GhQdQGLSmoIKzSWfrAyn5aWvRMfo=',
            image3: "/menu/fries2.png",
            name : 'Sandwitch'
        },
        {
            image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6GX9LQunPjMojJjWmrL-O-rHkYFlDJkcIQA&s",
            image2 : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUDphybjfuVLn2Q0mAVtm5rK_Hf3-6sBw26Q&s',
            image3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiuHmGj6JWC8RxNcvny2MpaAXbB2pMUdKn-A&s",
            name : 'Beverages'
        },
    ]


  return (
    <div id='menu' className='flex flex-col gap-10 w-full items-center px-10'>
        <h1 className='reviewHead text-3xl md:text-4xl text-amber-500 font-bold text-center'>What Are You Craving Today?</h1>
        {/* <MenuBar menuData={menuData}/> */}
        <div className='flex flex-wrap gap-10 justify-center px-5 my-10'>
        {
            menuData.map((item, index)=>(
                <Card key={index} data={item}/>
            ))
        }
        </div>
        <Link to='/main-menu' className='text-lg bg-gradient-to-r from-[#0b0f2f] to-blue-900 hover:from-blue-800 hover:to-[#0b0f2f]  font-bold rounded-xl shadow-lg tracking-wider transition-all duration-500 w-max p-4  text-white  hover:bg-black  px-6'>Explore Menu</Link>
    </div>
  )
}
