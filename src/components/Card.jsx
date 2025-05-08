import React from "react";
import { Link } from "react-router";


const Card = ({data}) => {
  return (
    <Link to='/main-menu' className="relative group backdrop-blur-sm bg-[#0b0f2f]/40 shadow-[0_0_15px_rgba(0,0,0,0.25)] shadow-blue-50 text-white p-4 rounded-2xl  w-56 h-72 overflow-hidden">
      {/* <div className="absolute top-2 right-2 w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 5v14M5 12h14"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div> */}

      <div className="relative mt-2 h-40 w-full flex items-center justify-center mb-4">
        {/* Middle Image */}
        <img
          src={data?.image1}
          alt="Art 2"
          className="absolute z-10 top-5 rotate-8 w-20 h-20 rounded-xl object-cover object-center transition-transform duration-300 group-hover:-translate-y-2"
        />

        {/* Left Image */}
        <img
          src={data?.image2}
          alt="Art 1"
          className="absolute left-6 top-15 -rotate-6   z-0 w-20 h-20 rounded-xl object-cover object-center transition-transform duration-300 group-hover:-translate-x-4 group-hover:-translate-y-1"
        />

        {/* Right Image */}
        <img
          src={data?.image3}
          alt="Art 3"
          className="absolute right-6 top-15 rotate-6 z-0 w-20 h-20 rounded-xl object-cover object-center transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-1"
        />
      </div>

      <p className="absolute  left-1/2 -translate-x-1/2 text-lg text-amber-300 font-medium">{data?.name}</p>
    </Link>
  );
};

export default Card;
