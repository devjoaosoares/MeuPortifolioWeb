import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <span className="shape shape-1" />
        <span className="shape shape-2" />
        <span className="shape shape-3" />
        <span className="shape shape-4" />
        <span className="shape shape-5" />
        <span className="shape shape-6" />
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