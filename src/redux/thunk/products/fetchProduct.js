import { fetchPosts } from './../../actions/productAction';

const loadProductData = () => {
  return async (dispatch, getState) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    if (data.length) {
      dispatch(fetchPosts(data))
    }
  }
}

export default loadProductData;
