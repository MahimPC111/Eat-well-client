import React from 'react';
import img from '../../../../assets/sections/section-2.jpg'

const Section2 = () => {
    return (
        <div className="hero my-10 lg:my-20">
            <div className="hero-content p-4 lg:p-10 flex-col lg:flex-row-reverse">
                <div>
                    <img src={img} alt='' className="w-10/12 lg:w-full rounded-lg shadow-2xl mx-auto" />
                </div>
                <div className='mt-4 lg:mt-0 px-3 lg:px-0 lg:text-start'>
                    <h1 className="text-2xl lg:text-4xl font-bold text-center lg:text-start">Why are home made foods popular?</h1>
                    <ul className="py-6 px-8">
                        <li className='list-disc'>Eating homemade foods is usually much cheaper than eating at a restaurant or buying processed foods from the market.</li>
                        <li className='list-disc'>Many commercially prepared foods are high in fat, salt, and sugar. When we prepare our own food, we know exactly which ingredients and how much of each are going into our food.</li>
                        <li className='list-disc'>Preparing your food at home can be especially beneficial if you or a family member has a food allergy. Because you are in control in your own kitchen, you can reduce the risk of an allergic reaction.</li>
                        <li className='list-disc'>Many restaurants and fast food joints offer portions that are much larger than necessary.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Section2;