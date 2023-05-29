import styled from 'styled-components';
export const FormButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  margin: 0.5rem 0;
  width: 100%;
  height: 3.5rem;

  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.white};

  color: ${(props) => props.theme.white};
  font-size: 1rem;

  :hover {
    cursor: pointer;
  }
`;
