import styled from 'styled-components';

type PaginationButtonProps = {
  active?: boolean;
};

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Summary = styled.div`
  display: flex;
  flex: 1;
  margin-top: 1rem;
  margin-right: 2rem;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
`;

export const Highlight = styled.span`
  color: ${(props) => props.theme.primary};
  margin: 0.5rem;
  font-weight: 400;
`;

export const PageButtonsBar = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const PaginationButton = styled.button<PaginationButtonProps>`
  background-color: ${(props) => props.theme.gray};
  color: ${(props) =>
    props.active ? props.theme.primary : props.theme.lightGray};
  padding: 0.5rem 1rem;
  font-size: ${(props) => (props.active ? '1.25rem' : '0.875rem')};
  border: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:not(:last-child) {
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: ${(props) => !props.disabled && props.theme.darkGray};
    color: ${(props) => props.theme.primary};
  }
`;

export const JumpWrapper = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: ${(props) => props.theme.white};
  margin-left: 1.5rem;
  span {
    padding: 0 0.5rem;
  }
  :hover {
    color: ${(props) => props.theme.primary};
  }
`;
