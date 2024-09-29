import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/estilos.css';

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isDebounced, setIsDebounced] = useState(false); // Controle de debounce

  const toggleMenu = (event) => {
    if (event.type === 'touchstart') event.preventDefault(); // Evita cliques múltiplos no mobile
    if (isDebounced) return; // Evita a função se debounce estiver ativo
    setIsDebounced(true); // Ativa debounce

    setIsMenuActive(!isMenuActive);

    setTimeout(() => {
      setIsDebounced(false); // Remove debounce após 300ms
    }, 300);
  };

  const closeMenu = () => {
    setIsMenuActive(false); // Fecha o menu ao clicar em um link
  };

  return (
    <header id="header" className="navbar">
      <div className="container">
        <Link id="logo" to="/">
          <img src="/assets/logo.png" alt="Minha Escola Logo" className="logo-img" />
        </Link>
        <input type="text" className="search-input" placeholder="Buscar..." />
        <nav id="nav" className={isMenuActive ? 'active' : ''}>
          <button
            aria-label={isMenuActive ? 'Fechar Menu' : 'Abrir Menu'}
            id="btn-mobile"
            aria-haspopup="true"
            aria-controls="menu"
            aria-expanded={isMenuActive}
            onClick={toggleMenu}
            onTouchStart={toggleMenu} // Evita bugs no mobile
          >
            <span id="hamburger"></span>
          </button>
          <ul id="menu" role="menu">
            <li><Link to="/" onClick={closeMenu}>Início</Link></li>
            <li><Link to="/postagens" onClick={closeMenu}>Postagens</Link></li>
            <li><Link to="/contato" onClick={closeMenu}>Contato</Link></li>
            <li><Link to="/login" onClick={closeMenu}>Logar/Cadastrar</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
