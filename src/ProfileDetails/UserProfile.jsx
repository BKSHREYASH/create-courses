import React, { useState, useEffect, useContext } from 'react'
import toast from 'react-hot-toast';
import { AuthContext } from '../ContextApi/Context';

const UserProfile = () => {
   let {userData} = useContext(AuthContext);
   console.log(userData);
   
      let [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        age: "",
        phoneNumber: "",
      })

      let {firstName, lastName, email, age, phoneNumber} = state;
    
      let handleSubmit = async (e) => {
    e.preventDefault();
      console.log(state);
      
    
  }

  let handleChange = (e) => {
    let {name, value} = e.target;
    setState({...state, [name]: value})
  }

  return (
    <>
        <main className='w-[100vw] h-[100vh] bg-black/80 flex justify-center items-center'>
            <section className='h-[85vh] w-[50vh] bg-black rounded text-white p-3'>
                <form action="" onSubmit={handleSubmit} className='flex flex-col p-3 gap-4 text-[20px]'>
                    <div className='flex flex-col gap-2'>
                                <label htmlFor="">First Name:</label>
                                <input type="text" name="firstName" id="" value={state.firstName} onChange={handleChange} className='border border-gray-500 rounded p-1' placeholder={userData.firstName}/>
                              </div>
                              <div className='flex flex-col gap-2'>
                                <label htmlFor="">Last Name:</label>
                                <input type="text" name="lastName" id="" value={state.lastName} onChange={handleChange} className='border border-gray-500 rounded p-1' placeholder={userData.lastName}/>
                              </div>
                              <div className='flex flex-col gap-2'>
                                <label htmlFor="">Email Address:</label>
                                <input type="text" name="email" id="" value={state.email} onChange={handleChange} className='border border-gray-500 rounded p-1' placeholder={userData.email}/>
                              </div>
                              <div className='flex flex-col gap-2'>
                                <label htmlFor="">Age</label>
                                <input type="Number" name="age" id="" value={state.age} onChange={handleChange} className='border border-gray-500 rounded p-1' placeholder='Age'/>
                              </div>
                              <div className='flex flex-col gap-2'>
                                <label htmlFor="">Phone Number</label>
                                <input type="Number" name="phoneNumber" id="" value={state.phoneNumber} onChange={handleChange} className='border border-gray-500 rounded p-1' placeholder='Phone Number'/>
                              </div>
                              
                              
                              
                              <button className='bg-green-500 p-1.5 text-black rounded'>Update</button>
                </form>
            </section>
        </main>
    </>
  )
}

export default UserProfile