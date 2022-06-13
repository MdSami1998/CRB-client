import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const BestPlayerOfMonth = () => {
    const { data: bestPlayers, isLoading, refetch } = useQuery('bestPlayers', () =>
        fetch('http://localhost:5000/bestplayer').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return 'Loading...'
    }

    const handleRemoveBestPlayer = (id, name) => {
        const procced = window.confirm(`Are you sure you want to remove ${name} from this list??`);
        if (procced) {
            fetch(`http://localhost:5000/bestplayer/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast(`Successfully removed ${name} from the list`)
                    }
                    refetch()
                })
        }

    }
    return (
        <div>
            <h1 className='text-4xl text-green-400 font-bold my-10'>Total Players: {bestPlayers.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr className='text-secondary'>
                            <th></th>
                            <th></th>
                            <th className='text-lg'>Name</th>
                            <th className='text-lg'>Total Match Played</th>
                            <th className='text-lg'>Win Rate</th>
                            <th className='text-lg'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bestPlayers.map((bestPlayer, index) => <tr key={bestPlayer._id} className='text-lg'>
                                <th>{index + 1}</th>

                                <td><img className='w-16 rounded-full' src={bestPlayer.img} alt="" /></td>

                                <td className='uppercase'>{bestPlayer.name}</td>
                                <td className='uppercase'>{bestPlayer.played}</td>

                                <td className='uppercase'>{bestPlayer.winParcentage}%</td>

                                <td>
                                    <button onClick={() => handleRemoveBestPlayer(bestPlayer._id, bestPlayer.name)} className="btn btn-sm btn-secondary bg-transparent text-secondary hover:bg-secondary hover:text-black">Remove Form The List</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BestPlayerOfMonth;