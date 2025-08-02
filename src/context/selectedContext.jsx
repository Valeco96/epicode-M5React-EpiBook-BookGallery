import { children, createContext, useState, useContext } from "react";

const selectedContext = createContext();

export function selectedProvider({ children }) {
  const [selected, setSelected] = useState();

  return (
    <selectedContext.Provider value={{ selected, setSelected }}>
      {children}
    </selectedContext.Provider>
  );
}

export function useSelected() {
  return useContext(selectedContext);
}
