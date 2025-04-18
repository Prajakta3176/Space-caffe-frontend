
import React from 'react'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { BrowserRouter as Router , Routes, Route } from 'react-router';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';


export default function App() {
  return (
    <>
        <div className='mainBody h-[100vh] bg-black overflow-x-hidden'>
            <Navbar/>

            <div className='mt-10'>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route path='/signin' element={<SignIn/>} />
                <Route path='/signup' element={<SignUp/>} />
                
            </Routes>

            </div>
          <Footer/>
            {/* footer */}
        </div>
    </>
  )
}
