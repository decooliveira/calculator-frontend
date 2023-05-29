import React, { ReactNode } from 'react';
import { FormButton } from './styles';

interface Props extends React.HTMLProps<HTMLButtonElement> {
  children: ReactNode;
  onClick: () => void;
}

export const SubmitButton = ({ children, onClick }: Props) => {
  return <FormButton onClick={onClick}>{children}</FormButton>;
};
