import React from 'react'
import NavbarContainer from '../Navbar/NavbarContainer';
import { Outlet } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';

const Layout = () => {
  return (
    <>
      <Toaster /> 
        <NavbarContainer />
        <Outlet />
    </>
  )
}

export default Layout