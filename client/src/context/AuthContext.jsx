// context for auth state
import { API_URL } from "../constants";
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
        token: action.payload.token,
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      return { ...state, token: null };
    default:
      return state;
  }
};

function getTokenFromStorage() {
  return localStorage.getItem("token") ? localStorage.getItem("token") : null;
}

// make a provider
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    token: getTokenFromStorage(),
  });

  const login = (body) => {
    return httpClientWithOutToken(`${API_URL}/signin`, "POST", body)
      .then((res) => {
        dispatch({
          type: "LOGIN",
          payload: { token: res.data.token },
        });
        return { status: true };
      })
      .catch((err) => {
        console.log(err);
        return { status: false, message: err.response.data.msg };
      });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const register = (body) =>
    httpClientWithOutToken(`${API_URL}/signup`, "POST", body)
      .then((res) => {
        console.log(res);
        dispatch({ type: "REGISTER", payload: { token: res.data.token } });
        return { status: true };
      })
      .catch((err) => {
        console.log(err);
        return { status: false, message: err.response.data.msg };
      });

  const value = { ...state, login, logout, register };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider, useAuth };
