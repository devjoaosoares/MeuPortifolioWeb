import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectGrid = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Projetos Desenvolvidos</h2>
        <div className="projects-grid">
          <ProjectCard
            to="/design"
            imgSrc="/assets/designplace.png"
            alt="Projetos de Design"
            title="Design"
            description="Todos Projetos de Design aqui!"
          />
          <ProjectCard
            to="/desenvolvimento"
            imgSrc="/assets/developingplace.png"
            alt="Meus Projetos como Desenvolvedor"
            title="Desenvolvimento Web"
            description="Todos Projetos de Desenvolvimento Web aqui!"
          />
          <ProjectCard
            to="/marketing"
            imgSrc="/assets/marketingplace.png"
            alt="Trabalhos Executados como Gestor de Tráfego"
            title="Marketing e Tráfego"
            description="Todos Projetos de Marketing e Tráfego aqui!"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;