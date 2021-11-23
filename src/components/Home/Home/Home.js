import React from 'react';
import Banner from '../Banner/Banner';
import Foods from '../Foods/Foods';
import Footer from '../Footer/Footer';
import HotDog from '../HotDog/HotDog';
import LatestNews from '../LatestNews/LatestNews';
import MenuArea from '../MenuArea/MenuArea';
import NavBar from '../NavBar/NavBar';
import Review from '../Review/Review';
import SpecialFoodArea from '../SpecialFoodArea/SpecialFoodArea';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <MenuArea></MenuArea>
            <Foods></Foods>
            <HotDog></HotDog>
            <SpecialFoodArea></SpecialFoodArea>
            <Review></Review>
            <LatestNews></LatestNews>
            <Footer></Footer>
        </div>
    );
};

export default Home;