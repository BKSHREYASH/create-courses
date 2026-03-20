import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';

const AllCourses = () => {
    let [data, setData] = useState();
    useEffect(() => {
        let fetching = async () => {
            let response = await fetch("http://localhost:4200/courses");
            let responseData = await response.json();
            console.log(JSON.stringify(responseData));
            setData(responseData);
        }

        fetching();
    }, [])

    let handleView = () => {

    }

    let handleUpdate = () => {

    }


    return (
  <section className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 py-10 px-6 w-[100vw]">
    
    <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
      All Courses
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {
        data?.map((x) => (
          <div
            key={x.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {x.courseName}
              </h2>

              <p className="text-gray-500 text-sm">
                Trainer: <span className="font-medium text-gray-700">{x.trainerName}</span>
              </p>
            </div>

            <div className="flex justify-between items-center mt-6">
              <NavLink to={`/allcourse/${x.id}`} state={x}>
                <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-lg shadow-md transition duration-300">
                  View
                </button>
              </NavLink>

              <NavLink to={`/createCourse/${x.id}`} state={x}>
                <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium rounded-lg shadow-md transition duration-300">
                  Update
                </button>
              </NavLink>
            </div>
          </div>
        ))
      }
    </div>

  </section>
);



//     return (
//         <section className='flex flex-wrap gap-7'>
//             {
//                 data?.map((x) => {
//                     console.log(x);
//                     return (

//                         <div className='bg-red-500 h-[27vh] w-[200px] p-4 flex-wrap'>

//                             <h1>{x.courseName}</h1>
//                             <h1>{x.trainerName}</h1>

//                             <div className="flex justify-center items-center gap-2 pt-2">
//                                 <NavLink to = {`/allcourse/${x.id}`} state={x}> <button onClick={handleView} className="bg-green-500 p-1.5 text-black rounded">View</button></NavLink>
//                                 <NavLink to = {`/createCourse/${x.id}`} state={x}> <button onClick={handleUpdate} className="bg-green-500 p-1.5 text-black rounded">Update</button></NavLink>
//                         </div>
//                         </div>

//     )
// })
//             }
//         </section >
//     )
}

export default AllCourses