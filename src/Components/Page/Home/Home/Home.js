import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../../Services/Service';
import Banner from '../Banner/Banner';
import Section1 from '../Section1/Section1';
import Section2 from '../Section2/Section2';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/servicesForHome')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])
    return (
        <div>
            <Banner></Banner>
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