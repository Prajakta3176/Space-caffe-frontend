import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function ViewFoodDetails() {
  const { foodid } = useParams();
  const [foodData, setFoodData] = useState({});
  const [loading, setLoading] = useState(true);
  const isLoggedIn = useSelector((state)=> state.auth.isLoggedIn);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/food/get-food-item-by-id/${foodid}`);
        setFoodData(res.data.foodItem);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch food item:', err);
      }
    };

    fetchFood();
  }, [foodid]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[80vh] text-white text-xl">
        Loading...
      </div>
    );
  }

  const headers = {
    id : localStorage.getItem('id'),
    authorization : `Bearer ${localStorage.getItem('token')}`,
    foodid : foodid
  }

  const handleCart = async()=>{
    try{
      const res = await axios.patch(`http://localhost:8080/api/food/add-food-in-cart`,{},{headers});
      console.log(res.data);
      alert(res.data.message)
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className="w-full min-h-screen  bg-cover bg-center flex items-center justify-center px-4 py-10">
      <div className="relative rounded-2xl p-6 md:p-10 w-full max-w-5xl flex flex-col md:flex-row gap-6">
        
        {/* Glass background */}
        <div className="absolute inset-0 bg-[#0b0f2f] opacity-60 backdrop-blur-sm rounded-2xl z-0"></div>

        {/* Actual content */}
        <div className="relative z-10 text-white w-[100%] md:w-[50%]">
          <div className="bg-white p-2 rounded-xl shadow-xl hover:scale-105 transition-all duration-300 w-[100%]">
            <img
              src={foodData.image}
              alt={foodData.name}
              className="w-[200px] h-[200px] rounded-xl object-cover"
            />
          </div>
        </div>

        <div className="relative z-10 w-full md:w-1/2 text-white">
          <h1 className="text-3xl md:text-4xl font-bold tracking-widest text-zinc-200 mb-4">{foodData.name}</h1>
          <p className="text-sm text-zinc-300 mb-4">{foodData.description}</p>

          <p className="text-xl font-semibold text-zinc-200 mb-2">&#8377; {foodData.price} /-</p>

          <div className="flex items-center text-amber-400 text-xl mb-4">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i}>{i < foodData.averageRating ? '★' : '☆'}</span>
            ))}
            <span className="ml-2 text-white">{foodData.averageRating}</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button onClick={handleCart} className={`${isLoggedIn ? "block" : "hidden"} bg-amber-400 hover:bg-amber-500 text-black font-semibold py-2 px-6 rounded-xl transition-all duration-300 w-full`}>
              Add to Cart
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
