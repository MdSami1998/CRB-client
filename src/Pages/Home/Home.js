import React from 'react';
import Achievement from './Achievement';
import Banner from './Banner';
import Contact from './Contact';
import PlayersOfTheMonth from './PlayersOfTheMonth';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Achievement></Achievement>
            <PlayersOfTheMonth></PlayersOfTheMonth>
            <Contact></Contact>
        </div>
    );
};

export default Home;