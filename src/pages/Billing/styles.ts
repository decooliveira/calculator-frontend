import styled from 'styled-components';

export const Container = styled.main`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.primary};
    text-transform: uppercase;
  }
`;

export const SimpleWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.lightGray};
  border-radius: 8px;
  align-items: center;

  padding: 1rem;
`;

export const SimpleButton = styled.button`
  display: flex;
  gap: 0.5rem;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.gray};
  font-weight: 600;
  border: 0;
  border-radius: 8px;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  margin-left: 0.875rem;

  :hover {
    background-color: ${(props) => props.theme.yellow};
  }
  &.disabled {
    opacity: 0.8;
  }
`;
