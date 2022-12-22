import React from 'react';

const Review = ({ review }) => {
    const { name, userImg, opinion, rating } = review;
    return (
        <div className="w-full max-h-fit border-2 rounded-lg bg-base-100 mb-3 p-2">
            <div className='flex items-center'>
                <img className='rounded-full mr-4 w-12 h-12' src={userImg} alt='' />
                <div>
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <p>Ratings: {rating}</p>
                    <p>{opinion}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;