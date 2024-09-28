import React, { useEffect, useState } from 'react';
import api from '../services/api';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await api.get('/posts');
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <section className="posts">
      <div className="container">
        <h2>Últimas Postagens</h2>
        {posts.map(post => (
          <article className="post" key={post.id}>
            <img src={post.image} alt={post.title} />
            <div>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <p className="author">Por: {post.author}</p>
              <a href={`/post/${post.id}`} className="btn-secondary">Leia mais</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PostList;
