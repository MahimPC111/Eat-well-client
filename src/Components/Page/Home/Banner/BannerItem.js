import React from 'react';
import './BannerItem.css'

const BannerItem = ({ data }) => {
    const { image, prev, id, next, headline } = data;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full banner-img">
            <img src={image} alt='' className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <div className="flex flex-col">
                    <h3 className='text-white font-bold text-5xl'>{headline}</h3>
                    <span className="text-warning text-2xl font-semibold text-center mt-5">Eat well, stay healthy</span>
                </div>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;