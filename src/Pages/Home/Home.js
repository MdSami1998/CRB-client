import React from 'react';
import Achievement from './Achievement';
import Banner from './Banner';
import PlayersOfTheMonth from './PlayersOfTheMonth';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Achievement></Achievement>
            <PlayersOfTheMonth></PlayersOfTheMonth>
        </div>
    );
};

export default Home;