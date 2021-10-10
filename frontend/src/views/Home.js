import React from 'react';
import Cta from '../components/sections/Cta';
import FeaturesTiles from '../components/sections/FeaturesTiles';
// import sections
import Hero from '../components/sections/Hero';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <Cta split />
    </>
  );
}

export default Home;