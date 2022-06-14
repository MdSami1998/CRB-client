import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ClubPlayer = ({ clubPlayer }) => {
    const { _id, img, name, age, gameId, device, phone,winParcentage } = clubPlayer;
    const navigate = useNavigate();

    const handleSignlePlayerDetails = (id) => {
        navigate(`/clubplayer/${id}`);
    }
    return (
        <div>
            <div className="card flex-row bg-base-100 shadow-xl h-56">
                <figure className="px-5 py-3">
                    <img src={img} alt={name} className="rounded-xl w-40" />
                </figure>
                <div className="card-body px-2 py-5 text-justify flex justify-center ">
                    <h2 className="card-title">{name}</h2>
                    <h4>Age: {age}</h4>
                    <h4>Win Ratio: {winParcentage} %</h4>
                    <div className="card-actions">
                        <button onClick={() => handleSignlePlayerDetails(_id)} className="btn btn-accent hover:bg-transparent hover:text-accent hover:scale-110 btn-xs">More Details &nbsp;<FaArrowRight></FaArrowRight></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClubPlayer;