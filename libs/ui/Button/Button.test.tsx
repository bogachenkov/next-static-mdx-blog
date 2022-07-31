
import { render, screen } from '@testing-library/react';
import Button from "./Button";


describe('ui: Button', () => {
  it('should render `Hey` string', () => {
    render(<Button />);

    const button = screen.getByTestId('button');
    expect(button).toHaveTextContent('Hey!!!');
  });
});