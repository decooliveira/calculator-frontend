import styled from "styled-components";

export const InputNumberContainer = styled.input`
  width: 4rem;
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme.gray};
  font-weight: 400;
  font-size: 1rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme.primary};
  &:focus {
    box-shadow: none;
    border: 1px solid ${(props) => props.theme.primary};
  }
`;