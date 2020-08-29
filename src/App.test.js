import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Main", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("비던열자");
  expect(linkElement).toBeInTheDocument();
});
