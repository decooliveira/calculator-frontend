import { render } from '@testing-library/react';
import { AppCalculator } from '.';

describe('AppCalculator', () => {
  it('renders without errors', () => {
    render(<AppCalculator />);
  });
});
