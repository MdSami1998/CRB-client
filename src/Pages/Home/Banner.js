import React from 'react';
import banner from '../../assets/banner.jpg'


const Banner = () => {
    return (
        <div className="hero md:min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="w-full text-center text-neutral-content">
                <div className="w-2/4 mx-auto">
                    <h1 className="mb-2 md:mb-5 text-2xl md:text-5xl font-bold text-white banner-font">Welcome To
                        <br />
                        <br />
                        <span className='font-bold text-indigo-400  tracking-widest'>Cumilla Raging Bulls</span></h1>
                    <div className='banner-font flex justify-evenly text-indigo-100 md:text-2xl font-bold md:mt-10'>
                        <p>DECIDE.</p>
                        <p>COMMIT.</p>
                        <p>SUCCEED.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;