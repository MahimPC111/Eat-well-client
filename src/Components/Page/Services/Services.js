import React, { useEffect, useState } from 'react';
import Loader from '../../../utilities/Loader';
import { useTitle } from '../../../utilities/Utilities';
import Service from './Service';

const Services = () => {
    useTitle('services');
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://eat-well-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])

    if (services.length === 0) {
        return <Loader></Loader>
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 my-10 lg:m-20'>
            {
                services.map(service => <Service key={service._id} service={service}></Service>)
            }
        </div>
    );
};

export default Services;