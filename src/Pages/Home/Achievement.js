import React from 'react';
import logo from '../../assets/CRB-logo.png'
import trophy from '../../assets/icon/trophy.png'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Achievement = () => {
    return (
        <div className="hero md:min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={logo} className="w-56 md:w-96 rounded-lg shadow-2xl md:mr-10" alt='' />
                <div>
                    <div className='flex justify-center items-center'>
                        <h1 className="text-4xl md:text-5xl font-bold mr-4 banner-font text-blue-800 tracking-widest">Achievement!</h1>
                        <img className='w-10 md:w-16' src={trophy} alt="" />
                    </div>
                    <div className='mt-5 text-center md:text-justify'>
                        <h1 className='text-lg md:text-xl font-bold'>~ CLUB WORLD CUP CHAMPIONS FROM <span className='font-bold text-2xl text-accent'>EMTB 🏆</span></h1>

                        <h1 className='text-lg md:text-xl font-bold my-3'>~ DUO TOURNAMENT CHAMPIONS FROM <span className='font-bold text-2xl text-accent'>PES LOVER'S BD 🏆 </span></h1>

                        <h1 className='text-lg md:text-xl font-bold'>~ DISTRICT TOURNAMENT RUNNER-UP FROM <span className='font-bold text-2xl text-accent'>PES MOBILE BANGLADESH🥈 </span></h1>

                        <Link to='/allachievement'>
                            <button className="btn btn-accent hover:bg-transparent hover:text-accent hover:scale-110 btn-sm flex justify-end mt-3 text-white">more &nbsp; <FaArrowRight></FaArrowRight></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievement;