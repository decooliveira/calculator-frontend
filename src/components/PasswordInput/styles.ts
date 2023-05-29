import styled from 'styled-components';
import { LockSimple } from 'phosphor-react';
export const Password = styled.input`
  flex: 1;
  width: 20rem;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.gray};
  border: 0;
  ::placeholder {
    color: ${(props) => props.theme.white};
  }
`;

export const LockIcon = styled(LockSimple)`
  width: 2rem;
  height: 2rem;
`;
