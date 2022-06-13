import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ClubPlayer = ({ clubPlayer }) => {
    const { _id, img, name, age, gameId, device, phone } = clubPlayer;
    const navigate = useNavigate();

    const handleSignlePlayerDetails = (id) => {
        navigate(`/clubplayer/${id}`);
    }
    return (
        <div>
            <div className="card flex-row bg-base-100 shadow-xl">
                <figure className="px-5 py-3">
                    <img src={img} alt={name} className="rounded-xl w-40" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Age: {age}</p>
                    <p>Gaming ID: {gameId}</p>
                    <p>Gaming Device: {device}</p>
                    <p>Phone: {phone}</p>
                    <div className="card-actions">
                        <button onClick={() => handleSignlePlayerDetails(_id)} className="btn btn-accent hover:bg-transparent hover:text-accent hover:scale-110 btn-xs">More Details &nbsp;<FaArrowRight></FaArrowRight></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClubPlayer;