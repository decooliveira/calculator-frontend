import { render } from '@testing-library/react';
import { Display } from '.';

describe('Display', () => {
  test('renders the value correctly', () => {
    const value = '123';

    const { getByDisplayValue } = render(<Display value={value} />);

    const display = getByDisplayValue(value);
    expect(display).toBeInTheDocument();
  });
});
