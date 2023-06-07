/* eslint-disable prefer-const */
import { useState } from 'react';
import { OperationTypes } from '../../@types/enum/OperationTypes';
import { MathOperationRequest } from '../../@types/interfaces/MathOperationRequest';
import { Operation } from '../../@types/interfaces/Operation';
import { Button, ButtonSpecs, ButtonType } from './parts/Button';
import { Keyboard } from './parts/Keyboard';
import { Case } from './parts/Case';
import { Display } from './parts/Display';
import { OperationsService } from '../../utils/OperationsService';
import { useAuthContext } from '../../contexts/AuthContext';
import { useCalcContext } from '../../contexts/CalculatorContext';

export const AppCalculator = () => {
  const { user } = useAuthContext();
  const { handleBalance } = useCalcContext();

  const [operationData, setOperationData] = useState<Operation>({
    operation: '',
    val: 0,
    result: 0,
  });

  const removeSpaces = (num: number | string) =>
    num.toString().replace(/\s/g, '');

  const getOperation = (sign: string): OperationTypes => {
    switch (sign) {
      case '+':
        return OperationTypes.ADDITION;
      case '-':
        return OperationTypes.SUBTRACTION;
      case '*':
        return OperationTypes.MULTIPLICATION;
      case '/':
        return OperationTypes.DIVISION;
      case '√':
        return OperationTypes.SQUARE_ROOT;
      default:
        return OperationTypes.RANDOM_STRING;
    }
  };

  const generateRandomString = async (): Promise<string> => {
    const service: OperationsService = new OperationsService(user.token);
    const { result, balance } = await service.performStringOperations({
      operation: OperationTypes.RANDOM_STRING,
    });
    handleBalance(balance);
    return result;
  };

  const performOperation = async ({
    a,
    b,
    operation,
  }: {
    a: number;
    b: number;
    operation: string;
  }): Promise<number | string> => {
    const service: OperationsService = new OperationsService(user.token);
    let { result, balance } = await service.performMathOperations({
      a,
      b,
      operation: operation,
    });

    if (balance) {
      handleBalance(balance);
    }

    if (typeof result === 'number' && result > 999999999) {
      result = result.toExponential();
    }
    return result;
  };

  const math = async ({
    a,
    b,
    operation: sign,
  }: MathOperationRequest): Promise<number | string> => {
    const operation = getOperation(sign);
    return performOperation({ a, b, operation });
  };

  const handleNumberKeyClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if (value.length > 15) {
      return;
    }
    if (removeSpaces(operationData.val).length <= 15) {
      setOperationData({
        ...operationData,
        val:
          Number(operationData.val) % 1 === 0 &&
          !operationData.val.toString().includes('.')
            ? Number(operationData.val + value)
            : Number(operationData.val + value),
        result: !operationData.operation ? 0 : operationData.result,
      });
    }
  };

  const handleDotKeyClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.innerText;

    setOperationData({
      ...operationData,
      val: !operationData.val.toString().includes('.')
        ? String(operationData.val + value)
        : operationData.val,
    });
  };

  const handleSignKeyClick = async (e: React.ChangeEvent) => {
    setOperationData({
      ...operationData,
      operation: e.target.innerHTML,
      result: !operationData.val
        ? operationData.result
        : !operationData.result
        ? operationData.val
        : await math({
            a: Number(operationData.result),
            b: Number(operationData.val),
            operation: operationData.operation,
          }),

      val: 0,
    });
  };

  const handleEqualsKeyClick = async () => {
    console.log(operationData.operation);
    setOperationData({
      ...operationData,
      result: await math({
        a: Number(operationData.result),
        b: Number(operationData.val),
        operation: operationData.operation,
      }),
      operation: '',
      val: 0,
    });
  };

  const handleSquareRoot = async () => {
    //'√'
    let currentValue = operationData.val
      ? parseFloat(removeSpaces(operationData.val))
      : 0;

    if (!currentValue || currentValue === 0) {
      currentValue = Number(operationData.result);
    }

    setOperationData({
      ...operationData,
      val: 0,
      result: await math({
        a: Number(currentValue),
        b: Number(currentValue),
        operation: '√',
      }),
      operation: '√',
    });
  };

  const handleRandomString = async () => {
    const result = await generateRandomString();
    setOperationData({
      ...operationData,
      val: result,
      result: result,
      operation: 'S',
    });
  };
  const handleReset = (): void => {
    setOperationData({
      ...operationData,
      operation: '',
      val: 0,
      result: 0,
    });
  };

  const keys: ButtonSpecs[][] = [
    [
      { value: 'C', onClick: handleReset, type: ButtonType.Feature },
      { value: 'S', onClick: handleRandomString, type: ButtonType.Feature },
      {
        value: '√',
        onClick: handleSquareRoot,
        operationType: OperationTypes.SQUARE_ROOT,
        type: ButtonType.Sign,
      },
      {
        value: '/',
        onClick: handleSignKeyClick,
        operationType: OperationTypes.DIVISION,
        type: ButtonType.Sign,
      },
    ],
    [
      { value: 7, onClick: handleNumberKeyClick },
      { value: 8, onClick: handleNumberKeyClick },
      { value: 9, onClick: handleNumberKeyClick },
      {
        value: '*',
        onClick: handleSignKeyClick,
        operationType: OperationTypes.MULTIPLICATION,
        type: ButtonType.Sign,
      },
    ],
    [
      { value: 4, onClick: handleNumberKeyClick },
      { value: 5, onClick: handleNumberKeyClick },
      { value: 6, onClick: handleNumberKeyClick },
      {
        value: '-',
        onClick: handleSignKeyClick,
        operationType: OperationTypes.SUBTRACTION,
        type: ButtonType.Sign,
      },
    ],
    [
      { value: 1, onClick: handleNumberKeyClick },
      { value: 2, onClick: handleNumberKeyClick },
      { value: 3, onClick: handleNumberKeyClick },
      {
        value: '+',
        onClick: handleSignKeyClick,
        operationType: OperationTypes.ADDITION,
        type: ButtonType.Sign,
      },
    ],
    [
      { value: 0, onClick: handleNumberKeyClick },
      { value: '.', onClick: handleDotKeyClick },
      { value: '=', onClick: handleEqualsKeyClick, type: ButtonType.Sign },
    ],
  ];

  return (
    <Case>
      <Display
        value={operationData.val ? operationData.val : operationData.result}
      />
      <Keyboard>
        {keys.flat().map((k, i) => {
          return (
            <Button
              key={i}
              variant={k.type}
              value={k.value}
              onClick={(e) => k.onClick(e)}
            />
          );
        })}
      </Keyboard>
    </Case>
  );
};
