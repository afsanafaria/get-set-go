import React from 'react';
import Services from '../../../components/Services/Services';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import OurPartners from '../OurPartners/OurPartners';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Gallery></Gallery>
            <OurPartners></OurPartners>
        </div>
    );
};

export default Home;