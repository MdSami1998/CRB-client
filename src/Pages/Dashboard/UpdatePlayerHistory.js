import React, { useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdatePlayerHistory = () => {
    const { id } = useParams();
    const lostRef = useRef();
    const winRef = useRef();
    const drawRef = useRef();
    const [lostInputBtn, setLostInputBtn] = useState(0);
    const [winInputBtn, setwinInputBtn] = useState(0);
    const [drawInputBtn, setDrawInputBtn] = useState(0);

    const { data: player, isLoading, refetch } = useQuery('player', () =>
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

    // HANDLE STATS RESET BUTTON AND UPDATE THE DATA TO DATABASE
    const handleResetStats = (player) => {
        const played = player.played * 0;
        const win = player.win * 0;
        const lost = player.lost * 0;
        const draw = player.draw * 0;
        const winParcentage = player.winParcentage * 0;
        const resetStats = { played, win, lost, draw, winParcentage };

        const url = `http://localhost:5000/players/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(resetStats)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Stats Reset Completed')
                    refetch();
                }
            });
    }
    // HANDLE MATCH WIN INPUT FIELD AND UPDATE THE DATA TO DATABASE
    const handleMatchWin = (e) => {
        e.preventDefault();
        const winInputValue = e.target.matchwin.value;
        const previousWinValue = parseInt(player.win);
        const newInputValue = parseInt(winInputValue);

        const previousPlayedValue = parseInt(player.played);

        const previousDraw = player.draw;

        const win = previousWinValue + newInputValue;
        const played = previousPlayedValue + newInputValue;
        // const winParcentage = (win + 0.5 * previousDraw) / played * 100
        const winCalculation = (win + 0.5 * previousDraw) / played * 100;
        const winParcentage = winCalculation.toFixed(2);


        const updatedDetails = { played, win, winParcentage }
        const url = `http://localhost:5000/players/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success('Updated')
                    refetch();
                }
            });
        e.target.reset();

    }

    // HANDLE MATCH LOST INPUT FIELD AND UPDATE THE DATA TO DATABASE
    const handleMatchLost = (e) => {
        e.preventDefault();
        const lostInputValue = e.target.matchlost.value;
        const previousLostValue = parseInt(player.lost);
        const newInputValue = parseInt(lostInputValue);

        const previousPlayedValue = parseInt(player.played);

        const previousDraw = player.draw;
        const winValue = player.win;

        const lost = previousLostValue + newInputValue;
        const played = previousPlayedValue + newInputValue;
        const winCalculation = (winValue + 0.5 * previousDraw) / played * 100;
        const winParcentage = winCalculation.toFixed(2);

        const updatedDetails = { played, lost, winParcentage }
        const url = `http://localhost:5000/players/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success('Updated')
                    refetch();
                }
            });
        e.target.reset();
    }

    // HANDLE MATCH DRAW INPUT FIELD AND UPDATE THE DATA TO DATABASE
    const handleMatchDraw = (e) => {
        e.preventDefault();
        const drawInputValue = e.target.matchdraw.value;
        const previousDrawValue = parseInt(player.draw);
        const newInputValue = parseInt(drawInputValue);

        const previousPlayedValue = parseInt(player.played);

        const winValue = player.win;

        const draw = previousDrawValue + newInputValue;
        const played = previousPlayedValue + newInputValue;
        // const winParcentage = (winValue + 0.5 * draw) / played * 100
        const winCalculation = (winValue + 0.5 * draw) / played * 100;
        const winParcentage = winCalculation.toFixed(2);

        const updatedDetails = { played, draw, winParcentage }

        const url = `http://localhost:5000/players/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success('Updated')
                    refetch();
                }
            });
        e.target.reset();
    }



    // DISABLED WIN INPUT FIELD BUTTON IF THE INPUT IS 0
    const handleWinBtnDisabled = () => {
        const winInputValue = winRef.current.value;
        setwinInputBtn(winInputValue);
    }

    // DISABLED LOST INPUT FIELD BUTTON IF THE INPUT IS 0
    const handleBtnDisabled = () => {
        const lostInputValue = lostRef.current.value;
        setLostInputBtn(lostInputValue);
    }

    // DISABLED DRAW INPUT FIELD BUTTON IF THE INPUT IS 0
    const handleDrawBtnDisabled = () => {
        const drawInputValue = drawRef.current.value;
        setDrawInputBtn(drawInputValue);
    }

    return (
        <div className='my-10'>
            <div className="hero md:min-h-full">
                <div className="hero-content flex-col lg:flex-row md:w-3/5">
                    <div>
                        <img className='w-full md:w-96 mx-auto' src={player.img} alt="" />
                        <div className='mt-2 p-2 rounded '>
                            <p className='text-secondary text-2xl  mb-2 banner-font tracking-widest'>Name : {player.name}</p>

                            <p className='text-secondary text-xl mb-2 banner-font tracking-wider'>Device : {player.device}</p>
                        </div>
                    </div>

                    <div className="card-body text-justify p-0 md:p-8 w-full">
                        {/* < p className='text-neutral font-semibold text-lg'> Name : <span className='text-indigo-600'>{player.name}</span></ p> */}

                        < p className='text-neutral font-semibold text-lg'> Total Match Played :  <span className='text-indigo-600'>{player.played} {player.played > 0 ? 'matches' : 'match'}</span></ p>

                        < p className='text-neutral font-semibold text-lg'> Total Win :  <span className='text-indigo-600'>{player.win} {player.win > 0 ? 'matches' : 'match'}</span></ p>

                        < p className='text-neutral font-semibold text-lg'> Match Drawn : <span className='text-indigo-600'>{player.draw} {player.draw > 0 ? 'matches' : 'match'}</span></ p>

                        < p className='text-neutral font-semibold text-lg'> Match Lost : <span className='text-indigo-600'>{player.lost} {player.lost > 0 ? 'matches' : 'match'}</span></ p>
                        < p className='text-neutral font-semibold text-lg'> Win Rate : <span className='text-indigo-600'>{player.winParcentage}%</span></ p>

                        <button onClick={() => handleResetStats(player)} className='btn bg-red-500 hover:bg-transparent hover:text-red-500 hover:border-red-500 hover:scale-110 btn-sm mt-3 text-white w-32'>Reset Stats</button>
                    </div>
                </div>
            </div>
            <h1 className='text-4xl font-bold mt-10  text-blue-800 tracking-wider banner-font underline'>Update Data !!</h1>
            <div className='flex justify-evenly'>
                <form onSubmit={handleMatchWin}>
                    <div className="card-body p-3 md:p-8 w-96 rounded-lg">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-secondary text-lg font-semibold">Match Win :</span>
                            </label>
                            <input ref={winRef} onChange={handleWinBtnDisabled} type="number" className="input input-bordered" name='matchwin' placeholder='Win Matches' required />
                        </div>

                        <input disabled={winInputBtn < 1 ? true : false} className='btn btn-accent hover:bg-transparent hover:text-accent hover:scale-105 flex justify-end mt-3 text-white mx-auto' type="submit" value="Update" />
                    </div>
                </form>
                <form onSubmit={handleMatchLost}>
                    <div className="card-body p-3 md:p-8 w-96 rounded-lg">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-secondary text-lg font-semibold">Match Lost :</span>
                            </label>
                            <input ref={lostRef} onChange={handleBtnDisabled} type="number" className="input input-bordered" name='matchlost' placeholder='Lost Matches' required />
                        </div>

                        <input disabled={lostInputBtn < 1 ? true : false} className='btn btn-accent hover:bg-transparent hover:text-accent hover:scale-105 flex justify-end mt-3 text-white mx-auto' type="submit" value="Update" />
                    </div>
                </form>
                <form onSubmit={handleMatchDraw}>
                    <div className="card-body p-3 md:p-8 w-96 rounded-lg">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-secondary text-lg font-semibold">Match Draw :</span>
                            </label>
                            <input ref={drawRef} onChange={handleDrawBtnDisabled} type="number" className="input input-bordered" name='matchdraw' placeholder='Drawn Matches' required />
                        </div>

                        <input disabled={drawInputBtn < 1 ? true : false} className='btn btn-accent hover:bg-transparent hover:text-accent hover:scale-105 flex justify-end mt-3 text-white mx-auto' type="submit" value="Update" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdatePlayerHistory;