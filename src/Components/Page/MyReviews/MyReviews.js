import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { UserContext } from '../../../contexts/AuthProvider/AuthProvider';
import { useTitle } from '../../../utilities/Utilities';
import MyReview from './MyReview';

const MyReviews = () => {
    useTitle('myReview');
    const { user, logOutUser } = useContext(UserContext);
    const [myReview, setMyReview] = useState([]);

    useEffect(() => {
        fetch(`https://eat-well-server.vercel.app/myReviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('eatWellToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOutUser()
                        .then(() => { })
                        .catch(e => console.error(e))
                }
                return res.json()
            })
            .then(data => {
                setMyReview(data)
            })
    }, [user?.email, logOutUser])

    // Review delete code
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete this review?');

        if (proceed) {
            fetch(`https://eat-well-server.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Review deleted successfully')
                    }
                    const remainingReviews = myReview.filter(rvw => rvw._id !== id);
                    setMyReview(remainingReviews)
                })
        }
    }

    if (!myReview.length) {
        return <div className='text-center my-4'>
            <button className="btn btn-square loading"></button>
        </div>
    }

    return (
        <div className='min-h-screen'>
            {
                myReview.length ?
                    <div className='grid grid-cols-1 lg:grid-cols-2 m-10 gap-5'>
                        {myReview.map(review => <MyReview
                            key={review._id}
                            review={review}
                            handleDelete={handleDelete}></MyReview>)}
                    </div>
                    :
                    <p className='text-3xl my-40 text-center text-green-600'>You have not added any review yet.</p>
            }
        </div>
    );
};

export default MyReviews;