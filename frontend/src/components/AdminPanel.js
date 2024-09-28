import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await api.get('/posts');
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  const deletePost = async (id) => {
    await api.delete(`/posts/${id}`);
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <section className="admin-posts">
      <div className="container">
        <h1>Administração de Postagens</h1>
        <Link to="/create" className="btn">Nova Postagem</Link>
        <table className="posts-table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Autor</th>
              <th>Data</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>{post.author}</td>
                <td>{new Date(post.createdAt).toLocaleDateString()}</td>
                <td>
                  <Link to={`/edit/${post.id}`} className="btn-edit">Editar</Link>
                  <button onClick={() => deletePost(post.id)} className="btn-delete">Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminPanel;
