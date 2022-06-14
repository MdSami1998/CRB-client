import React from 'react';
import { useQuery } from 'react-query'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaArrowRight } from 'react-icons/fa';

const ManagePlayerHistory = () => {
    const navigate = useNavigate();
    const { data: players, isLoading, refetch } = useQuery('players', () =>
        fetch('http://localhost:5000/players', {
            method: 'GET',
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

    const handleUpdateDB = (id) => {
        navigate(`/history/${id}`);
    }

    const handleRemovePlayer = (id, name) => {
        const procced = window.confirm(`Are you sure you want to remove ${name}??`);
        if (procced) {
            fetch(`http://localhost:5000/players/${id}`, {
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
    const handlePlayerOfTheMonth = (id, bestPlayer) => {
        const name = bestPlayer.name
        const img = bestPlayer.img
        const played = bestPlayer.played
        const win = bestPlayer.win
        const draw = bestPlayer.draw
        const lost = bestPlayer.lost
        const winParcentage = bestPlayer.winParcentage

        const player = { name, img, played, win, lost, draw, winParcentage }
        fetch(`http://localhost:5000/bestplayer/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(player)
        })
            .then(res => res.json())
            .then(data => {
                if (data.upsertedCount) {
                    toast.success(`Added ${name} to Player of the month`)
                    refetch();
                }
            });
    }
    return (
        <div>
            <div className='flex justify-around items-center'>
                <h1 className="text-4xl font-bold my-10 banner-font text-blue-800 tracking-widest">Players : {players.length}</h1>
                <Link to='/addplayer' className='btn btn-accent hover:bg-transparent hover:text-accent hover:scale-110 btn-sm flex justify-end items-center gap-2 mt-3 text-black'>New Player Entry Here <FaArrowRight></FaArrowRight></Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr className='text-secondary'>
                            <th className='text-lg'>NO.</th>
                            <th></th>
                            <th className='text-lg'>Name</th>
                            <th className='text-lg'>Played</th>
                            <th className='text-lg'>Win</th>
                            <th className='text-lg'>Draw</th>
                            <th className='text-lg'>Lost</th>
                            <th className='text-lg'>Win%</th>
                            <th className='text-lg'>Database</th>
                            <th className='text-lg'>Best Player</th>
                            <th className='text-lg'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            players.map((player, index) => <tr key={player._id} className='text-lg'>
                                <th>{index + 1}</th>

                                <td><img className='w-16 rounded-full' src={player.img} alt="" /></td>

                                <td className='uppercase'>{player.name}</td>
                                <td className='uppercase'>{player.played}</td>
                                <td className='uppercase'>{player.win}</td>
                                <td className='uppercase'>{player.draw}</td>
                                <td className='uppercase'>{player.lost}</td>
                                <td className='uppercase'>{player.winParcentage}%</td>
                                <td>
                                    <button onClick={() => handleUpdateDB(player._id)} className="btn bg-transparent  hover:bg-accent border-accent text-accent hover:text-white hover:scale-110 btn-xs flex justify-end mt-3">Update</button>
                                </td>

                                <td>
                                    <button onClick={() => handlePlayerOfTheMonth(player._id, player)} className="btn bg-transparent  hover:bg-accent border-accent text-accent hover:text-white hover:scale-110 btn-xs flex justify-end mt-3">Add to the list</button>
                                </td>

                                <td>
                                    <button onClick={() => handleRemovePlayer(player._id, player.name)} className="btn bg-transparent  hover:bg-accent border-accent text-accent hover:text-white hover:scale-110 btn-xs flex justify-end mt-3">Remove Player</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManagePlayerHistory;
