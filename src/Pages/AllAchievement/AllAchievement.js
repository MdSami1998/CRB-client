import React from 'react';
import logo from '../../assets/CRB-logo.png';
import trophy from '../../assets/icon/trophy.png';

const AllAchievement = () => {
    return (
        <div className="bg-base-200">
            <div className="flex flex-col items-center min-h-screen pt-10">
                <img src={logo} className="w-56 md:w-96 rounded-lg shadow-2xl md:mr-10" alt='' />
                <div className='my-5'>
                    <div className='flex justify-center items-center'>
                        <h1 className="text-4xl md:text-5xl font-bold mr-4">Achievement List!</h1>
                        <img className='w-10 md:w-16' src={trophy} alt="" />
                    </div>
                    <div className='mt-5 text-center md:text-justify'>
                        <h1 className='text-lg md:text-xl font-bold'>~ CLUB WORLD CUP CHAMPIONS FROM <span className='font-bold text-2xl text-accent'>EMTB 🏆</span></h1>

                        <h1 className='text-lg md:text-xl font-bold my-3'>~ DUO TOURNAMENT CHAMPIONS FROM <span className='font-bold text-2xl text-accent'>PES LOVER'S BD 🏆 </span></h1>

                        <h1 className='text-lg md:text-xl font-bold'>~ DISTRICT TOURNAMENT RUNNER-UP FROM <span className='font-bold text-2xl text-accent'>PES MOBILE BANGLADESH🥈 </span></h1>

                        <h1 className='text-lg md:text-xl font-bold my-3'>~ 2ND RUNNER-UP OF TRIO TOURNAMENT </h1>

                        <h1 className='text-lg md:text-xl font-bold'>~ 4TH PLACE FROM  <span className='font-bold text-2xl text-accent'>eFotball Bangladesh</span></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllAchievement;