import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaUserAstronaut } from "react-icons/fa";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";

export default function Navbar() {
  const activeLinkStyle = 'text-amber-500 border-b-2 border-amber-500 pb-1';

  return (
    <div className='h-[70px] w-full text-white fixed flex items-center justify-around py-4 px-1 z-40 p-10'>
        <div className='text-2xl font-bold'>Logo</div>
        
        <nav className='flex items-center gap-10 text-xl'>
            <a href='/' className={({ isActive }) => isActive ? activeLinkStyle : ''}>Home</a>
            <a href='#menu' className={({ isActive }) => isActive ? activeLinkStyle : ''}>Menu</a>
            <a href='#contact' className={({ isActive }) => isActive ? activeLinkStyle : ''}>Contact</a>
            <a href='#about-us' className={({ isActive }) => isActive ? activeLinkStyle : ''}>Testimonials</a>
        </nav>

        <nav className='flex items-center gap-10'>
            <NavLink to='/cart' className={({ isActive }) => isActive ? activeLinkStyle : ''}>
              <FaCartFlatbedSuitcase size={25} />
            </NavLink>

            <NavLink to='/profile' className={({ isActive }) => isActive ? activeLinkStyle : ''}>
              <FaUserAstronaut size={25}/>
            </NavLink>

            <NavLink to='/signin' className='bg-amber-700 text-white font-semibold rounded-3xl py-2 px-4'>
              Sign in
            </NavLink>
        </nav>
    </div>
  )
}
