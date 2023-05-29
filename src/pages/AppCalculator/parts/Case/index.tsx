import { ReactNode } from 'react';
import { CaseContainer } from './styles';

interface CaseProps {
  children: ReactNode;
}

export const Case = ({ children }: CaseProps) => {
  return <CaseContainer>{children}</CaseContainer>;
};
