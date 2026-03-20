import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const ViewCourse = () => {
    let {id} = useParams()
    let {state} = useLocation()
    console.log(state);
    

    return (
  <section className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center px-6 py-12">
    
    <div className="max-w-3xl w-full bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-10 border border-gray-200">
      
      {/* Course ID Badge */}
      <div className="mb-6">
        <span className="px-4 py-1 text-sm bg-indigo-100 text-indigo-600 font-medium rounded-full">
          Course ID: {id}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        {state?.courseName}
      </h1>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">

        <p><span className="font-semibold">Trainer:</span> {state?.trainerName}</p>
        <p><span className="font-semibold">Duration:</span> {state?.courseDuration}</p>
        <p><span className="font-semibold">Category:</span> {state?.category}</p>
        <p><span className="font-semibold">Price:</span> ₹ {state?.price}</p>
        <p><span className="font-semibold">Level:</span> {state?.level}</p>
        <p><span className="font-semibold">Mode:</span> {state?.mode}</p>
        <p><span className="font-semibold">Start Date:</span> {state?.startDate}</p>
        <p><span className="font-semibold">End Date:</span> {state?.endDate}</p>

        <p className="md:col-span-2">
          <span className="font-semibold">Certificate Provided:</span>{" "}
          {state?.certificateProvided ? (
            <span className="text-green-600 font-medium">Yes 🎓</span>
          ) : (
            <span className="text-red-500 font-medium">No</span>
          )}
        </p>

      </div>

      {/* Description */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Course Description
        </h2>
        <p className="text-gray-600 leading-relaxed">
          {state?.courseDescription}
        </p>
      </div>

      {/* Back Button */}
      <div className="mt-10">
        <button
          onClick={() => window.history.back()}
          className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg shadow-md transition duration-300"
        >
          ← Back
        </button>
      </div>

    </div>

  </section>
);



//     return (
//   <section className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center px-6 py-12">
    
//     <div className="max-w-2xl w-full bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-8 border border-gray-200">
      
//       {/* Course ID Badge */}
//       <div className="mb-6">
//         <span className="px-4 py-1 text-sm bg-indigo-100 text-indigo-600 font-medium rounded-full">
//           Course ID: {id}
//         </span>
//       </div>

//       {/* Course Title */}
//       <h1 className="text-3xl font-bold text-gray-800 mb-4">
//         {state?.courseName}
//       </h1>

//       {/* Trainer */}
//       <p className="text-gray-600 mb-2">
//         <span className="font-semibold text-gray-700">Trainer:</span>{" "}
//         {state?.trainerName}
//       </p>

//       {/* Duration */}
//       <p className="text-gray-600 mb-2">
//         <span className="font-semibold text-gray-700">Duration:</span>{" "}
//         {state?.courseDuration}
//       </p>

//       {/* Description */}
//       <div className="mt-6">
//         <h2 className="text-lg font-semibold text-gray-800 mb-2">
//           Course Description
//         </h2>
//         <p className="text-gray-600 leading-relaxed">
//           {state?.courseDescription}
//         </p>
//       </div>

//       {/* Back Button */}
//       <div className="mt-8">
//         <button
//           onClick={() => window.history.back()}
//           className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg shadow-md transition duration-300"
//         >
//           ← Back
//         </button>
//       </div>

//     </div>

//   </section>
// );


  // return (
  //   <section className='bg-red-500 h-[30vh] w-[15vw]'>
  // <h1>{id}</h1>
  // <h1>{state.courseName}</h1>
  // <h1>{state.trainerName}</h1>
  // <h1>{state.courseDuration}</h1>
  // <h1>{state.courseDescription}</h1>
  //   </section>
  // )
}

export default ViewCourse