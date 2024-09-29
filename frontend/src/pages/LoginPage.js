import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/login', { email, senha })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        navigate('/admin');
      })
      .catch(error => console.error('Erro no login:', error));
  };

  return (
    <main className="auth-form">
      <section className="container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
          </div>
          <button type="submit" className="btn">Entrar</button>
        </form>
        <p>Não tem uma conta? <a href="/cadastro">Cadastre-se</a></p>
      </section>
    </main>
  );
};

export default LoginPage;
