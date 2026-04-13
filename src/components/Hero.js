import React from 'react';
import AnimatedBackground from './BackgroundAnimacao';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <AnimatedBackground />
      </div>
      <div className="hero-card">
        <div className="hero-avatar">
          <img className='avatarImg' src="/assets/fotodeperfil.png" alt="João Soares" />
        </div>
        <h1>Meu portifólio online</h1>
        <p>Designer | Desenvolvedor | Gestor de Tráfego</p>
      </div>
    </section>
  );
};

export default Hero;