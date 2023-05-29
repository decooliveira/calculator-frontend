import { ReactNode } from 'react';
import { Wrapper } from './styles';

type Props = {
  children: ReactNode;
};

export const InputWrapper = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};
