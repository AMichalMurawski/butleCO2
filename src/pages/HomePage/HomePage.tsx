import React, { useEffect } from 'react';
import { About, ContactUs, GoogleReviews, Hero, Services, WhyChooseUs } from '../../sections';
import { useLocation } from 'react-router-dom';

const HomePage: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
        const id = location.hash.replace('#', ''); // Pobieramy ID z hash
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
        }
    }, [location]);

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