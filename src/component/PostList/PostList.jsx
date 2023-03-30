import React from 'react';

const PostList = ({post, setEditPostId, handleDeletePost}) => {
  return (
    <div className='single-post'>
         <h3>{post.title}</h3>
        <p>{post.body}</p>
        <button onClick={() => setEditPostId(post.id)}>Edit</button>
        <button onClick={() => handleDeletePost(post.id)}>Delete</button>
    </div>
  );
};

export default PostList;