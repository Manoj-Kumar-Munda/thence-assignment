import { createContext, useContext, useState } from "react";

const appContext = createContext();

export const AppContextProvider = ({children}) => {
  const [showRedirectBtn, setShowRedirectBtn] = useState(true);
  const [smMenuOpen, setSmMenuOpen] = useState(false);
  return (
    <appContext.Provider
      value={{ showRedirectBtn, setShowRedirectBtn, smMenuOpen, setSmMenuOpen }}
    >
        {children}
    </appContext.Provider>
  );
};


export default function useAppContext(){
    return useContext(appContext);
}