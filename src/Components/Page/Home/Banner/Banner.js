import React from 'react';
import banner1 from '../../../../assets/banner/banner-1.jpg'
import banner2 from '../../../../assets/banner/banner-2.jpg'
import banner3 from '../../../../assets/banner/banner-3.jpg'
import banner4 from '../../../../assets/banner/banner-4.jpg'
import BannerItem from './BannerItem';

const Banner = () => {
    const bannerData = [
        {
            image: banner1,
            prev: 4,
            id: 1,
            next: 2,
            headline: 'We give the best service in the town'
        },
        {
            image: banner2,
            prev: 1,
            id: 2,
            next: 3,
            headline: 'Try our food to get the best taste'
        },
        {
            image: banner3,
            prev: 2,
            id: 3,
            next: 4,
            headline: 'We maintain proper hygienic to cook our foods'
        },
        {
            image: banner4,
            prev: 3,
            id: 4,
            next: 1,
            headline: 'Let us start a new journey with Eat well'
        }
    ]
    return (
        <div className="carousel w-full">
            {
                bannerData.map(data => <BannerItem key={data.id} data={data}></BannerItem>)
            }
        </div>
    );
};

export default Banner;