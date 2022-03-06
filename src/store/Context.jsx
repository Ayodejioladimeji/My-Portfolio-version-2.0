import React, { createContext, useReducer } from "react";
import reducer from "./Reducers";

export const Context = createContext();

const initialState = {
  nav: false,
  scroll: 0,
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};
