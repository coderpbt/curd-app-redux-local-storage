import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, deletePost } from '../../redux/actions/productAction';
import loadProductData from '../../redux/thunk/products/fetchProduct';
import { editPost } from './../../redux/actions/productAction';
// import PostList from './../../component/PostList/PostList';

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [editPostId, setEditPostId] = useState(null);

  const handleAddPost = () => {
    if (!title || !body) {
      alert("title & body cant be empty!")
      return;
    }
    const newPost = {
      id: Date.now() % 50,
      title: title,
      body: body,
      userId : Date.now() % 30,
    };

    dispatch(addPost(newPost));
    setTitle('');
    setBody('');
    setEditPostId(null);
  };

  const handleEditButtonClick = (post) => {
    setTitle(post.title);
    setBody(post.body);
    setEditPostId(post.id);
    console.log(editPostId);
  };
  
  const handleEditPost = () => {
    const updatedPost = {
      id: editPostId,
      title: title,
      body: body,
      userId : editPostId,
    };
  
    dispatch(editPost(updatedPost));
    setTitle('');
    setBody('');
    setEditPostId(null);
  };

  const handleDeletePost = (postId) => {
    dispatch(deletePost(postId));
  };

  const loadPostsFromLocalStorage = () => {
    const savedPosts = JSON.parse(localStorage.getItem('posts'));
    if (savedPosts) {
      dispatch({ type: 'FETCH_POSTS', payload: savedPosts });
    } else {
      dispatch(loadProductData());
    }
  };

  useEffect(() => {
    loadPostsFromLocalStorage();
  }, []);

  return (
    <div>
      <div className='add-post-parent'>
        <h2>Add Post</h2>
        <div className="post-input-box">
        <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />

          {editPostId ? (
            <button onClick={handleEditPost}>Update Post</button>
          ) : (
            <button onClick={handleAddPost}>Add Post</button>
          )}
        </div>
      </div>

      <h2>Posts</h2>
      <div className='single-post-parent'>
         {posts.slice().reverse().map((post, index) => (
            <div className='single-post' key={index}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <button onClick={() => handleEditButtonClick(post)}>Edit</button>
              <button onClick={() => handleDeletePost(post.id)}>Delete</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;