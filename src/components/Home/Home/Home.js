import React from 'react';
import ReviewSection from '../../DashBoard/ReviewSection/ReviewSection';
import Banner from '../Banner/Banner';
import Foods from '../Foods/Foods';
import Footer from '../Footer/Footer';
import HotDog from '../HotDog/HotDog';
import LatestNews from '../LatestNews/LatestNews';
import MenuArea from '../MenuArea/MenuArea';
import NavBar from '../NavBar/NavBar';
import SpecialFoodArea from '../SpecialFoodArea/SpecialFoodArea';

const Home = () => {
    return (
        <div style={{ backgroundColor: 'black'}}>
            <NavBar></NavBar>
            <Banner></Banner>
            <MenuArea></MenuArea>
            <Foods></Foods>
            <HotDog></HotDog>
            <ReviewSection></ReviewSection>
            <SpecialFoodArea></SpecialFoodArea>
            <LatestNews></LatestNews>
            <Footer></Footer>
        </div>
    );
};

export default Home;