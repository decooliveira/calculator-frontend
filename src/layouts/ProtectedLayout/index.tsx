import { Outlet, useNavigate } from 'react-router-dom';
import { LayoutContainer } from './styles';
import { Header } from '../../components/Header';
import { useAuthContext } from '../../contexts/AuthContext';
import { LocalStorageService, TOKEN_KEY } from '../../utils/LocalStorage';
import { useEffect } from 'react';
import { Api } from '../../utils/Api';
import { useCalcContext } from '../../contexts/CalculatorContext';

export const ProtectedLayout = () => {
  const navigate = useNavigate();
  const { handleBalance: handleCredits } = useCalcContext();
  const { handleUser, user } = useAuthContext();

  const getCredits = async (token: string): Promise<number> => {
    const response = await Api.get({ endpoint: `balances`, token: token });
    const { amount } = response.data;
    return amount;
  };

  useEffect(() => {
    const storedToken = LocalStorageService.get(TOKEN_KEY);
    if (storedToken) {
      
      handleUser({ token: storedToken });
    } else {
      if (user?.token === undefined || user?.token === '') {
        navigate('/login');
      }
    }

    const result = async () => {
      const response = await getCredits(storedToken);
      handleCredits(response);
    };
    result();
  },[]);

  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
};
