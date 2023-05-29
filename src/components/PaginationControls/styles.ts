import styled from 'styled-components';

export const PageControlsContainer = styled.div`
  display: flex;
  flex: 1;
  margin-top: 2rem;
  padding: 1rem 0;
  border: 1px solid ${(props) => props.theme.lightGray};
  border-radius: 8px;
  align-items: center;
  justify-content: space-evenly;
`;

export const SelectOperation = styled.select`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme.gray};
  font-weight: 400;
  font-size: 1rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme.primary};
  &:focus {
    box-shadow: none;
    border: 1px solid ${(props) => props.theme.primary};
  }
`;

export const Checkbox = styled.input`
  -webkit-appearance: none;
  appearance: none;

  width: 1rem;
  height: 1rem;
  border-radius: 0.15rem;
  margin-right: 0.5rem;
  border: 0.15rem solid ${(props) => props.theme.lightGray};
  outline: none;
  cursor: pointer;

  :hover {
    border: 0.15rem solid ${(props) => props.theme.primary};
  }

  :checked {
    border: 0.15rem solid ${(props) => props.theme.primary};
    background-color: ${(props) => props.theme.primary};
  }
`;

export const SelectOperationOption = styled.option``;

export const FormButton = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.gray};
  font-weight: 400;
  border: 0;
  border-radius: 8px;
  padding: 0.25rem 0.5rem;

  :hover {
    background-color: ${(props) => props.theme.yellow};
  }
`;
