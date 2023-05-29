import { useEffect } from 'react';
import { useCalcContext } from '../../contexts/CalculatorContext';
import { Api } from '../../utils/Api';
import { LocalStorageService, TOKEN_KEY } from '../../utils/LocalStorage';
import { useAuthContext } from '../../contexts/AuthContext';
import { AppCalculator } from '../AppCalculator';

export const Calculator = () => {
  const { handleBalance: handleCredits } = useCalcContext();
  const { handleUser } = useAuthContext();

  const getCredits = async (token: string): Promise<number> => {
    const response = await Api.get({ endpoint: `balances`, token: token });
    const { amount } = response.data;
    return amount;
  };
  useEffect(() => {
    const storedToken = LocalStorageService.get(TOKEN_KEY);
    handleUser({ token: storedToken });
    const result = async () => {
      const response = await getCredits(storedToken);
      handleCredits(response);
    };
    result();
  }, []);

  return <AppCalculator />;
};
