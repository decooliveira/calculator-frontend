import styled from 'styled-components';

export type ButtonVariant = 'gray' | 'lightGray' | 'orange';

interface ButtonContainerProps {
  variant?: ButtonVariant;
  isDouble?: boolean;
  buttonType?: 'numeric' | 'sign' | 'feature';
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  border: none;
  background-color: ${(props) =>
    props.buttonType === 'sign'
      ? props.theme.primary
      : props.buttonType === 'feature'
      ? props.theme.mediumGray
      : props.theme.darkGray};
  font-size: 1.5rem;
  color: ${(props) => props.theme.white};
  font-weight: bold;
  cursor: pointer;
  border-radius: 99px;
  outline: none;
  grid-column: ${(props) => (props.isDouble ? '1/3' : 0)};

  :hover {
    background-color: ${(props) => props.theme.lightGray};
  }
`;
