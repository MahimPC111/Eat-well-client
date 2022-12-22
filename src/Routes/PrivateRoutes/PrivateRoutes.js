import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../contexts/AuthProvider/AuthProvider';
import Loader from '../../utilities/Loader';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(UserContext)
    const location = useLocation();

    if (loading) {
        return <Loader></Loader>
    }

    if (user?.uid) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default PrivateRoutes;