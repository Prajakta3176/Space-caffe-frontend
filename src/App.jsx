
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
import AboutUs from './pages/AboutUs.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx'



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
        <div className='mainBody starry-bg min-h-screen bg-black overflow-x-hidden flex flex-col'>
            <Navbar/>

            <div className='mt-10 flex-grow'>
            <Routes>
                <Route exact path='/home' element={<Home/>} />
                <Route path='/signin' element={<SignIn/>} />
                <Route path='/' element={<SignIn/>} />
                <Route path='/signup' element={<SignUp/>} />
                <Route path='/main-menu' element={<MainMenu/>} />
                <Route path='/food-details/:foodid' element={<ViewFoodDetails/>} />
                <Route path='/cart' element={<ProtectedRoute><Cart/></ProtectedRoute>} />
                <Route path='/order-history' element={<ProtectedRoute><OrderHistory/></ProtectedRoute>} />
                <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>} />
                <Route path='/about-us' element={<AboutUs/>} />
                
            </Routes>

            </div>
          <Footer/>
            {/* footer */}
        </div>
    </>
  )
}
