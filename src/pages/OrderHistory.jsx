import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router';

export default function OrderHistory() {
  const [orders, setOrders] = useState();

  const headers = {
    id: localStorage.getItem('id'),
    authorization: `Bearer ${localStorage.getItem('token')}`,
  }

  const fetch = async () => {
    const res = await axios.get(`https://space-caffe-backend.vercel.app/api/order/get-order-history`, { headers });
    setOrders(res.data);
    console.log(res.data);
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="min-h-screen px-4 py-16 text-white">
      <h1 className="text-3xl md:text-4xl text-center text-zinc-400 font-bold mb-10 tracking-wide">
        🛰️ Your Order History
      </h1>

      <div className="space-y-8 max-w-4xl mx-auto relative z-10">
      {orders?.map((order, index) => (
  <div
    key={index}
    className="relative rounded-2xl p-6 backdrop-blur-md bg-blue border border-white/10 shadow-md space-y-4 transition-all duration-300 hover:scale-[1.01]"
  >
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
      <h3 className="text-lg sm:text-xl font-semibold text-zinc-100">
        🚀 Order #{index + 1}
      </h3>
      <p className="text-sm text-zinc-400 mt-1 sm:mt-0">
        {new Date(order.createdAt).toLocaleString()}
      </p>
    </div>

    {/* Items inside each order */}
    <div className="flex flex-col gap-5">
      {order?.items?.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col sm:flex-row gap-4 items-center sm:items-start border-b border-white/10 pb-4 last:border-0"
        >
          <Link
            to={`/food-details/${item?.food?._id}`}
            className="flex gap-4 items-center w-full sm:w-2/3"
          >
            <img
              src={item?.food?.image}
              alt={item?.food?.name}
              className="w-20 h-20 bg-white rounded-xl object-cover flex-shrink-0 border border-white/10"
            />
            <div>
              <p className="font-semibold text-zinc-100">{item?.food?.name}</p>
              <p className="text-zinc-400 text-sm">{item?.food?.description?.slice(0, 60)}...</p>
            </div>
          </Link>

          <div className="flex flex-col items-end sm:items-center sm:text-right w-full sm:w-1/3">
            <p className="text-zinc-300">Qty: {item?.quantity}</p>
            <p className="text-zinc-300 font-semibold">₹ {item?.food?.price}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="text-right pt-2">
      <span className="text-sm font-bold text-green-400">Status: {order.status}</span>
    </div>
  </div>
))}

      </div>
    </div>
  )
}
