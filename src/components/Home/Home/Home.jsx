import React from 'react';
import Header from '../Header/Header';
import Feature from '../Feature/Feature';
import Importance from '../Importance/Importance';
import Introduction from '../Introduction/Introduction';
import Emergency from '../Emergency/Emergency';
import Banner from '../Banner/Banner';
import Caution from '../Caution/Caution';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className="container">
            <Banner />
            <Header/>
            <Introduction />
            <Feature />
            <Importance />
            <Caution />
            <Emergency />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;