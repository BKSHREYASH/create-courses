import React, { useContext } from 'react'
import toast from 'react-hot-toast';
import { AuthContext } from '../ContextApi/Context';
import { Navigate } from 'react-router-dom';
import Login from '../Auth/Login';

const PublicRoutes = ({children}) => {
    let { userData } = useContext(AuthContext);
    console.log("public routes---"+userData);

    if(userData) {
        
        return <Navigate to="/" /> 
    } else {
        return children
    }

}

export default PublicRoutes