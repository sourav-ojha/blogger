import React, { createContext, useReducer } from "react";
import postApi from "../api/post";
import sanitize from "sanitize";
// make a usePost hook
const PostContext = createContext();
const usePost = () => React.useContext(PostContext);

// make initial state
const initialState = {
  q: "",
  posts: [],
  isFetching: false,
  isError: false,
  errorMessage: "",
  successMessage: "",
};

// make a reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    case "SUCCESS_MESSAGE":
      return {
        ...state,
        successMessage: action.payload,
      };
    case "ERROR_MESSAGE":
      return {
        ...state,
        isError: true,
        errorMessage: action.payload,
      };
    case "CLEAR_ERROR":
      return {
        ...state,
        isError: false,
        errorMessage: "",
      };
    case "CLEAR_SUCCESS":
      return {
        ...state,
        successMessage: "",
      };

    default:
      return state;
  }
};

// make a provider
const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPosts = async () => {
    try {
      const res = await postApi.getPosts();
      dispatch({ type: "GET_POSTS", payload: res.data });
    } catch (err) {
      dispatch({ type: "ERROR_MESSAGE", payload: err.response.data.message });
    }
    clearMessage();
  };

  const likePost = async (post_id) => {
    try {
      const res = await postApi.likePost(post_id);
      console.log(res);
      dispatch({ type: "SUCCESS_MESSAGE", payload: res.data.msg });
    } catch (err) {
      console.log(err.response);
      dispatch({ type: "ERROR_MESSAGE", payload: err.response.data.msg });
    }
    clearMessage();
  };

  const clearMessage = () => {
    console.log("clear called");
    setTimeout(() => {
      console.log("clear executed");
      dispatch({ type: "CLEAR_ERROR" });
      dispatch({ type: "CLEAR_SUCCESS" });
    }, 3000);
  };

  return (
    <PostContext.Provider
      value={{
        ...state,
        getPosts,
        likePost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export { PostProvider, usePost };
