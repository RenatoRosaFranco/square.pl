import React from 'react';
import './style.scss';

import Hero from '../../components/Hero/Index';
import Technologies from '../../components/Technologies/Index';
import Testimonials from '../../components/Testimonials/Index';
import Contact from '../../components/Contact/Index';

const Home = () => {
  return(
    <>
      <Hero />
      <Technologies />
      <Testimonials />
      <Contact />
    </>
  )
}

export default Home;