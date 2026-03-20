import React from 'react'
import NavbarContainer from './Navbar/NavbarContainer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Component/Layout';
import Home from './Navbar/Home';
import Login from './Auth/Login';
import Register from './Auth/Register';
import { toast, Toaster } from 'react-hot-toast';
import Context from './ContextApi/Context';
import UserProfile from './ProfileDetails/UserProfile';
import CreateCourses from './Courses/CreateCourses';
import AllCourses from './Courses/AllCourses';
import PublicRoutes from './Routes/PublicRoutes';
import PrivateRoutes from './Routes/PrivateRoutes';
import ViewCourse from './Courses/ViewCourse';
import UpdateCourse from './Courses/UpdateCourse';

const App = () => {
  let routes = createBrowserRouter([{
        path: "/",
        element: <Layout />,
        children: [{
          path: "/",
          element: <PrivateRoutes>
            <Home />
          </PrivateRoutes>,
          children:[{
            index:true,
            element:<AllCourses/>
          },{
            path: "/createCourses",
            element: <CreateCourses />
          }]
        },
      {
        path: "/login",
        element: <PublicRoutes>
          <Login />
        </PublicRoutes>
      },
    {
      path: "/register",
      element: <PublicRoutes>
        <Register />
      </PublicRoutes>
    },{
      path:"/profile",
      element:<UserProfile />
    }]
      },{
        path:"/allcourse/:id",
        element:<ViewCourse/>
      }, {
        path: "/createCourse/:id",
        element: <UpdateCourse />
      }])
  return (
    <Context>
      <RouterProvider router={routes}>
      <Toaster />
    </RouterProvider>
    </Context>
  )
}

export default App