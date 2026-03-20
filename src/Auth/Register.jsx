import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  let [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  let [eye, setEye] = useState(false);
  let [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

  let [data, setData] = useState();

  let navigate = useNavigate();

  let { firstName, lastName, email, password, confirmPassword } = state;

  useEffect(() => {
      let fetching = async () => {
        let response = await fetch("http://localhost:4200/users")
        let responseData = await response.json();
        setData(responseData);
      }
  
      fetching();
    }, [])

  let handleEye = () => {
    setEye(!eye);
  }

  let handleConfirmPasswordEye = () => {
    setConfirmPasswordEye(!confirmPasswordEye);
  }

  let handleSubmit = async (e) => {
    e.preventDefault();

    let checkEmail = data?.some((x) => x.email === email);
    console.log(checkEmail);
    if(firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === "") {
      toast.error("All fields are mandatory!");
      return;
    }

    if(password !== confirmPassword) {
      toast.error("Password and Confirm Password are not same!");
      return;
    }

    if(checkEmail) {
      toast.error("Email is already Registered");
      return;
    }

    try {
      await fetch("http://localhost:4200/users", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(state)
      })
      toast.success("You have been successfully Registered");
      navigate("/login");
    }
    catch(error) {
      toast.error("Something went Wrong!")
      console.log(error);
    }
  }

  let handleChange = (e) => {
    let {name, value} = e.target;
    setState({...state, [name]: value})
  }
  return (
    <main className='w-[100vw] h-[100vh] bg-black/80 flex justify-center items-center'>
      <section className='h-[85vh] w-[50vh] bg-black rounded text-white p-3'>
        <form action="" onSubmit={handleSubmit} className='flex flex-col p-3 gap-4 text-[20px]'>
          <div className='flex flex-col gap-2'>
            <label htmlFor="">First Name:</label>
            <input type="text" name="firstName" id="" value={firstName} onChange={handleChange} className='border border-gray-500 rounded p-1' placeholder='First Name'/>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="">Last Name:</label>
            <input type="text" name="lastName" id="" value={lastName} onChange={handleChange} className='border border-gray-500 rounded p-1' placeholder='Last Name'/>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="">Email Address:</label>
            <input type="text" name="email" id="" value={email} onChange={handleChange} className='border border-gray-500 rounded p-1' placeholder='Email Address'/>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="">Password</label>
            <input type={eye ? "text" : "password"} name="password" id="" value={password} onChange={handleChange} className='border border-gray-500 rounded p-1' placeholder='Password'/>
          </div>
          <div onClick={handleEye} className='relative left-70 bottom-12'>
            {eye ? <FaEye /> : <FaEyeSlash />}
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="">Confirm Password</label>
            <input type={confirmPasswordEye ? 'text' : 'password'} name="confirmPassword" id="" value={confirmPassword} onChange={handleChange}  className='border border-gray-500 rounded p-1' placeholder='Confirm Password'/>
          </div>
          <div onClick={handleConfirmPasswordEye} className='relative left-70 bottom-12'>
            {confirmPasswordEye ? <FaEye /> : <FaEyeSlash />}
          </div>
          <button className='bg-green-500 p-1.5 text-black rounded'>Register</button>
        </form>
      </section>
    </main>
  )
}

export default Register































// import React from 'react';
// import { useState } from 'react';
// import { toast, Toaster } from 'react-hot-toast';
// import axios from 'axios';

// const Register = () => {
//   let [userName, setUserName] = useState("");
//   let [password, setPassword] = useState("");
//   let [emailId, setEmailId] = useState("");
//   let [dob, setDob] = useState("");
//   let [phoneNumber, setPhoneNumber] = useState("");
//   let [rePassword, setRePassword] = useState("");

//   let handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       let res = await axios.post("http://localhost:8000/registerDetails", {userName, password, emailId, dob, phoneNumber, rePassword})
//       toast.success("Register details added successfully!");
//     }
//     catch(err) {
//       toast.error("Could not send Register details");
//     }

//     setUserName("");
//     setPassword("");
//     setEmailId("");
//     setDob("");
//     setPhoneNumber("");
//     setRePassword("");
//   }

//   let handleUserName = (e) => {
//     setUserName(e.target.value);

//   }

//   let handlePassword = (e) => {
//     setPassword(e.target.value);

//   }

//   let handleEmailId = (e) => {
//     setEmailId(e.target.value);

//   }

//   let handleDob = (e) => {
//     setDob(e.target.value);

//   }

//   let handlePhoneNumber = (e) => {
//     setPhoneNumber(e.target.value);

//   }

//   let handleRePassword = (e) => {
//     setRePassword(e.target.value);

//   }
//   return (
//     <>
//       <div>Register</div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="userName">User Name:</label>
//       <input type="text" name="" id="userName" onChange={handleUserName} value={userName} placeholder='Enter User Name'/><br />
//       <label htmlFor="emailId">Email Id:</label>
//       <input type="email" name="" id="emailId" onChange={handleEmailId} value={emailId} placeholder='Enter Email Id'/><br />
//       <label htmlFor="dob">DOB:</label>
//       <input type="date" name="" id="dob" onChange={handleDob} value={dob} placeholder='Enter Dob'/><br />
//       <label htmlFor="phoneNumber">Phone Number:</label>
//       <input type="number" name="" id="phoneNumber" onChange={handlePhoneNumber} value={phoneNumber} placeholder='Enter Phone Number'/><br />
//       <label htmlFor="password">Password:</label>
//       <input type="password" name="" id="password" onChange={handlePassword} value={password} placeholder='Enter Password'/><br />
//       <label htmlFor="rePassword">Re-Password:</label>
//       <input type="password" name="" id="rePassword" onChange={handleRePassword} value={rePassword} placeholder='Enter Re-Password'/><br />
//       <button>Register</button>
//       </form>
//     </>
//   )
// }

// export default Register