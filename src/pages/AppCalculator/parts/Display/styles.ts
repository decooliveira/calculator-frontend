import styled from 'styled-components';

export const LCDDisplay = styled.input`
  display: flex;
  height: 6rem;
  width: 100%;
  margin-bottom: 10px;
  padding: 0 0.625rem;
  border-radius: 8px;
  border: none;
  align-items: center;
  justify-content: end;
  text-align: end;
  color: white;
  font-weight: 600;
  font-size: 1.5rem;
  background-color: ${(props) => props.theme.darkGray};
  box-sizing: border-box;
`;
