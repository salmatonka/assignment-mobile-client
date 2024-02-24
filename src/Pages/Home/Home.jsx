import React from 'react';
import Categories from '../Categories/Categories';
import AllUsedProducts from '../AllUsedProducts/AllUsedProducts';
import HeadLine from '../HomePages/HeadLine';
import HomeBanner from '../HomePages/HomeBanner';
import ChooseOption from '../HomePages/ChooseOption';
import SourcingPage from '../HomePages/SourcingPage';
import MobilePrice from '../HomePages/MobilePrice';
import Reviews from '../HomePages/Reviews';
import OfferPhones from '../HomePages/OfferPhones';
import useTitle from '../../Hooks/useTitle';

const Home = () => {
    useTitle('Home');
    return (
        <div>
             {/* < TypeWriter /> */}
             < HeadLine />
            < HomeBanner />
            <Categories />
            {/* <AllUsedProducts /> */}
            < SourcingPage />
            < ChooseOption />
            < Reviews />
            < MobilePrice />
            < OfferPhones />
        </div>
    );
};

export default Home;