import { createContext, useState } from "react";

export const TreinoContext = createContext({});

const TreinoProvider = ({ children }) => {
  const [dados, setDados] = useState(null);

  const handleInfo = (info) => {
    setDados(info);
  };

  return (
    <TreinoContext.Provider value={{ dados, setDados, handleInfo }}>
      {children}
    </TreinoContext.Provider>
  );
};

export default TreinoProvider;
