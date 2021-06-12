import React from 'react';
import './Banner.css';
import banner from '../../Image/banner.png';

const Banner = () => {
    return (
        <div className="Banner">
            <img src={banner} alt="" />
        </div>
    );
};

export default Banner;