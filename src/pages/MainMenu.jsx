import React, { useEffect, useState } from 'react'
import axios from 'axios';
import FoodCard from '../components/FoodCard/FoodCard';

export default function MainMenu() {

    const [menuData , setMenuData] = useState([]);
    useEffect(()=>{

        const fetch = async()=>{
                const res = await axios.get('http://localhost:8080/api/food/get-all-food-items');
                console.log(res.data.data);
                setMenuData(res.data.data);
        }

        fetch();

    },[])
  return (
    <div className='flex flex-wrap items-center justify-center gap-x-10 gap-y-20 h-auto py-20 px-5'>
        
        {
            menuData.map((item)=>(
                <FoodCard foodData={item}/>
            ))
        }
    </div>
  )
}
