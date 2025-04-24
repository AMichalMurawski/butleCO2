import React from 'react';
import { About, ContactUs, GoogleReviews, Hero, Services, WhyChooseUs } from '../../sections';

const HomePage: React.FC = () => {
    return <>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <ContactUs />
        <GoogleReviews />
    </>
}

export default HomePage