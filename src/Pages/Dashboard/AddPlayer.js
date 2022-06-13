import React from 'react';
import { toast } from 'react-toastify';

const AddPlayer = () => {

    const handleAddPlayer = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const img = e.target.img.value;
        const played = e.target.played.value;
        const win = e.target.matchwin.value;
        const lost = e.target.matchlost.value;
        const draw = e.target.matchdraw.value;
        const winParcentage = e.target.winrate.value;
        const phone = e.target.phone.value;
        const age = e.target.age.value;
        const gameId = e.target.gameId.value;
        const device = e.target.device.value;

        const player = { name, email, img, played, win, lost, draw, winParcentage, phone,age,gameId,device }

        fetch('http://localhost:5000/addplayer', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(player)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('New player added')
                }
            })
        e.target.reset();
    }
    return (
        <div className='bg-zinc-300 w-3/5 mx-auto rounded-3xl mt-3'>
            <h1 className='text-4xl font-bold pt-10 text-black tracking-widest banner-font underline'>Add a new player !!</h1>
            <form onSubmit={handleAddPlayer}>
                <div className="card-body p-3 md:p-8 w-full md:w-4/5 mx-auto  rounded-lg">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-secondary text-md font-bold">Name :</span>
                        </label>
                        <input type="text" placeholder='Player name' className="input input-bordered" name='name' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-secondary text-md font-bold">Email:</span>
                        </label>
                        <input type="email" placeholder='Player email' className="input input-bordered" name='email' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-secondary text-md font-bold">Image</span>
                        </label>
                        <input type="text" placeholder='Player image URL' className="input input-bordered" name='img' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-secondary text-md font-bold">Player Age:</span>
                        </label>
                        <input type="number" placeholder='Age' className="input input-bordered" name='age' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-secondary text-md font-bold">Game ID:</span>
                        </label>
                        <input type="number" placeholder='In game ID' className="input input-bordered" name='gameId' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-secondary text-md font-bold">Device:</span>
                        </label>
                        <input type="text" placeholder='Player Device' className="input input-bordered" name='device' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-secondary text-md font-bold">Match Played:</span>
                        </label>
                        <input type="number" placeholder='Match Played' className="input input-bordered" name='played' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-secondary text-md font-bold">Match Won:</span>
                        </label>
                        <input type="number" placeholder='Match Won' className="input input-bordered" name='matchwin' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-secondary text-md font-bold">Match Lost:</span>
                        </label>
                        <input type="number" placeholder='Match Lost' className="input input-bordered" name='matchlost' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-secondary text-md font-bold">Match Draw:</span>
                        </label>
                        <input type="number" placeholder='Match Draw' className="input input-bordered" name='matchdraw' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-secondary text-md font-bold">Win Parcentage:</span>
                        </label>
                        <input type="text" placeholder='Win Parcentage' className="input input-bordered" name='winrate' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-secondary text-md font-bold">Phone:</span>
                        </label>
                        <input type="tel" placeholder='+880' className="input input-bordered" name='phone' />
                    </div>

                    <input className='btn bg-blue-800 hover:bg-transparent text-white hover:text-black hover:scale-110 w-2/5 mx-auto mt-2' type="submit" value="Add Player" />
                </div>
            </form>
        </div>
    );
};

export default AddPlayer;