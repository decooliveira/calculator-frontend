import styled from 'styled-components';

export const Container = styled.main`
  background-color: ${(props) => props.theme.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 24rem;

  margin: 1rem auto;
  border-radius: 10px;

  padding: 2rem;
  margin-top: 4rem;
`;
