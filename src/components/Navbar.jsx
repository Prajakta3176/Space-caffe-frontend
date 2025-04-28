import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FaUserAstronaut } from "react-icons/fa";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/auth';
import { TiThMenu } from "react-icons/ti";
import history from '../assets/order-history.png'
import { FaHourglassHalf } from "react-icons/fa6";

export default function Navbar() {
  const activeLinkStyle = 'text-amber-500 border-b-2 border-amber-500 pb-1';
  const isLoggedIn = useSelector((state => state.auth.isLoggedIn));
  const [isMobile, setIsMobile] = useState(window.innerWidth <=  767);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  // console.log(isLoggedIn);

  useEffect(()=>{
    const handleResize=()=>{
       setIsMobile(window.innerWidth <=  767)
     }
     window.addEventListener('resize', handleResize);
 
     return () => {
       window.removeEventListener("resize", handleResize);
     };
   },[isMobile])
 
   const handleMenu = ()=>{
     if(isMenuOpen){
       setIsMenuOpen(false);
     } else{
       setIsMenuOpen(true);
     }
   }

  const handleSignOut = ()=>{
    alert("Yo have been signed out")
    dispatch(authActions.logout())
    localStorage.removeItem('id');
    localStorage.removeItem('token');
  }


  return (
    <>
    <div className={`h-[70px] w-full text-white fixed flex items-center ${isMobile ? "justify-between px-10" : "justify-around"}  py-4 px-1 z-40 p-10`}>
        <div className='text-2xl font-bold'>Logo</div>
        
        <nav className={`${isMobile ? "hidden" : "flex"}  items-center gap-10 text-xl scroll-smooth`}>
            <a href='/' className={`hover:text-amber-500 hover:border-b-2 hover:border-amber-500 hover:pb-1 transition-all duration-300`}>Home</a>
            <a href='/main-menu' className={`hover:text-amber-500 hover:border-b-2 hover:border-amber-500 hover:pb-1 transition-all duration-300`}>Menu</a>
            {/* <a href='#footer' className={`hover:text-amber-500 hover:border-b-2 hover:border-amber-500 hover:pb-1 transition-all duration-300`}>Contact</a> */}
            <a href='#testimonials' className={`hover:text-amber-500 hover:border-b-2 hover:border-amber-500 hover:pb-1 transition-all duration-300`}>Testimonials</a>
        </nav>

        <nav className={`${isMobile ? "hidden" : "flex"}  items-center gap-10`}>
            <NavLink to='/cart' title='Cart' className={ `${isLoggedIn ? "block" : "hidden"} hover:text-amber-500 hover:border-b-2 hover:border-amber-500 hover:pb-1 transition-all duration-300`}>
              <FaCartFlatbedSuitcase size={25} />
            </NavLink>

            <NavLink to='/profile' title='Profile' className={`${isLoggedIn ? "block" : "hidden"} hover:text-amber-500 hover:border-b-2 hover:border-amber-500 hover:pb-1 transition-all duration-300`}>
              <FaUserAstronaut size={25}/>
            </NavLink>

            <NavLink to='/order-history' title='Order history' className={`${isLoggedIn ? "block" : "hidden"} hover:text-amber-500 hover:border-b-2 text-white hover:border-amber-500 hover:pb-1 transition-all duration-300`}>
              <FaHourglassHalf size={20} />
            </NavLink>

            {
              !isLoggedIn ? (
                <NavLink to='/signin' className='bg-amber-700 text-white font-semibold rounded-3xl py-2 px-4 hover:text-blue-950 hover:bg-white transition-all duration-300'>
                     Sign in
                 </NavLink>
              ) : (
                <button onClick={handleSignOut} className='bg-amber-700 text-white font-semibold rounded-3xl py-2 px-4 hover:text-blue-950 hover:bg-white transition-all duration-300'>Sign out</button>
              )
            }
        </nav>

        <button onClick={handleMenu} className={`${isMobile ? "block"  : 'hidden'}  text-2xl hover:text-zinc-300 transition-all duration-300`}>
            <TiThMenu />
            </button>
    </div>

     {/* Mobile Menu Overlay */}
     {
      isMobile && (
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} fixed top-0 left-0 w-full h-screen bg-blue-80 backdrop-blur-xl text-white z-50 flex-col items-center justify-center text-2xl gap-8`}>
          <a href='/' onClick={handleMenu} className='hover:text-amber-500'>Home</a>
          <a href='/main-menu' onClick={handleMenu} className='hover:text-amber-500'>Menu</a>
          {/* <a href='#footer' onClick={handleMenu} className='hover:text-amber-500'>Contact</a> */}
          <a href='#testimonials' onClick={handleMenu} className='hover:text-amber-500'>Testimonials</a>

          <NavLink to='/cart' onClick={handleMenu} className={`hover:text-amber-500 ${isLoggedIn ? "block" : "hidden"}`}>
            <FaCartFlatbedSuitcase size={28} />
          </NavLink>
      
          <NavLink to='/profile' onClick={handleMenu} className={`hover:text-amber-500 ${isLoggedIn ? "block" : "hidden"}`}>
            <FaUserAstronaut size={28} />
          </NavLink>

          <NavLink to='/order-history' onClick={handleMenu} className={`hover:text-amber-500 ${isLoggedIn ? "block" : "hidden"}`}>
           <FaHourglassHalf />
          </NavLink>

          {!isLoggedIn ? (
            <NavLink to='/signin' onClick={handleMenu} className='bg-amber-700 text-white font-semibold rounded-3xl py-2 px-6 hover:text-blue-950 hover:bg-white transition-all duration-300'>
              Sign in
            </NavLink>
          ) : (
            <button onClick={() => { handleSignOut(); handleMenu(); }} className='bg-amber-700 text-white font-semibold rounded-3xl py-2 px-6 hover:text-blue-950 hover:bg-white transition-all duration-300'>
              Sign out
            </button>
          )}
        </div>
      )
      }
    </>
  )
}
