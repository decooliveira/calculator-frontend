import styled from 'styled-components';

interface BalanceProps {
  isCritical: boolean;
}
export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.gray};
  color: ${(props) => props.theme.white};
  font-weight: 700;
  margin: 0 3rem;

  a {
    color: ${(props) => props.theme.white};
    text-decoration: none;
    border: 0;

    :hover {
      color: ${(props) => props.theme.primary};
    }
  }

  span {
    margin: 0 0.5rem;
  }

  nav a {
    color: ${(props) => props.theme.white};

    margin: 0 0.5rem;

    &:hover {
      text-decoration: primary;
    }
  }
`;

interface LinkProps {
  active: boolean;
}
export const NavigationBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLink = styled.div`
  cursor: pointer;
  text-transform: uppercase;
  margin: 0.5rem 1rem 0.5rem 0.5rem;
`;

export const LinkWrapper = styled.div<LinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 0.5rem;
  color: ${(props) => (props.active ? props.theme.primary : props.theme.white)};

  :hover {
    color: ${(props) =>
      props.active ? props.theme.primary : props.theme.lightGray};
  }
`;
export const Balance = styled.span<BalanceProps>`
  font-size: 2rem;
  color: ${(props) =>
    props.isCritical ? props.theme.red500 : props.theme.primary};
`;
