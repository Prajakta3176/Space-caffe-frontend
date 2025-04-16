import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router';

export default function SignIn() {
    const [userData, setUserData] = useState({
        email: "",
        number : "",
        password : ""
    })

    const [loginWithNumber, setLoginWithNumber] = useState(false);
    const navigate = useNavigate()



    const handleChange = (e)=>{
        const {name, value} = e.target;
        setUserData((prev)=>({
            ...prev, [name] : value
        }))
    }
    const handleSubmit = (e)=>{
        
        e.preventDefault();
        const fetch = async()=>{
            try{
            const res = await axios.post('http://localhost:8080/signin',userData);
            alert(res.data);
            console.log(res.data);
            localStorage.setItem("id" , res?.data?.id);
            localStorage.setItem("token" , res?.data?.token);
            navigate('/')
            }catch(err){
                console.log(err.response.data);
                alert(err.response.data.message)
            }
        }

        fetch();
        setUserData({
            email: "",
            number : "",
            password : ""
        })
    }

    const handleNumber = (e)=>{
        e.preventDefault()
        console.log(loginWithNumber);
        setLoginWithNumber(!loginWithNumber)
    }


  return (
    <div className=' h-screen w-full flex items-center justify-center'>
        <div className='w-[80%] h-auto p-8 bg-white rounded'>
                   <div className='w-full md:w-4/6 lg:w-3/6 flex flex-col gap-3'>
                    <h1 className='font-bold text-blue-400 text-3xl lg:text-4xl'>Sign in</h1>
                    <form action="" className='flex flex-col gap-6 w-full'>                       

                        {
                            loginWithNumber ? 
                            (<div className='flex flex-col w-full'>
                                {/* <label htmlFor="number">Number</label> */}
                                <input onChange={handleChange} className='bg-blue-200 p-4 rounded' id='number' name='number' type="number" placeholder='Number' value={userData.number}  />
                                </div>
                            ) : (
                                <div className='flex flex-col w-full'>
                                {/* <label htmlFor="email">Email</label> */}
                                <input onChange={handleChange} className='bg-blue-200 p-4 rounded' id='email' name='email' type="email" placeholder='Email' value={userData.email}  />
                                </div>
                            )

                        }
                                               
                        
                        <div className='flex flex-col w-full'>
                            {/* <label htmlFor="password">Password</label> */}
                            <input onChange={handleChange} className={`bg-blue-200 p-4 rounded`} id='password' name='password' type="password" placeholder='Password' value={userData.password}  />
                        </div>

                        <button onClick={handleSubmit} className='bg-blue-500 rounded p-4 text-white font-semibold text-xl hover:bg-blue-600 hover:rounded-4xl transition-all duration-400'>Sign in</button>

                        <button onClick={handleNumber} className='text-blue-900 font-semibold hover:text-blue-700'>Sign in with {!loginWithNumber ? 'Number' : 'Email'}</button>
                        <div className='flex items-center gap-1'>
                        <div className='h-[1px] w-[50%] text-black bg-black'></div> Or <div className='h-[1px] w-[50%] text-black bg-black'></div>
                        </div>
                        <Link  to='/signup' className='text-center text-blue-950 font-bold'>Create a new account </Link>
                    </form>
                   </div>
                   <div className='hidden md:w-2/6 lg:w-3/6'></div>
        </div>
    </div>
  )
}
