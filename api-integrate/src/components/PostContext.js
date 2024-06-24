import React, { createContext, useContext } from 'react';
import useAsync from './useAsync';


const PostsStateContext = createContext(null);
const PostsDispatchContext = createContext(null);

const PostsProvider = ({ children }) => {
    const [state, dispatch] = useAsync(async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // Limit the posts to the first 20
      return data.slice(0, 20);
    }, []);
  
    return (
        <PostsStateContext.Provider value={state}>
            <PostsDispatchContext.Provider value={dispatch}>
                {children}
            </PostsDispatchContext.Provider>
        </PostsStateContext.Provider>
    );
}

const usePostsState = () => {
    const state = useContext(PostsStateContext);    
    if (!state) {
        throw new Error('usePostsState must be used within a PostsProvider');
    }
    return state;
};

const usePostsDispatch = () => {
    const dispatch = useContext(PostsDispatchContext);
    if (!dispatch) {
        throw new Error('usePostsDispatch must be used within a PostsProvider');
    }
    return dispatch;
}; 


export { PostsProvider, usePostsState, usePostsDispatch };