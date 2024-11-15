import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

test('renders counter message', () => {
  render(<Counter />);
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  render(<Counter />);
  const zeroCount = screen.getByText(/0/);
  expect(zeroCount).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  render(<Counter />);
  const incrementButton = screen.getByText("+");
  fireEvent.click(incrementButton);
  
  const incrementedCount = screen.getByText(/1/);
  expect(incrementedCount).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  render(<Counter />);
  const decrementButton = screen.getByText("-");
  fireEvent.click(decrementButton);

  const decrementedCount = screen.getByText(/-1/);
  expect(decrementedCount).toBeInTheDocument();
});
