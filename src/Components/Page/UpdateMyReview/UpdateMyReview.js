import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const UpdateMyReview = () => {
    const storedReview = useLoaderData();
    const [myReview, setMyReview] = useState(storedReview);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const opinion = form.opinion.value;
        const rating = form.rating.value;

        const updatedReview = {
            opinion: opinion,
            rating: rating
        }


        fetch(`https://eat-well-server.vercel.app/reviews/${myReview._id}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setMyReview(updatedReview)
                    toast.success('Review updated successfully')
                }
            })

    }

    return (
        <form onSubmit={handleSubmit} className='my-10 p-2 w-1/2 mx-auto'>
            <textarea name='opinion' className="textarea textarea-info w-full h-60" placeholder="your opinion" defaultValue={myReview.opinion}></textarea>
            <div className='flex justify-around w-1/2 mx-auto mt-5'>
                <input name='rating' type="number" max={5} min={0} placeholder="rating" className="h-10 input input-bordered" required defaultValue={myReview.rating} />
                <button className='btn btn-success btn-sm mt-1'>Post</button>
            </div>
        </form>
    );
};

export default UpdateMyReview;