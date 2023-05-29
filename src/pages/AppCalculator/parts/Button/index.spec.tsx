import { render, fireEvent } from '@testing-library/react';
import { Button, ButtonType } from '.';

describe('Button', () => {
  test('renders button with numeric value', () => {
    const onClick = jest.fn();
    const value = 5;

    const { getByText } = render(
      <Button value={value} onClick={onClick} variant={ButtonType.Numeric} />
    );

    const button = getByText(String(value));
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('renders button with sign value', () => {
    const onClick = jest.fn();
    const value = '+';

    const { getByText } = render(
      <Button value={value} onClick={onClick} variant={ButtonType.Sign} />
    );

    const button = getByText(value);
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('renders button with feature value', () => {
    const onClick = jest.fn();
    const value = 'C';

    const { getByText } = render(
      <Button value={value} onClick={onClick} variant={ButtonType.Feature} />
    );

    const button = getByText(value);
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('applies correct variant styling', () => {
    const onClick = jest.fn();
    const value = '0';

    const { getByText, rerender } = render(
      <Button value={value} onClick={onClick} variant={ButtonType.Numeric} />
    );

    const button = getByText(value);
    expect(button).toHaveStyle('cursor: pointer');

    rerender(
      <Button value={value} onClick={onClick} variant={ButtonType.Sign} />
    );
    expect(button).toHaveStyle('font-weight: bold');

    rerender(
      <Button value={value} onClick={onClick} variant={ButtonType.Feature} />
    );
    expect(button).toHaveStyle('outline: none');
  });
});
