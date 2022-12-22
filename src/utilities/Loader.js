import { FadeLoader } from 'react-spinners';
import React from 'react';

const Loader = () => {
    return (
        <div className='min-h-screen'><FadeLoader className='mx-auto mt-10' color="#000000" /></div>
    );
};

export default Loader;