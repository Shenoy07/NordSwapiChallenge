import { useState, createContext, useContext } from "react";

export const CommonContext = createContext();

export default function CommonContextProvider({ children }) {
  const [pageNumber, setPageNumber] = useState(1);
  const [people, setPeople] = useState([]);
  const [displaySearchResult, setDisplaySearchResult] = useState(false);
  return (
    <CommonContext.Provider
      value={{
        pageNumber,
        setPageNumber,
        people,
        setPeople,
        displaySearchResult,
        setDisplaySearchResult
      }}
    >
      {children}
    </CommonContext.Provider>
  );
}

export function useCommonContext() {
  return useContext(CommonContext);
}
