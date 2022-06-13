import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const SingllePlayerDetails = () => {
    const { id } = useParams();
    const { data: player, isLoading } = useQuery('player', () =>
        fetch(`http://localhost:5000/players/${id}`, {
            method: "GET",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <p>Loading....</p>
    }
    const { img, name, email, age, gameId, device, phone, played, win, lost, draw, winParcentage } = player;
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img className='w-96' src={img} alt={name} />
                <div>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <div className='grid grid-cols-2 gap-20 p-6'>
                        <div className='text-justify flex flex-col gap-5'>
                            < p className='text-neutral font-semibold text-lg'> Email : <span className='text-indigo-600'>{email}</span></ p>
                            < p className='text-neutral font-semibold text-lg'> Age :  <span className='text-indigo-600'>{age}</span></ p>
                            < p className='text-neutral font-semibold text-lg'> Phone Number :  <span className='text-indigo-600'>{phone}</span></ p>
                            < p className='text-neutral font-semibold text-lg'> Gaming ID :  <span className='text-indigo-600'>{gameId}</span></ p>
                            < p className='text-neutral font-semibold text-lg'> Gaming Device :  <span className='text-indigo-600'>{device}</span></ p>
                        </div>
                        <div className='text-justify flex flex-col gap-5'>
                            < p className='text-neutral font-semibold text-lg'> Total Match Played :  <span className='text-indigo-600'>{played} {played > 0 ? 'matches' : 'match'}</span></ p>

                            < p className='text-neutral font-semibold text-lg'> Total Win :  <span className='text-indigo-600'>{win} {win > 0 ? 'matches' : 'match'}</span></ p>

                            < p className='text-neutral font-semibold text-lg'> Match Lost : <span className='text-indigo-600'>{lost} {lost > 0 ? 'matches' : 'match'}</span></ p>

                            < p className='text-neutral font-semibold text-lg'> Match Drawn : <span className='text-indigo-600'>{draw} {draw > 0 ? 'matches' : 'match'}</span></ p>

                            < p className='text-neutral font-semibold text-lg'> Win Rate : <span className='text-indigo-600'>{winParcentage}%</span></ p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingllePlayerDetails;