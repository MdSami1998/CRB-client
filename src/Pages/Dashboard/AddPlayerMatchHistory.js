import React from 'react';
import { toast } from 'react-toastify';

const AddClubMatchHistory = ({ name }) => {

    const handleClubMatchRecord = (e) => {
        e.preventDefault();
        const clubName = e.target.clubName.value;
        const OpponentTeam = e.target.OpponentTeam.value;
        const formation = e.target.formation.value;
        const matchPoint = e.target.matchPoint.value;
        const date = e.target.date.value;
        const matchResult = e.target.matchResult.value;
        // const WinnerTeam = e.target.WinnerTeam.value;
        const tournamentGroupName = e.target.tournamentGroupName.value;

        const matchRecord = { clubName, OpponentTeam, formation, matchPoint, date, matchResult, tournamentGroupName }

        fetch('http://localhost:5000/addmatchrecord', {
            // method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(matchRecord)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('New match record added')
                }
            })
        e.target.reset();
    }

    return (
        <div>
            <h1>Add New Record</h1>
            <form onSubmit={handleClubMatchRecord}>
                <div className="card-body p-3 md:p-8 w-full md:w-3/6 mx-auto  rounded-lg">
                    <div className='flex justify-between gap-10'>
                        <div className='w-96'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-accent">Name</span>
                                </label>
                                <input type="text" value={name} disabled className="input input-bordered" name='name' />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-accent">Opponent Name</span>
                                </label>
                                <input type="text" placeholder='Opponent Name' className="input input-bordered" name='OpponentName' required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-accent">Opponent Team Name</span>
                                </label>
                                <input type="text" placeholder='Full Team Name' className="input input-bordered" name='OpponentTeam' required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-accent">Date</span>
                                </label>
                                <input type="date" placeholder='Match Date' className="input input-bordered" name='date' defaultValue='-' required />
                            </div>
                        </div>

                        {/* ------------------------ */}

                        <div className='w-96'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-accent">Round</span>
                                </label>
                                <input type="text" placeholder='Round' className="input input-bordered" name='round' defaultValue='-' required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-accent">Score</span>
                                </label>
                                <input type="text" placeholder='ex: 2-1' className="input input-bordered" name='Score' required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-accent">Match Result:</span>
                                </label>
                                <input type="text" placeholder="Win/Lost/Draw" className="input input-bordered" name='matchResult' required />
                            </div>

                            {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text text-accent">Match Win By:</span>
                        </label>
                        <input type="text" placeholder="Who wins's?" className="input input-bordered" name='WinnerTeam' required />
                    </div> */}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-accent">Tournament Group Name</span>
                                </label>
                                <input type="text" placeholder='Ex: COBPG -Club World Cup' className="input input-bordered" name='tournamentGroupName' required />
                            </div>
                        </div>
                    </div>

                    <input className='btn btn-secondary hover:bg-transparent hover:text-secondary w-2/5 mx-auto' type="submit" value="Enter Record" />
                </div>
            </form>
        </div>
    );
};

export default AddClubMatchHistory;