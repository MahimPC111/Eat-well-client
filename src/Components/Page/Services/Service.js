import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, title, price, description, Rating, img } = service;

    return (
        <div className="card m-auto w-80 h-60 bg-base-100 shadow-xl image-full">
            <figure><img className='w-80 h-80' src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{
                    description.length > 100 ?
                        description.slice(0, 100) + "..."
                        :
                        description
                }</p>
                <p className='flex justify-between'>
                    <span>Price: {price}</span>
                    <span>Rating: {Rating}</span>
                </p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}><button className="btn btn-error btn-outline btn-sm">View details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;