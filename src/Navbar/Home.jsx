import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import SideMenu from '../Courses/SideMenu'
import CreateCourses from '../Courses/CreateCourses'

const Home = () => {
  return (
    <>
     <div className='flex'>
       <aside className="flex">
        <nav className="h-[160vh] w-[40vh] bg-blue-900 text-white flex">
          <section className='w-[40vh]'>
            <SideMenu />
          </section>
        </nav>
        <section className=''>
        
        </section>
      </aside>

      <Outlet/>
     </div>
    </>
  )
}

export default Home