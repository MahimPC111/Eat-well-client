import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { UserContext } from '../../../contexts/AuthProvider/AuthProvider';
import { useTitle } from '../../../utilities/Utilities';
import Review from './Review';

const ServiceDetails = () => {
    useTitle('serviceDetails');
    const service = useLoaderData();
    const { user } = useContext(UserContext);
    const [reviews, setReviews] = useState([]);

    const { _id, title, price, description, Rating, quantity, img } = service;

    // loading a certain service data
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?service=${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews, _id])

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const opinion = form.opinion.value;
        const rating = form.rating.value;
        const name = user?.displayName;
        const email = user?.email;
        const image = user?.photoURL;

        const newReview = {
            name,
            email,
            service: _id,
            userImg: image,
            opinion,
            rating
        }

        // ading a new review
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset();
                    toast.success('Review successfully added.')
                }
            })
            .catch(e => toast.error(e.message))
    }

    return (
        <div className='flex justify-between'>
            <div className="card p-10 w-1/2 bg-base-100 image-full">
                <figure><img className='w-full' src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="mb-8 text-4xl text-center">{title}</h2>
                    <p className='text-justify text-lg'>{description}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Price: {price}</p>
                    <p>Rating: {Rating}</p>
                </div>
            </div>
            <div className='w-1/2 p-10'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
                {
                    user?.uid ?
                        <form onSubmit={handleSubmit} className='flex items-center justify-between p-2 gap-2'>
                            <textarea name='opinion' className="textarea textarea-info w-3/4" placeholder="your opinion" required></textarea>
                            <div className='flex flex-col w-1/4'>
                                <input name='rating' type="number" max={5} min={0} placeholder="rating" className="h-10 input input-bordered" required />
                                <button className='btn btn-success btn-sm mt-1'>Post</button>
                            </div>
                        </form>
                        :
                        <p className='text-2xl text-semibold text-red-600 text-center'>Please login to add a review. <Link className='underline text-lg' to='/login'>Login</Link></p>
                }
            </div>
        </div>
    );
};

export default ServiceDetails;