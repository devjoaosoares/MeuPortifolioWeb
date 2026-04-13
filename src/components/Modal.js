import React from 'react';

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <img src={project.img} alt={project.title} className="modal-image" />
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default Modal;