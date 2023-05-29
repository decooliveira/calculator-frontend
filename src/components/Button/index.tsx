import { ButtonContainer } from './styles';

interface ButtonProps {
  variant?: 'orange' | 'gray' | 'lightGray';
  label: string;
  isDouble?: boolean;
  onClick?: () => void;
}
export const Button = ({
  variant = 'gray',
  label,
  isDouble = false,
  onClick,
}: ButtonProps) => {
  return (
    <>
      <ButtonContainer variant={variant} isDouble={isDouble} onClick={onClick}>
        {label}
      </ButtonContainer>
    </>
  );
};
