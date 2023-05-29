import { Envelope } from 'phosphor-react';
import styled from 'styled-components';
export const Username = styled.input`
  flex: 1;
  width: 20rem;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.gray};
  border: 0;
  :focus {
    border: none;
  }
  ::placeholder {
    color: ${(props) => props.theme.white};
  }
`;

export const EnvelopeIcon = styled(Envelope)`
  width: 2rem;
  height: 2rem;
`;

