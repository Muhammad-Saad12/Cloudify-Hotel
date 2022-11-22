import { render, screen } from '@testing-library/react';
import App from './App';
import {HotelOwners} from './components/HotelOwners';

test('tests the hotel owner component', () => {
  render(<HotelOwners />);
  const linkElement = screen.getByTestId("testing");
  // expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveTextContent("Hotel Owner Table");
});
