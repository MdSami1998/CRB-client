import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import ClubPlayer from './ClubPlayer';

const ClubPlayers = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const { data: ClubPlayers, isLoading } = useQuery("ClubPlayers", () =>
        fetch('http://localhost:5000/players', {
            method: "GET",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res =>
                res.json()
            )
    )
    if (isLoading) {
        return 'Loading...'
    }
    return (
        <div>
            <h1 className="text-4xl md:text-5xl font-bold my-10 banner-font text-blue-800 tracking-widest">Club Players</h1>
            {
                admin && <p>Add New Player</p>
            }
            <div className='grid grid-cols-1 md:grid-cols-3 gap-20 px-20'>
                {
                    ClubPlayers.map(clubPlayer => <ClubPlayer key={clubPlayer._id} clubPlayer={clubPlayer}></ClubPlayer>)
                }
            </div>
        </div>
    );
};

export default ClubPlayers;