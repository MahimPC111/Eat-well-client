import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../contexts/AuthProvider/AuthProvider';
import { useTitle } from '../../../utilities/Utilities';
import Service from './Service';

const Services = () => {
    const { loading } = useContext(UserContext);
    useTitle('services');
    const [services, setServices] = useState([]);

    if (loading) {
        <div className='text-center my-4'>
            <button className="btn btn-square loading"></button>
        </div>
    }

    useEffect(() => {
        fetch('https://eat-well-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 my-10 lg:m-20'>
            {
                services.map(service => <Service key={service._id} service={service}></Service>)
            }
        </div>
    );
};

export default Services;