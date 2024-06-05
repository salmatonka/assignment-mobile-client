import React from 'react';
import Categories from '../Categories/Categories';
import HeadLine from '../HomePages/HeadLine';
import HomeBanner from '../HomePages/HomeBanner';
import ChooseOption from '../HomePages/ChooseOption';
import SourcingPage from '../HomePages/SourcingPage';
import MobilePrice from '../HomePages/MobilePrice';
import Reviews from '../HomePages/Reviews';
import OfferPhones from '../HomePages/OfferPhones';
import useTitle from '../../Hooks/useTitle';
import Products from '../Products/Products';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            
             < HeadLine />
            < HomeBanner />
            <Categories />
            <Products />
            < SourcingPage />
            < ChooseOption />
            < Reviews />
            < MobilePrice />
            < OfferPhones />
        </div>
    );
};

export default Home;