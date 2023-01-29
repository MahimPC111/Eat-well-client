import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../../../utilities/Loader';
import { useTitle } from '../../../../utilities/Utilities';
import Service from '../../Services/Service';
import Slider from '../Banner/Slider';
import Section from '../Section/Section';
import Section1 from '../Section1/Section1';
import Section2 from '../Section2/Section2';

const Home = () => {
    useTitle('home');
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://eat-well-server.vercel.app/servicesForHome')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])

    if (services.length === 0) {
        return <Loader></Loader>
    }

    return (
        <div>
            <Section></Section>
            <Slider></Slider>
            {/* Services for home page */}
            <div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 my-10 lg:m-20'>
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
                <div className='text-center'>
                    <Link to='/services'><button className="btn btn-success">See all</button></Link>
                </div>
            </div>
            <Section1></Section1>
            <Section2></Section2>
        </div>
    );
};

export default Home;