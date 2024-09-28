import React from 'react';
import PostForm from '../components/PostForm';
import { useParams } from 'react-router-dom';

const EditPost = () => {
  const { id } = useParams();

  return (
    <div>
      <PostForm isEditing={true} postId={id} />
    </div>
  );
};

export default EditPost;
