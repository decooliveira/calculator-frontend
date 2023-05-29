import { ReactNode } from 'react';
import { KeyboardContainer } from './styles';

interface KeyboardContainerProps {
  children: ReactNode;
}
export const Keyboard = ({ children }: KeyboardContainerProps) => {
  return <KeyboardContainer>{children}</KeyboardContainer>;
};
