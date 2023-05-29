import styled from 'styled-components';

export const InputLabelContainer = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: ${(props) => props.theme.white};

  span {
    padding: 0 0.5rem;
  }
  :hover {
    color: ${(props) => props.theme.primary};
  }
`;
