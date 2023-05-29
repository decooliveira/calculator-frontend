/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import { ReactNode, createContext, useState } from 'react';

export interface CalculatorContextType {
  num: string;
  result: number;
  operation: Operation;
  balance: number;
  handleBalance: (value: number) => void;
  handleOperation: (o: Operation) => void;
  clear: () => void;
}

export const CalculatorContext = createContext({} as CalculatorContextType);

interface CalculatorContextProviderProps {
  children: ReactNode;
}

interface Operation {
  sign: string;
  num: number | string;
  result: number;
}

export function CalculatorContextProvider({
  children,
}: CalculatorContextProviderProps) {
  const [num, setNum] = useState<string>('0');
  const [result, setResult] = useState<number>(0);
  const [operation, setOperation] = useState<Operation>({
    sign: '',
    num: 0,
    result: 0,
  });
  const [balance, setCredits] = useState<number>(0);

  function handleBalance(amount: number) {
    setCredits(amount);
  }

  function handleOperation(o: Operation): void {
    setOperation(o);
  }

  function clear() {
    setNum('0');
    setResult(0);
  }

  return (
    <CalculatorContext.Provider
      value={{
        num,
        result,
        operation,
        balance,
        handleBalance,
        handleOperation,
        clear,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}

export const useCalcContext = () => {
  return React.useContext(CalculatorContext);
};
