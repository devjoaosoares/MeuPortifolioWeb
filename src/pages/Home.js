import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProjectGrid from '../components/ProjectGrid';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ProjectGrid />
      <Footer />
    </div>
  );
};

export default Home;