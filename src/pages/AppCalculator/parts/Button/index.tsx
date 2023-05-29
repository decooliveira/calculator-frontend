/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { OperationTypes } from '../../../../@types/enum/OperationTypes';
import { ButtonContainer } from './styles';

export enum ButtonType {
  Numeric = 'numeric',
  Sign = 'sign',
  Feature = 'feature',
}
export interface ButtonSpecs {
  onClick: (e: any) => void;
  value: string | number;
  operationType?: OperationTypes;
  type?: ButtonType;
}

interface Props extends React.HTMLProps<HTMLButtonElement> {
  variant?: ButtonType;
}
export const Button = ({
  value,
  onClick,
  variant: buttonType = ButtonType.Numeric,
}: Props) => {
  return (
    <ButtonContainer
      onClick={onClick}
      isDouble={value == '0'}
      buttonType={buttonType}
    >
      {value}
    </ButtonContainer>
  );
};
