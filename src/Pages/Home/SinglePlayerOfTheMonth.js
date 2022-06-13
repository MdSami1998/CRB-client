import React from 'react';

const SinglePlayerOfTheMonth = ({ bestPlayer }) => {
    const { img, name, played, winParcentage } = bestPlayer;
    return (
        <div className="card bg-base-100 shadow-xl py-3">
            <figure><img className='w-60' src={img} alt={name} /></figure>
            <div className="card-body">
                <h2 className="text-secondary text-lg font-bold">Name: <span className='uppercase'>{name}</span></h2>

                <div className='text-secondary text-md font-semibold'>
                    < p className='text-neutral font-semibold text-md'>
                        Match Played :  <span className='text-secondary'>{played} {played > 0 ? 'matches' : 'match'}</span>
                    </ p>

                    < p className='text-neutral font-semibold text-md'> Win Rate : <span className='text-secondary'>{winParcentage}%</span></ p>
                </div>
            </div>
        </div>
    );
};

export default SinglePlayerOfTheMonth;