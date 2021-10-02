import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Test Calculator', () => {
  test('renders Calculator correctly', () => {
    const component = renderer.create(<Calculator />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

describe('Calculator', () => {
  test('Press one number response', () => {
    render(<Calculator />);
    const result = screen.getByRole('none');
    fireEvent.click(screen.getByText('1'));
    expect(result.innerHTML).toBe('1');
  });

  test('Press two numbers response', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    const result = screen.getByRole('none');
    expect(result.innerHTML).toBe('12');
  });
});
