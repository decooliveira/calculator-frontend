import styled from "styled-components";

export type ButtonVariant = "gray" | "lightGray" | "orange";

interface ButtonContainerProps {
  variant: ButtonVariant;
  isDouble?: boolean;
}

const DOUBLE_BUTTON = {
  width: "9rem",
  borderRadius: "50px",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  background-color: ${(props) => props.theme[props.variant]};
  color: ${(props) => props.theme.white};

  height: 4rem;
  width: ${(props) => (props.isDouble ? DOUBLE_BUTTON.width : "4rem")};
  border-radius: ${(props) =>
    props.isDouble ? DOUBLE_BUTTON.borderRadius : '55%'};
  box-shadow: 0 0 1px 0 ${(props) => props.theme[props.variant]} inset, 0 0 1px 0 ${(props) => props.theme[props.variant]};
  border: none;
  margin: 0.3em;
  font-size: 2rem;
  font-family: 700;
  :hover {
    cursor: pointer; 
    opacity: 0.8;
    transition: opacity 0.2s;
  }
`;
