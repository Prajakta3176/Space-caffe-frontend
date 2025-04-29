
import React, { useEffect } from 'react'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './store/auth';
import MainMenu from './pages/MainMenu';
import ViewFoodDetails from './components/FoodCard/ViewFoodDetails';
import Cart from './pages/Cart.jsx'
import OrderHistory from './pages/OrderHistory.jsx';
import Profile from './pages/Profile.jsx';



export default function App() {

  const dispatch = useDispatch();
  useEffect(()=>{
    if(localStorage.getItem('id') &&
    localStorage.getItem('token')
    ){
      dispatch(authActions.login());
    }
  },[])

  return (
    <>
        <div className='mainBody starry-bg h-[100vh] bg-black overflow-x-hidden'>
            <Navbar/>

            <div className='mt-10'>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route path='/signin' element={<SignIn/>} />
                <Route path='/signup' element={<SignUp/>} />
                <Route path='/main-menu' element={<MainMenu/>} />
                <Route path='/food-details/:foodid' element={<ViewFoodDetails/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='/order-history' element={<OrderHistory/>} />
                <Route path='/profile' element={<Profile/>} />
                
            </Routes>

            </div>
          <Footer/>
            {/* footer */}
        </div>
    </>
  )
}
