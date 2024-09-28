import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="navbar">
      <div className="container">
        <Link to="/">
          <img src="/assets/logo.png" alt="Minha Escola Logo" className="logo-img" />
        </Link>
        <input type="text" className="search-input" placeholder="Buscar..." />
        <nav>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/postagens">Postagens</Link></li>
            <li><Link to="/contato">Contato</Link></li>
            <li><Link to="/login">Logar/Cadastrar</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
