import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Modal from '../components/Modal';

const Desenvolvimento = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      img: '',
      title: 'Claridade',
      description: 'Descrição detalhada do projeto Claridade. Aqui você pode adicionar mais informações sobre o projeto, tecnologias utilizadas, desafios enfrentados e resultados obtidos.'
    },
    {
      id: 2,
      img: '/assets/developing2.png',
      title: 'Projeto de Desenvolvimento 2',
      description: 'Descrição detalhada do projeto de desenvolvimento 2. Aqui você pode adicionar mais informações sobre o projeto, tecnologias utilizadas, desafios enfrentados e resultados obtidos.'
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
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />
    </div>
  );
};

export default Desenvolvimento;