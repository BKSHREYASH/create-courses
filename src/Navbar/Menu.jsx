import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../ContextApi/Context';

const Menu = () => {
  let {userData,logout} = useContext(AuthContext);
  console.log(userData);
  return (
    <>
        <section>
            {userData ?
              <>
                <ul className='flex gap-10'>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/profile"><li>{userData.firstName}</li></NavLink>
                <NavLink to="" onClick={logout}><li>Logout</li></NavLink>
            </ul>
              </> : <>
                <ul className='flex gap-10'>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/login"><li>Login</li></NavLink>
                <NavLink to="/register"><li>Register</li></NavLink>
            </ul>
              </>
          }
        </section>
    </>
  )
}

export default Menu