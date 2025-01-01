import React, { useContext } from "react";

const createContext = React.createContext({
  theme: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ContextProvider = createContext.Provider;

export default function useTheme() {
  return useContext(createContext);
}
