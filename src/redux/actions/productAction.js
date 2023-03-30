import { ADD_POST, DELETE_POST, EDIT_POST, FETCH_POSTS } from "../actionTypes/actionTypes";

export const fetchPosts = (posts) => {
  return {
    type: FETCH_POSTS,
    payload: posts,
  };
};

export const addPost = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};

export const editPost = (post) => {
  return {
    type: EDIT_POST,
    payload: post,
  };
};

export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    payload: postId,
  };
};