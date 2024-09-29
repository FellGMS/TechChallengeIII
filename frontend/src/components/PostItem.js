import React from 'react';
import { Link } from 'react-router-dom';
import '../css/estilos.css';

const PostItem = ({ post }) => {
  return (
    <article className="post">
      <img src="/assets/img/post1.jpg" alt="Foto relacionada ao post" />
      <div>
        <h3>{post.titulo}</h3>
        <p>{post.descricao}</p>
        <p className="author">Por: {post.autor}</p>
        <Link to={`/post/${post.id}`} className="btn-secondary">Leia mais</Link>
      </div>
    </article>
  );
};

export default PostItem;
