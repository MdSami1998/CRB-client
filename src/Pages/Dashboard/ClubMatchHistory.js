import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ClubMatchHistory = () => {
    const { data: clubMatchRecords, isLoading, refetch } = useQuery('clubMatchRecords', () =>
        fetch('http://localhost:5000/matchrecord', {
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

    const handleDeleteClubMatch = (id) => {
        const procced = window.confirm(`Are you sure you want to remove from this list??`);
        if (procced) {
            fetch(`http://localhost:5000/matchrecord/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast(`Successfully removed from the list`)
                    }
                    refetch()
                })
        }

    }
    return (
        <div>
            <div className='flex justify-evenly items-center'>
                <h1>Club Match History</h1>
                <Link to='/addmatchhistory' className='btn btn-accent btn-sm'>Enter new record</Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr className='text-secondary'>
                            <th></th>
                            <th className='text-lg'>Name</th>
                            <th className='text-lg'>Formation</th>
                            <th className='text-lg'>Point</th>
                            <th className='text-lg'>Opponent</th>
                            <th className='text-lg'>Match Result</th>
                            <th className='text-lg'>Organisation</th>
                            <th className='text-lg'>Date</th>
                            <th className='text-lg'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            clubMatchRecords.map((clubMatchRecord, index) => <tr key={clubMatchRecord._id} className='text-lg'>
                        <th>{index + 1}</th>


                        <td >{clubMatchRecord.clubName}</td>
                        <td >{clubMatchRecord.formation} vs {clubMatchRecord.formation}</td>
                        <td >{clubMatchRecord.matchPoint}</td>
                        <td >{clubMatchRecord.OpponentTeam}</td>
                        <td >{clubMatchRecord.matchResult}{clubMatchRecord.matchResult === 'win' && <span className='text-red-5000'> by CRB</span>}</td>
                        <td >{clubMatchRecord.tournamentGroupName}</td>
                        <td >{clubMatchRecord.date}</td>
                        <td>
                            <button onClick={() => handleDeleteClubMatch(clubMatchRecord._id)} className="btn btn-sm btn-secondary bg-transparent text-secondary hover:bg-secondary hover:text-black">Delete</button>
                        </td>
                    </tr>)
                        }

                </tbody>
            </table>
        </div>
        </div >
    );
};

export default ClubMatchHistory;