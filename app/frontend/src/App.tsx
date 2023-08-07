import { useEffect, useState, createContext } from "react";
import { Ways } from "./routes/Ways";
import { LoginContextType } from "./types/LoginContextType";

export const LoginContext = createContext<LoginContextType | null>(null);

export const App = () => {
  const [logado, setLogado] = useState(false);

  useEffect(() => {
    const logadoFromLocalStorage = localStorage.getItem('logado');
    const parsedLogado = logadoFromLocalStorage !== null ? JSON.parse(logadoFromLocalStorage) : false;
    setLogado(parsedLogado);
  }, []);

  const loginContextValue: LoginContextType = { logado, setLogado };

  return (
    <LoginContext.Provider value={loginContextValue}>
      <Ways />
    </LoginContext.Provider>
  );
};
