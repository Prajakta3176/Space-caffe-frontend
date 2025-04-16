import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router';

export default function SignUp() {

    const [userData, setUserData] = useState({
        fullname : "",
        email: "",
        number : "",
        password : ""
    })
    const [inCorrectPass, setIncorrectPass] = useState(false);
    const navigate = useNavigate();


    const handleChange = (e)=>{
        const {name, value} = e.target;
        setUserData((prev)=>({
            ...prev, [name] : value
        }))
    }
    const handleSubmit = (e)=>{
        
        e.preventDefault();

        if(userData.password.length < 8){
            setIncorrectPass(true);
            return ;
        }

        if(userData.number.length < 10 || userData.number.length > 10){
            return alert("Please enter valid number.")
        }

        const fetch = async()=>{
            const res = await axios.post('http://localhost:8080/signup',userData);
            console.log(res.data.message);
            alert(res.data.message);
            navigate('/signin')
        }

        fetch();
        setUserData({
            fullname : "",
            email: "",
            number : "",
            password : ""
        })
    }



  return (
    <div className=' h-screen w-full flex items-center justify-center'>
        <div className='w-[80%] h-auto p-8 bg-white rounded'>
                   <div className='w-full md:w-4/6 lg:w-3/6 flex flex-col gap-3'>
                    <h1 className='font-bold text-blue-400 text-3xl lg:text-4xl'>Sign up</h1>
                    <form action="" className='flex flex-col gap-6 w-full'>
                        <div className='flex flex-col w-full'>
                        {/* <label htmlFor="name">Name</label> */}
                        <input onChange={handleChange} className='bg-blue-200 p-4 rounded' id='name' name='fullname' type="text" placeholder='Name' value={userData.fullname} />
                        </div>

                        <div className='flex flex-col w-full'>
                        {/* <label htmlFor="email">Email</label> */}
                        <input onChange={handleChange} className='bg-blue-200 p-4 rounded' id='email' name='email' type="email" placeholder='Email' value={userData.email}  />
                        </div>

                        <div className='flex flex-col w-full'>
                        {/* <label htmlFor="number">Number</label> */}
                        <input onChange={handleChange} className='bg-blue-200 p-4 rounded' id='number' name='number' type="number" placeholder='Number' value={userData.number}  />
                        </div>
                        
                        <div className='flex flex-col w-full'>
                            {/* <label htmlFor="password">Password</label> */}
                            <input onChange={handleChange} className={`bg-blue-200 p-4 rounded ${inCorrectPass ? "border-2 border-red-600" : ""}`} id='password' name='password' type="password" placeholder='Password' value={userData.password}  />
                        </div>

                        <button onClick={handleSubmit} className='bg-blue-500 rounded p-4 text-white font-semibold text-xl hover:bg-blue-600 hover:rounded-4xl transition-all duration-400'>Sign up</button>
                        <p className='text-center font-semibold'>Already have an account ? <Link to='/signin' className='text-blue-950 hover:underline transition-all duration-300'>Sign in</Link></p>
                    </form>
                   </div>
                   <div className='hidden md:w-2/6 lg:w-3/6'></div>
        </div>
    </div>
  )
}
