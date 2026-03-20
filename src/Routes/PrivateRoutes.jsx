import React, { useContext } from 'react'
import Context, { AuthContext } from '../ContextApi/Context'
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const { userData } = useContext(AuthContext);
  
    if(!userData) {
       
        return <Navigate to="/login"/>
    }

    return children;
}

export default PrivateRoutes