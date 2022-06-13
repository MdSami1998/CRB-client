import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import SinglePlayerOfTheMonth from './SinglePlayerOfTheMonth';
import { FaArrowRight } from 'react-icons/fa';

const PlayersOfTheMonth = () => {
    const { data: bestPlayers, isLoading } = useQuery('bestPlayers', () =>
        fetch('http://localhost:5000/bestplayer').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return 'Loading...'
    }
    return (
        <div className='my-5 p-5 bg-base-200'>
            <h1 className="text-4xl md:text-5xl font-bold my-20 banner-font text-blue-800 tracking-widest">Player Of The Month!</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-20 px-20'>
                {
                    bestPlayers.slice(0, 3).map(bestPlayer => <SinglePlayerOfTheMonth
                        key={bestPlayer._id} bestPlayer={bestPlayer}
                    ></SinglePlayerOfTheMonth>)
                }
            </div>
            <Link className='flex justify-end pr-20' to='/clubplayers'>
                <button className="btn btn-accent hover:bg-transparent text-white hover:text-black hover:scale-110 btn-sm flex justify-end mt-5">Club Players &nbsp; <FaArrowRight></FaArrowRight></button>
            </Link>
        </div>
    );
};

export default PlayersOfTheMonth;