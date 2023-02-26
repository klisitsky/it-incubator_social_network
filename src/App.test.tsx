import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {addPost, changeMessageText, state} from "./state";




test('renders learn react link', () => {
  render(<App state={state}
              addPost={addPost}
              changeMessageText={changeMessageText}
  />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
