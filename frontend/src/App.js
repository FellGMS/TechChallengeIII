import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CadastroPage from './pages/CadastroPage';
import CriarPostPage from './pages/CriarPostPage';
import EditarPostPage from './pages/EditarPostPage';
import PostDetailPage from './pages/PostDetailPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/criar-post" element={<CriarPostPage />} />
        <Route path="/editar-post/:id" element={<EditarPostPage />} />
        <Route path="/post/:id" element={<PostDetailPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
