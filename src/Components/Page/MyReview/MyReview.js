import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../contexts/AuthProvider/AuthProvider';
import { useTitle } from '../../../utilities/Utilities';
import Review from '../ServiceDetails/Review';

const MyReview = () => {
    useTitle('myReview');
    const { user } = useContext(UserContext);
    const [myReview, setMyReview] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyReview(data);
            })
    }, [user?.email])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 m-10 gap-5'>
            {
                myReview.map(review => <Review key={review._id} review={review}></Review>)
            }
        </div>
    );
};

export default MyReview;