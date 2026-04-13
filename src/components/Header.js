import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">Portfolio : João Vitor Alves Soares</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/desenvolvimento">Desenvolvimento</Link></li>
          <li><Link to="/design">Design</Link></li>
          <li><Link to="/marketing">Marketing</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;