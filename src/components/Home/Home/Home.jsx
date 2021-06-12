import React from 'react';
import Header from '../Header/Header';
import Feature from '../Feature/Feature';
import Importance from '../Importance/Importance';
import Introduction from '../Introduction/Introduction';

const Home = () => {
    return (
        <div className="container">
            <Header/>
            <Introduction />
            <Feature />
            <Importance />
        </div>
    );
};

export default Home;