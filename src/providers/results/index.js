import { createContext, useState } from "react";

export const ResultContext = createContext();

export const ResultsProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [value, setValue] = useState(0);

  return (
    <ResultContext.Provider
      value={{ results, setResults, value, setValue }}
    >
      {children}
    </ResultContext.Provider>
  );
};
