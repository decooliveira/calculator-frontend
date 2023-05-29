import React from 'react';
import styled from 'styled-components';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  length: number;
}
export const Container = styled.main`
  display: flex;
  align-items: 0;
  justify-content: bottom;
  width: 100%;
  height: 8rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

export const Input = styled.input<InputProps>`
  width: 100%;
  flex: 1;
  justify-content: bottom;
  align-items: right;
  background-color: ${(props) => props.theme.black};
  border: 1px solid black;
  color: ${(props) => props.theme.white};
  padding: 0.5rem;
  text-align: end;
  font-size: ${(props) =>
    props.length > 10 ? (props.length > 15 ? '1.2rem' : '2rem') : '3.2rem'};
`;
