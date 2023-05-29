import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  gap: 1rem;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.white};
  margin: 0.5rem 0;
  width: 100%;
`;
