import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Profile() {
    const [user, setUser] = useState();
    
    const [address, setAddress] = useState({
        address : ""
    });


    const headers = {
        id: localStorage.getItem('id'),
        authorization: `Bearer ${localStorage.getItem('token')}`,
      }

    const fetch = async () => {
        const res = await axios.get(`http://localhost:8080/get-user-information`, { headers });
        console.log(res.data);
        setUser(res.data);
        setAddress({
            address : res?.data?.address
        })
      }

      useEffect(()=>{
        fetch()
      },[])

    

      const updateAddress = async()=>{
        const res = await axios.patch(`http://localhost:8080/update-address`,address, { headers });
        console.log(res.data);
        fetch();
      }
    
  return (
   <div className='w-full px-5'>
     <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/10 space-y-6 my-25">
        <h2 className="text-3xl font-bold text-center text-zinc-100">👤 Your Profile</h2>

        <div className="space-y-4">
                    <div>
                    <label className="block text-zinc-300">Full Name</label>
                    <p className="bg-zinc-800 text-white px-4 py-2 rounded-xl">{user?.fullname}</p>
                    </div>

                    <div>
                    <label className="block text-zinc-300">Email</label>
                    <p className="bg-zinc-800 text-white px-4 py-2 rounded-xl">{user?.email} </p>
                    </div>

                    <div>
                    <label className="block text-zinc-300">Phone</label>
                    <p className="bg-zinc-800 text-white px-4 py-2 rounded-xl">+91 {user?.number}</p>
                    </div>

                    <div>
                    <label className="block text-zinc-300">Address</label>
                    <textarea onChange={(e)=>{
                        setAddress((prev)=>({
                            ...prev, address : e.target.value
                        }))
                    }}
                     className="bg-zinc-800 text-white px-4 py-2 rounded-xl w-full" rows='4' value={address?.address}></textarea>
                    </div>
        </div>

        <button onClick={updateAddress}
            className="w-full mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-xl transition duration-200"
        >
            Update details
        </button>
</div>
   </div>

  )
}
