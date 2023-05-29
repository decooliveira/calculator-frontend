/* eslint-disable no-case-declarations */
import { Button } from '../Button';
import { KeyRow, KeyboardContainer } from './styles';
import { useCalcContext } from '../../contexts/CalculatorContext';
import { OperationsService } from '../../utils/OperationsService';
import { useAuthContext } from '../../contexts/AuthContext';
import { OperationTypes } from '../../@types/enum/OperationTypes';

export const Keyboard = () => {
  const { operation, handleOperation, handleBalance } = useCalcContext();
  const { user } = useAuthContext();

  const performOperation = async ({
    a,
    b,
    operation,
  }: {
    a: number;
    b: number;
    operation: string;
  }) => {
    const service: OperationsService = new OperationsService(user.token);
    const { result, balance } = await service.performMathOperations({
      a,
      b,
      operation: operation,
    });
    handleBalance(balance);
    return result;
  };

  const math = async (a: number, b: number, sign: string) => {
    switch (sign) {
      case '+':
        return performOperation({ a, b, operation: OperationTypes.ADDITION });
      case '-':
        return performOperation({
          a,
          b,
          operation: OperationTypes.SUBTRACTION,
        });
      case '*':
        return performOperation({
          a,
          b,
          operation: OperationTypes.MULTIPLICATION,
        });
      case '/':
        return performOperation({ a, b, operation: OperationTypes.DIVISION });
    }
    return 0;
  };

  const handleNumberClick = (v: string) => {
    handleOperation({
      ...operation,
      num:
        operation.num === 0 && v == '0'
          ? '0'
          : Number(operation.num) % 1 === 0
          ? Number(operation.num + v)
          : operation.num + v,
      result: !operation.sign ? 0 : operation.result,
    });
  };

  const handleSignClick = async (s: string) => {
    let result = 0;
    if (!operation.result && operation.num) {
      result = Number(operation.num);
    } else {
      result = Number(
        await math(operation.result, Number(operation.num), operation.sign || s)
      );
    }
    const response = {
      ...operation,
      sign: s,
      result,
      num: 0,
    };

    handleOperation(response);
  };

  const handleEqualsClick = async () => {
    const result = await math(
      Number(operation.result),
      Number(operation.num),
      operation.sign
    );

    const response = {
      ...operation,
      sign: '',
      result: Number(result),
      num: 0,
    };

    handleOperation(response);
  };

  const handleClearClick = () => {
    handleOperation({
      ...operation,
      sign: '',
      result: 0,
      num: 0,
    });
  };

  const handleDotClick = () => {
    handleOperation({
      ...operation,
      num: !operation.num.toString().includes('.')
        ? operation.num + '.'
        : operation.num,
    });
  };

  return (
    <KeyboardContainer>
      <KeyRow>
        <Button label="C" variant="lightGray" onClick={handleClearClick} />
        <Button label="S" variant="lightGray" />
        <Button label="√" variant="lightGray" />
        <Button
          label="/"
          variant="orange"
          onClick={() => handleSignClick('/')}
        />
      </KeyRow>

      <KeyRow>
        <Button
          label="7"
          variant="gray"
          onClick={() => handleNumberClick('7')}
        />
        <Button
          label="8"
          variant="gray"
          onClick={() => handleNumberClick('8')}
        />
        <Button
          label="9"
          variant="gray"
          onClick={() => handleNumberClick('9')}
        />
        <Button
          label="*"
          variant="orange"
          onClick={() => handleSignClick('*')}
        />
      </KeyRow>

      <KeyRow>
        <Button
          label="4"
          variant="gray"
          onClick={() => handleNumberClick('4')}
        />
        <Button
          label="5"
          variant="gray"
          onClick={() => handleNumberClick('5')}
        />
        <Button
          label="6"
          variant="gray"
          onClick={() => handleNumberClick('6')}
        />
        <Button
          label="-"
          variant="orange"
          onClick={() => handleSignClick('-')}
        />
      </KeyRow>

      <KeyRow>
        <Button
          label="1"
          variant="gray"
          onClick={() => handleNumberClick('1')}
        />
        <Button
          label="2"
          variant="gray"
          onClick={() => handleNumberClick('2')}
        />
        <Button
          label="3"
          variant="gray"
          onClick={() => handleNumberClick('3')}
        />
        <Button
          label="+"
          variant="orange"
          onClick={() => handleSignClick('+')}
        />
      </KeyRow>
      <KeyRow>
        <Button
          label="0"
          variant="gray"
          isDouble
          onClick={() => handleNumberClick('0')}
        />
        <Button label="." variant="gray" onClick={() => handleDotClick()} />
        <Button label="=" variant="orange" onClick={handleEqualsClick} />
      </KeyRow>
    </KeyboardContainer>
  );
};
