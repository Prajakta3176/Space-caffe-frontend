import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Lottie from "lottie-react";
import emptyCartAnimation from '../animation/emptyCartAnimation.json';
import orderPlaced from '../animation/orderPlaced.json';
import { Link, useNavigate } from 'react-router';
export default function Cart() {

    const [foodData, setFoodData] = useState([]);
    const [orderPopup, setOrderPopup] = useState(false);
    const navigate = useNavigate();


    const headers = {
        id : localStorage.getItem('id'),
        authorization : `Bearer ${localStorage.getItem('token')}`,
      }


      const fetch = async()=>{
        const res = await axios.get(`https://space-caffe-backend.vercel.app/api/cart/get-all-cart-items/`,{headers});
        setFoodData(res.data);
    }

    useEffect(()=>{     
        fetch();
    },[])



    const handleIncrease = async(foodid)=>{
            const headers = {
                foodid : foodid,
                id : localStorage.getItem('id'),
                authorization : `Bearer ${localStorage.getItem('token')}`,
            }

        try{
            const res = await axios.patch(`https://space-caffe-backend.vercel.app/api/cart/add-food-in-cart/`,{},{headers});
            console.log(res.data);
            fetch();
          }catch(err){
            console.log(err);
          }
    }
    const handleDecrease = async(foodid)=>{
            const headers = {
                foodid : foodid,
                id : localStorage.getItem('id'),
                authorization : `Bearer ${localStorage.getItem('token')}`,
            }

        try{
            const res = await axios.patch(`https://space-caffe-backend.vercel.app/api/cart/decrease-quantity-of-item`,{},{headers});
            console.log(res.data);
            fetch();
          }catch(err){
            console.log(err);
          }
    }

    const handleRemove = async(foodid)=>{
            const headers = {
                foodid : foodid,
                id : localStorage.getItem('id'),
                authorization : `Bearer ${localStorage.getItem('token')}`,
            }

        try{
            const res = await axios.patch(`https://space-caffe-backend.vercel.app/api/cart/remove-food-from-cart`,{},{headers});
            console.log(res.data);
            fetch();
          }catch(err){
            console.log(err);
          }
    }


    const handlePlaceOrder = async()=>{
        try{
            const res = await axios.patch(`https://space-caffe-backend.vercel.app/api/order/place-order`,{},{headers});
            console.log(res.data);
            fetch();

            setOrderPopup(true); // show popup
            setTimeout(() => {
              setOrderPopup(false); // hide after 3 seconds
            navigate('/order-history');

            }, 8000);
        }catch(err){
            console.log(err);
        }
    }

    console.log(foodData);
  return (
    <>

        {/* {

        !foodData && (
        <div className="flex flex-col h-screen items-center justify-center mt-10">
            <Lottie animationData={loader} loop={true} style={{ height: 100 }} />
        </div>
        )
        } */}

        {orderPopup && (
        <div className="flex flex-col h-screen items-center justify-center mt-10">
        <Lottie animationData={orderPlaced} loop={true} style={{ height: 250 }} />
        <h3 className="text-2xl animate-pulse text-zinc-400">Order placed successfully 🪐</h3>
       
    </div>
        )}


        {foodData.length === 0 && (
        <div className="flex flex-col min-h-screen items-center justify-center mt-10">
            <Lottie animationData={emptyCartAnimation} loop={true} style={{ height: 250 }} />
            <h3 className="text-2xl text-zinc-400">Your cart is feeling lonely 🛸</h3>
            <p className="text-zinc-500">Add some delicious items to fuel your space journey!</p>
        </div>
        )}
      {
        foodData && (foodData.length > 0) && (<div className="min-h-screen px-4 pt-15 flex flex-col items-center  text-white">      
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 tracking-widest text-zinc-200">🛒 Your Galactic Cart</h2>
            
            <div className=" relative w-full max-w-4xl space-y-6">
      {/* bg-[#0b0f2f] */}
            <div className=" inset-0  backdrop-blur-sm rounded-2xl z-0">
            {foodData.map((item, index) => (
                <div key={index} className="relative rounded-2xl p-4 sm:p-6 sm:w-full flex flex-col sm:flex-row items-center sm:items-start gap-6 overflow-hidden backdrop-blur-sm bg-[#0b0f2f]/60 shadow-lg mb-5">
                  
                  {/* Glass layer is already in the tailwind (no need to split into absolute/z-10 if no background image inside) */}
      
                  {/* Image */}
                  <Link to={`/food-details/${item?.food?._id}`} className="w-[90px] h-[90px] flex-shrink-0 bg-white rounded-xl p-1">
                    <img
                      src={item?.food?.image}
                      alt={item?.food?.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </Link>
      
                  {/* Info */}
                  <div className="flex-grow text-center sm:text-left">
                    <Link to={`/food-details/${foodData?._id}`} className="text-lg font-semibold text-zinc-200 hover:underline transition-all duration-300">{item?.food?.name}</Link>
                    <p className="text-sm text-zinc-400 mt-1">{item?.food?.description?.slice(0, 60)}...</p>
                    <p className="text-zinc-300 font-medium mt-2">₹ {item?.food?.price}</p>
                  </div>
      
                  {/* Controls */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex gap-2 items-center">
                      <button onClick={()=>{handleDecrease(item?.food?._id)}} className="bg-zinc-600 hover:bg-zinc-500 px-3 py-1 rounded-full text-white text-lg flex items-center justify-center">−</button>
                      <span className="text-zinc-200 font-semibold">{item?.quantity}</span>
                      <button onClick={()=>{handleIncrease(item?.food?._id)}} className="bg-zinc-600 hover:bg-zinc-500 px-3 py-1 rounded-full text-white text-lg flex items-center justify-center">+</button>
                    </div>
                    <button onClick={()=>{handleRemove(item?.food?._id)}} className="text-red-400 text-sm hover:underline">Remove</button>
                  </div>
                </div>
              ))}

              {/* 🚀 Place Order Button */}
                <div className="mt-10 w-full flex justify-end">
                    <button onClick={handlePlaceOrder} className="px-8 py-3 bg-gradient-to-r from-[#0b0f2f] to-blue-900 hover:from-blue-800 hover:to-[#0b0f2f] text-white font-bold rounded-full shadow-lg tracking-wider text-lg transition-all duration-300 animate-pulse">
                        Place Your Order
                    </button>
                </div>
            </div>                 
        </div>
        
    </div>
            )
      }
    </>     
  )
}
