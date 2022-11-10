import React, { useEffect, useState } from 'react';
import { useTitle } from '../../../utilities/Utilities';
import Service from './Service';

const Services = () => {
    useTitle('services');
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
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