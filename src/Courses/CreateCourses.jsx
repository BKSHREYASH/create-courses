import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateCourses = () => {
    let [state, setState] = useState({
        courseName: "",
        trainerName: "",
        courseDuration: "",
        courseDescription: "",
        category: "",
    price: "",
    level: "",
    mode: "",
    startDate: "",
    endDate: "",
    certificateProvided: false
    })

    let {courseName, trainerName, courseDuration, courseDescription, category, price, level, mode, startDate, endDate, certificateProvided} = state;

    let navigate = useNavigate();

    let handleSubmit = async (e) => {
        e.preventDefault();

        if(courseName === "" || trainerName === "" || courseDuration === "" || courseDescription === ""){
            toast.error("ALL FIELDS ARE MANDATORY!");
            return;
        }

        try {

            // ---------------------


            await axios.post("http://localhost:4200/courses", state);


            // ---------------------


            // let rest = await axios.post("http://localhost:4200/courses", {courseName, trainerName, courseDuration, courseDescription})
            // await fetch("http://localhost:4200/courses", {
            //     method: "POST",
            //     headers: {"Content-Type": "application/json"},
            //     body: JSON.stringify(state)
            // })

            toast.success("You have been successfully created course!");

            navigate("/");

            setTimeout(()=>{
        window.location.assign("/")
      },2000)

        }
        catch(error) {
            toast.error("Something went Wrong!");
            console.log(error);
        }
    }

    // --------------------------

    // ✅ Handle All Input Types
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setState(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    // --------------------------

    // let handleChange = (e) => {
    //     let {name, value} = e.target;
    //     setState({...state, [name]: value});
    // }
  return (
    <>
        <main className='w-[81vw] h-[160vh] bg-black/80 flex justify-center items-center'>
            <section className='h-[140vh] w-[50vh] bg-black rounded text-white p-3'>
                <form action="" onSubmit={handleSubmit} className='flex flex-col p-3 gap-4 text-[20px]'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Course Name</label>
                    <input type="text" name="courseName" id="" placeholder='Course Name' value={state.courseName} onChange={handleChange} className='border border-gray-500 rounded p-1'/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Trainer Name</label>
                    <input type="text" name="trainerName" id="" placeholder='Trainer Name' value={state.trainerName} onChange={handleChange} className='border border-gray-500 rounded p-1'/>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Course Duration</label>
                    <input type="text" name="courseDuration" id="" placeholder='Course Duration' value={state.courseDuration} onChange={handleChange} className='border border-gray-500 rounded p-1'/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Course Description</label>
                    <input type="text" name="courseDescription" id="" placeholder='Course Description' value={state.courseDescription} onChange={handleChange} className='border border-gray-500 rounded p-1'/>
                    </div>

                    {/* -------------------- */}


                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Category:</label>
                    {/* Category */}
                    <select name="category"
                        value={state.category}
                        onChange={handleChange}
                        className="input border border-gray-500 rounded p-1">
                        <option value="" className='text-black'>Select Category</option>
                        <option value="Development" className='text-black'>Development</option>
                        <option value="Design" className='text-black'>Design</option>
                        <option value="Marketing" className='text-black'>Marketing</option>
                        <option value="Finance" className='text-black'>Finance</option>
                    </select>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Price:</label>
                    {/* Price */}
                    <input type="number" name="price"
                        placeholder="Price"
                        value={state.price}
                        onChange={handleChange}
                        className="input border border-gray-500 rounded p-1" />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Level:</label>
                    {/* Level */}
                    <select name="level"
                        value={state.level}
                        onChange={handleChange}
                        className="input border border-gray-500 rounded p-1">
                        <option value="" className='text-black'>Select Level</option>
                        <option value="Beginner" className='text-black'>Beginner</option>
                        <option value="Intermediate" className='text-black'>Intermediate</option>
                        <option value="Advanced" className='text-black'>Advanced</option>
                    </select>
                    </div>

                
                    {/* Mode (Radio Buttons) */}
                    <div className="flex gap-4">
                        <label>
                            <input type="radio" name="mode" value="Online"
                                checked={state.mode === "Online"}
                                onChange={handleChange} /> Online
                        </label>
                        <label>
                            <input type="radio" name="mode" value="Offline"
                                checked={state.mode === "Offline"}
                                onChange={handleChange} /> Offline
                        </label>
                        <label>
                            <input type="radio" name="mode" value="Hybrid"
                                checked={state.mode === "Hybrid"}
                                onChange={handleChange} /> Hybrid
                        </label>
                    </div>


                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">Start Date:</label>
                    {/* Start Date */}
                    <input type="date" name="startDate"
                        value={state.startDate}
                        onChange={handleChange}
                        className="input border border-gray-500 rounded p-1" />
                    </div>
                    
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="">End Date:</label>
                    {/* End Date */}
                    <input type="date" name="endDate"
                        value={state.endDate}
                        onChange={handleChange}
                        className="input border border-gray-500 rounded p-1" />
                    </div>

                    {/* Certificate Checkbox */}
                    <label className="flex gap-2 items-center">
                        <input type="checkbox"
                            name="certificateProvided"
                            checked={state.certificateProvided}
                            onChange={handleChange} />
                        Certificate Provided
                    </label>



                    {/* --------------------- */}


                    <button className='bg-green-500 p-1.5 text-black rounded'>Create Courses</button>
                </form>
            </section>
        </main>
    </>
  )
}

export default CreateCourses