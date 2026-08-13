// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NodeZenith title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NodeZenith/i);
    expect(titleElement).toBeInTheDocument();
});
