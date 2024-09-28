import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await api.get(`/posts/${id}`);
      setPost(response.data);
    };
    fetchPost();
  }, [id]);

  if (!post) {
    return <p>Carregando...</p>;
  }

  return (
    <section className="post-detail">
      <div className="container">
        <img src={post.image} alt={post.title} />
        <h1>{post.title}</h1>
        <p><strong>Autor:</strong> {post.author}</p>
        <p>{post.content}</p>
      </div>
    </section>
  );
};

export default PostDetail;
