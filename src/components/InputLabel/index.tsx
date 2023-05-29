import { ReactNode } from 'react';
import { InputLabelContainer } from './styles';

interface Props {
  children: ReactNode;
}
export const InputLabel = ({ children }: Props) => {
  return <InputLabelContainer>{children}</InputLabelContainer>;
};
