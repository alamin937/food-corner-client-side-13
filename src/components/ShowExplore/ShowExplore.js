import React from 'react';
import Footer from '../Home/Footer/Footer';
import NavBar from '../Home/NavBar/NavBar';
import ExploreFoods from './ExploreFoods';

const ShowFoods = () => {
    return (
        <div>
            <NavBar></NavBar>
            <ExploreFoods></ExploreFoods>
            <Footer></Footer>
        </div>
    );
};

export default ShowFoods;