import { render } from '@testing-library/react';
import { Case } from '.';

describe('Case', () => {
  test('renders children correctly', () => {
    const children = <div>Test Content</div>;

    const { getByText } = render(<Case>{children}</Case>);

    const content = getByText('Test Content');
    expect(content).toBeInTheDocument();
  });
});
