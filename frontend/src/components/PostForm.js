import React, { useState, useEffect } from 'react';
import api from '../services/api';

const PostForm = ({ isEditing = false, postId = null }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: ''
  });

  useEffect(() => {
    if (isEditing) {
      const fetchPost = async () => {
        const response = await api.get(`/posts/${postId}`);
        setFormData(response.data);
      };
      fetchPost();
    }
  }, [isEditing, postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await api.put(`/posts/${postId}`, formData);
    } else {
      await api.post('/posts', formData);
    }
    window.location.href = '/admin';
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Título</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Conteúdo</label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="author">Autor</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
        />
      </div>
      <button type="submit" className="btn">Salvar</button>
    </form>
  );
};

export default PostForm;
