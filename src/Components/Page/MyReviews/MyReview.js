import React from 'react';
import { Link } from 'react-router-dom';

const MyReview = ({ review, handleDelete }) => {
    const { _id, name, userImg, opinion, rating } = review;
    return (
        <div className="w-full max-h-fit border-2 rounded-lg bg-base-100 mb-3 p-2 flex justify-between">
            <div>
                <div className='flex items-center'>
                    <img className='rounded-full mr-2' width={48} src={userImg} alt='' />
                    <h2 className="text-xl font-semibold">{name}</h2>
                </div>
                <p>Ratings: {rating}</p>
                <p>{opinion}</p>
            </div>
            <div className='flex flex-col lg:flex-row items-center pl-12 lg:pl-0 m-auto lg:m-0'>
                <Link to={`/updateMyReview/${_id}`}><button className='btn btn-accent btn-sm'>Edit</button></Link>
                <button onClick={() => handleDelete(_id)} className='btn btn-accent btn-sm mt-2 lg:mt-0 lg:ml-2'>Delete</button>
            </div>
        </div>
    );
};

export default MyReview;