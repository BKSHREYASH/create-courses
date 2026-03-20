import React from 'react';
import { NavLink } from 'react-router-dom'

const SideMenu = () => {
  return (
    <>
    {/* <aside className="h-[100vh] w-[40vh] bg-blue-900 text-white">
      <nav>
      <section> */}
      <ul className="flex flex-col">
        <NavLink to="/" className="hover:text-red-500 border border-amber-500"><li className="bg-gray-500 h-[5vh] flex items-center p-2">All Courses</li></NavLink>
        <NavLink to="/createCourses" className="hover:text-red-500 border border-amber-500"><li className="bg-gray-500 h-[5vh] flex items-center p-2">Create Courses</li></NavLink>
      </ul>
    {/* </section>
    </nav>
    </aside> */}
    </>
  )
}

export default SideMenu