import { useState } from 'react';
import { InputLabel } from '../../components/InputLabel';
import { InputNumber } from '../../components/InputNumber';
import { Container, SimpleButton, SimpleWrapper } from './styles';
import { Coins } from 'phosphor-react';
import { Api } from '../../utils/Api';
import { useCalcContext } from '../../contexts/CalculatorContext';
import { useAuthContext } from '../../contexts/AuthContext';

export const Billing = () => {
  const { user } = useAuthContext();
  const { handleBalance } = useCalcContext();
  const [amount, setAmount] = useState<number>(100);
  const [processing, setProcessing] = useState<boolean>(false);
  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let value = Number(e.target.value);
    if (value > 900) {
      value = 900;
    } else if (value < 100) {
      value = 100;
    }

    setAmount(Number(value));
  };

  const getCredits = async (): Promise<void> => {
    try {
      if (user.token) {
        setProcessing(true);
        const payload = {
          amount: amount,
        };

        const response = await Api.post({
          endpoint: 'balances',
          payload,
          token: user.token,
        });
        const result = response.data.balance;

        handleBalance(result);
      }
    } catch (error) {
      console.log(error);
    }
    setProcessing(false);
  };

  return (
    <Container>
      <SimpleWrapper>
        <InputLabel>
          <span>Set value (max.: 900)</span>
          <InputNumber
            step={100}
            min={100}
            max={900}
            value={amount}
            onChange={(e) => handleAmount(e)}
          />
        </InputLabel>
        <SimpleButton onClick={getCredits} disabled={processing}>
          Get<span>{amount}</span>
          <Coins />
        </SimpleButton>
      </SimpleWrapper>
    </Container>
  );
};
