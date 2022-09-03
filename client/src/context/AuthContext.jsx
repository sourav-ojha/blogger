// context for auth state
import React, { createContext, useReducer } from "react";
import { httpClientWithOutToken } from "../utils/httpClient";

// make a useAuth hook
const AuthContext = createContext();
const useAuth = () => React.useContext(AuthContext);

// make a reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      return { user: null, token: null };
    default:
      return state;
  }
};

// make a provider
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    user: null,
    token: null,
  });

  const login = (body) => {
    return httpClientWithOutToken("", "POST", body)
      .then((res) => {
        dispatch({
          type: "LOGIN",
          payload: { user: res.data?.user, token: res.data?.token },
        });
        return { status: true };
      })
      .catch((err) => {
        console.log(err);
        return { status: false };
      });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const register = (body) =>
    httpClientWithOutToken("", "POST", body)
      .then((res) => {
        dispatch({ type: "REGISTER", payload: { token: res.data.token } });
        return { status: true };
      })
      .catch((err) => {
        console.log(err);
        return { status: false, message: err.response.data.message };
      });

  const value = { ...state, login, logout, register };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider, useAuth };
