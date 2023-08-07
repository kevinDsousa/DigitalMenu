import { useContext } from 'react';
import { LoginContext } from '../App';
import { LoginFormValues } from '../types/LoginFormValues';

export const useLogin = () => {
  const loginContext = useContext(LoginContext);

  const handleLogin = (values: LoginFormValues) => {
    if (values.username === 'kevin' && values.password === '123') {
      console.log('logado:', values);
      if (loginContext && loginContext.setLogado) {
        loginContext.setLogado(true);
        localStorage.setItem('logado', JSON.stringify(values));
      }
    }
  };

  return {
    handleLogin
  };
};
