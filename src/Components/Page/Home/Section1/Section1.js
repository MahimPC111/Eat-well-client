import React from 'react';
import img from '../../../../assets/sections/section-1.jpg'

const Section1 = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content grid lg:grid-cols-2">
                <div>
                    <img src={img} alt="" className="w-9/12 mx-auto rounded-lg shadow-2xl" />
                </div>
                <div>
                    <h1 className="text-4xl font-bold">Why we are the best!</h1>
                    <p className="py-6">We cook each and every food perfectly. We use fresh raw materials. We use accurate ingredients and spices while preparing the food for our customers. Moreover, we follow hygienics methods in our kitchen.</p>
                </div>
            </div>
        </div>
    );
};

export default Section1;