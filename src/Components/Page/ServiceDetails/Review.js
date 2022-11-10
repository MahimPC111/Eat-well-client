import React from 'react';

const Review = ({ review }) => {
    const { name, userImg, opinion, rating } = review;
    return (
        <div className="w-full max-h-fit border-2 rounded-lg bg-base-100 mb-3 p-2">
            <div className='flex items-center'>
                <img className='rounded-full mr-2' width={48} src={userImg} alt='' />
                <h2 className="text-xl font-semibold">{name}</h2>
            </div>
            <p>Ratings: {rating}</p>
            <p>{opinion}</p>
        </div>
    );
};

export default Review;