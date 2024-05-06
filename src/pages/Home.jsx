import React from 'react';
import dataServices from '../assets/fake-data/data-services';

import Header from '../components/header/Header'
import Responsive from '../components/layouts/Responsive';
import Footer from '../components/footer/Footer'

import Services from '../components/layouts/Services';

import Slider from '../components/slider/Slider';
import ButtonWhatsapp from '../components/button/ButtonWhatsapp';



const Home = () => {
  return (
    <div className='home-3'>
        <Header />
        <Slider />
        <Services data={dataServices} />
        <Responsive />           
        <ButtonWhatsapp/>
        <Footer />
    </div>
  );
}

export default Home;