import React, { useState } from 'react';
import Header from '../components/Header';
import Modal from '../components/Modal';

const Desenvolvimento = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      img: '../assets/LogoSvg.svg',
      title: 'Claridade',
      description: 'SAAS Em Desenvolvimento, feito totalmente do zero, utilizando React, Node.js(Express) e Supabase. O projeto é uma plataforma de geração de relatórios automáticos, onde o usuário pode conectar suas contas de anúncios e redes sociais para gerar relatórios personalizados e detalhados sobre o desempenho de suas campanhas e estratégias de marketing.'
    },
    {
      id: 2,
      img: '/assets/portifolioprint.png',
      title: 'Meu Portifólio Web',
      description: 'Projeto Open Source, Utilizando React, Repositório simples para quem deseja aprender a criar um portifólio web do zero, utilizando as melhores práticas de desenvolvimento web, incluindo design responsivo, animações suaves e uma estrutura de código organizada.'
    },
    {
      id: 3,
      img: '/assets/developing2.png',
      title: 'Projeto de Desenvolvimento 3',
      description: 'Descrição detalhada do projeto de desenvolvimento 3. Aqui você pode adicionar mais informações sobre o projeto, tecnologias utilizadas, desafios enfrentados e resultados obtidos.'
    }
  ];

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div>
      <Header />
      <main>
        <div className="container">
          <div className="header-text-h1">
            <h1>Projetos de Desenvolvimento</h1>
            <p>Aqui estão todos os meus projetos de desenvolvimento web, incluindo sites, aplicações e soluções personalizadas.</p>
          </div>
        </div>
        <div className="projects-grid animate-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card animate-card"
              onClick={() => handleCardClick(project)}
              style={{ '--card-delay': `${index * 0.08}s` }}
            >
              <img src={project.img} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description.substring(0, 100)}...</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Modal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />
    </div>
  );
};

export default Desenvolvimento;