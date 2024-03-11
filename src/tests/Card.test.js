import { render, screen } from '@testing-library/react';
import Card from '../components/Card';
import { BrowserRouter as Router } from 'react-router-dom'; // If you're using react-router context

test('renders Card component', () => {
  render(
    <Router>
      <Card title="Test Title" description="Test Description" />
    </Router>
  );

  const titleElement = screen.getByText(/Test Title/i);
  expect(titleElement).toBeInTheDocument();

  const descriptionElement = screen.getByText(/Test Description/i);
  expect(descriptionElement).toBeInTheDocument();
});