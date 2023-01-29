import React from 'react';
import img from '../../../../assets/illustration/Eating.jpg'
import Typewriter from 'typewriter-effect';

const Section = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 mx-12 md:mx-20 lg:mx-32 my-5'>
            <div className='flex items-center my-5 md:my-10 lg:my-0'>
                <h1 className='font-bold font-mono'>
                    <p className='text-3xl md:text-4xl lg:text-5xl text-orange-600'>Hi!</p> <br />
                    <p className='text-3xl md:text-4xl lg:text-5xl text-orange-600'>Welcome to</p>  <br />
                    <div className='text-4xl md:text-5xl lg:text-6xl text-black'>
                        <Typewriter
                            options={{
                                strings: ['Eat', 'Well!', 'Eat Well!'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </h1>
            </div>
            <div className='mx-auto w-9/12 lg:w-full'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Section;