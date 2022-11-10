import React from 'react';
import toast from 'react-hot-toast';
import { useTitle } from '../../../utilities/Utilities';

const AddService = () => {
    useTitle('addService');
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const serviceImg = form.photoURL.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const newService = {
            title: serviceName,
            img: serviceImg,
            price,
            quantity,
            Rating: rating,
            description
        }

        // adding a new service 
        fetch('https://eat-well-server.vercel.app/services', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset();
                    toast.success('New service successfully added')
                }
            })

    }
    return (
        <form onSubmit={handleSubmit} className="card my-5 flex-shrink-0 mx-auto w-full max-w-md shadow-2xl bg-base-100">
            <div className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service name:</span>
                    </label>
                    <input name='serviceName' type="text" placeholder="service name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service image:</span>
                    </label>
                    <input name='photoURL' type="text" placeholder="photoURL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price:</span>
                    </label>
                    <input name='price' type="text" placeholder="price" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Quantity:</span>
                    </label>
                    <input name='quantity' type="text" placeholder="quantity" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating:</span>
                    </label>
                    <input name='rating' type="number" min={0} max={5} placeholder="rating" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description:</span>
                    </label>
                    <textarea name='description' className="textarea textarea-success" placeholder="description" required></textarea>
                </div>
                <div className="form-control">
                    <button className="btn btn-primary">Add service</button>
                </div>
            </div>
        </form>
    );
};

export default AddService;