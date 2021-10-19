import React from 'react';
import Faq from '../../components/FAQ/Faq';
import Therapies from '../Therapies/Therapies';
import Newsletter from './Newsletter/Newsletter';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Therapies></Therapies>
            <Faq></Faq>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;