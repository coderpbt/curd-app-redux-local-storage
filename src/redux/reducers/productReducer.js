const initialState = {
  posts: JSON.parse(localStorage.getItem('posts')) || [],
  };
  
  const rootReducer = (state = initialState, action) => {
      switch (action.type) {
          case 'FETCH_POSTS':
          return { 
            ...state, 
            posts: action.payload
           };

           case 'ADD_POST':
            const newPost = action.payload;
            const newPosts = [...state.posts, newPost];
            localStorage.setItem('posts', JSON.stringify(newPosts));
            return { 
              ...state, 
              posts: newPosts 
            };
            
          case 'EDIT_POST':
          const updatedPosts = state.posts.map(post => {
                if (post.id === action.payload.id) {
                return action.payload;
                } else {
                return post;
                }
            });
  
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
        return { ...state, posts: updatedPosts };

      case 'DELETE_POST':
       const filteredPosts = state.posts.filter(post => {
         return post.id !== action.payload;
       });
  
       localStorage.setItem('posts', JSON.stringify(filteredPosts));
       return { 
        ...state, 
        posts: filteredPosts 
      };
     default:
       return state;
   }
  };
  
  export default rootReducer;