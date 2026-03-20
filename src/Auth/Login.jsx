import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {toast, Toaster} from 'react-hot-toast';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Login = () => {
  let [state, setState] = useState({
    email: "",
    password: ""
  });
  
  let [eye, setEye] = useState(false);

  let [data, setData] = useState();
  

  let {email, password} = state;

  let navigate = useNavigate();

  useEffect(() => {
    let fetching = async () => {
      let response = await fetch("http://localhost:4200/users");
      let responseData = await response.json();
      setData(responseData);
    }

    fetching();
  }, [])
  

  let handleEye = () => {
    setEye(!eye);
  }

  let handleSubmit = async (e) => {
    e.preventDefault();

  //  let checkAuthentication = data?.some((a)=> a.email == email && a.password == password);
   let authenticationData = data?.find((a)=> a.email == email && a.password == password);
  //  console.log(checkAuthentication);

   try {
    if(authenticationData) {
      localStorage.setItem("AUTHENTICATION_DATA",JSON.stringify(authenticationData));
      toast.success("Successfully you have been logged in");
      navigate("/");
      setTimeout(()=>{
        window.location.assign("/")
      },2000)
    } else {
      toast.error("Email and Password are not matching!");
    }
   }
   catch(error) {
    toast.error("Something went Wrong!");
    console.log(error);
   }

  }
  

  let handleChange = (e) => {
    let {name, value} = e.target;
    setState({...state, [name]: value});
  }

  return (
    <>
      <main className='h-[90vh] w-[100vw] bg-black/80 flex justify-center items-center'>
          <section className='h-[40vh] w-[30vw] bg-black rounded text-white p-3'>
            <form onSubmit={handleSubmit} className='flex flex-col p-3 gap-4 text-[20px]'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="emailAddress">Email Address:</label>
                <input type="text" name="email" id="emailAddress" onChange={handleChange} value={email} placeholder='Enter Email Address' className='border border-gray-500 rounded p-1'/>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="password">Password:</label>
              <input type={eye ? 'text' : 'password'} name="password" id="password" onChange={handleChange} value={password} placeholder='Enter Password' className='border border-gray-500 rounded p-1'/>
              </div>
              <div onClick={handleEye} className='relative left-95 bottom-11'>
                {eye ? <FaEye /> : <FaEyeSlash />}
              </div>
        
              <button className='bg-green-500 p-1.5 text-black rounded'>Login</button>
      </form>
          </section>
      </main>
      
    </>
  )
}

export default Login