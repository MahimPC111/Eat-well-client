import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { _id, title, price, description, Rating, quantity, img } = service;
    console.log(service)
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className="card p-10 w-full bg-base-100 image-full">
                <figure><img className='w-full' src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="mb-4 text-4xl text-center">{title}</h2>
                    <p className='text-justify text-lg'>{description}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Price: {price}</p>
                    <p>Rating: {Rating}</p>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default ServiceDetails;