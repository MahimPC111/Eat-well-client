import React, { useContext } from 'react';
import { UserContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoutes = () => {
    const { user, loading } = useContext(UserContext)

    return (
        <div>

        </div>
    );
};

export default PrivateRoutes;