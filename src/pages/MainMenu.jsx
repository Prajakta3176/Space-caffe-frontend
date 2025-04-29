import React, { useEffect, useState } from 'react'
import axios from 'axios';
import FoodCard from '../components/FoodCard/FoodCard';
import MenuBar from '../components/menu/MenuBar';
import pizza from '../assets/menuPizza.svg'

export default function MainMenu() {

    const [menuData , setMenuData] = useState([]);
    useEffect(()=>{

        const fetch = async()=>{
                const res = await axios.get('https://space-caffe-backend.vercel.app/api/food/get-all-food-items');
                console.log(res.data.data);
                setMenuData(res.data.data);
        }

        fetch();
        // handleChange();

    },[]);

    const handleChange = async(name)=>{
        const res = await axios.get(`https://space-caffe-backend.vercel.app/api/food/get-food-by-category/${name}`);
        console.log(res.data);
        setMenuData(res.data)
    }

    const Category = [
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
            name : 'Sandwitch'
        },
        {
            image: "",
            name : 'Beverages'
        }
    ];

  return (
    <>
    <div className='h-auto py-20 flex flex-col gap-20'>
        
    <div className='flex justify-evenly w-full text-white text-center'>
              
              {
                Category.map((item)=>(
                    <div onClick={()=>{handleChange(item.name)}} className='flex flex-col items-center w-[50px] sm:w-[70px] md:w-[100px] hover:scale-110 transition-all duration-500'>
                    <div className='flex flex-col gap-5 w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] md:w-[100px] md:h-[100px] rounded-full bg-white overflow-hidden  hover:animate-pulse'>
                      <img className='w-full h-full object-cover' src={pizza} alt="" />
                    </div>
                    <p className='font-semibold text-md'>{item.name}</p>
                </div>
                ))
              }
                
        </div>

        <div className='flex flex-wrap items-center justify-center gap-x-10 gap-y-20  px-5'>
            
            {
                menuData.map((item)=>(
                    <FoodCard foodData={item}/>
                ))
            }
        </div>

    </div>
    
    </>
  )
}
