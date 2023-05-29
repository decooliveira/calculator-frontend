import styled from 'styled-components';

export const SearchBarInput = styled.input`
  flex: 1;
  height: 2rem;

  border: 0;
  border-radius: 4px;
  background-color: ${(props) => props.theme.gray};
  color: ${(props) => props.theme.white};
`;
export const SearchBarWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.lightGray};
  border-radius: 8px;
  align-items: center;

  padding: 1rem;
`;
