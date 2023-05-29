import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignupForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem;

  border-radius: 2px;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.primary};
  text-transform: uppercase;
`;

export const Error = styled.p`
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    width: 0.5rem;
    height: 1.5rem;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.red500};
  padding: 0 1rem;
  border-radius: 10px;
`;

export const NavLink = styled.a`
  color: ${(props) => props.theme.white};
  text-decoration: none;
  margin: 2rem 0 0 0;
  :hover {
    color: ${(props) => props.theme.primary};
  }
`;
