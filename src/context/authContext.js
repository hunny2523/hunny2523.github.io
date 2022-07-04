import { useReducer,useEffect } from "react";
import { createContext } from "react"



const INITIAL_STATE = {
    loading: false,
    error: null
}

export const authContext = createContext(INITIAL_STATE);

const authReducer = (state, action) => {
    console.log('action', action);
    switch (action.type) {
        case "LOGIN_START":
            return {
                loading: true,
                error: null
            };
        case "LOGIN_SUCCESS":
            return {
                loading: false,
                error: null
            };
        case "LOGIN_FAILURE":
            return {
                loading: false,
                error: action.payload
            };
        case "LOGOUT":
            return {
                loading: false,
                error: null,
            };
        default:
            return state;
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);
  
    return (
      <authContext.Provider
        value={{
          loading: state.loading,
          error: state.error,
          dispatch,
        }}
      >
        {children}
      </authContext.Provider>
    );
  };