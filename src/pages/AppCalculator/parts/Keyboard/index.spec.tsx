import { render } from '@testing-library/react';
import { Keyboard } from '.';

describe('Keyboard', () => {
  test('renders children correctly', () => {
    const children = <button>Button 1</button>;

    const { getByText } = render(<Keyboard>{children}</Keyboard>);

    const button = getByText('Button 1');
    expect(button).toBeInTheDocument();
  });
});
