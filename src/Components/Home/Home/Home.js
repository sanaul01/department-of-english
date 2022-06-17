import React from 'react';
import Banner from '../Banner/Banner';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Body/>
            <Footer/>
        </div>
    );
};

export default Home;