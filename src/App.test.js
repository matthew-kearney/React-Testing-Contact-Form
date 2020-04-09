import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test("renders First Name", () => {
  const { getByText } = render(<App/>);
  const firstName = getByText(/first name/i);
  // fireEvent.change(firstNameInput, {target: {value: 'Matthew'}});
  expect(firstName).toBeInTheDocument();
})

test("renders Last Name", () => {
  const { getByText } = render(<App/>);
  const LastName = getByText(/last name/i);
  // fireEvent.change(lastNameInput, {target: {value: 'Kearney'}});
  expect(LastName).toBeInTheDocument();
  
})

test("renders Email", () => {
  const { getByText } = render(<App/>);
  const email = getByText(/email/i);
  // fireEvent.change(emailInput, {target: {value: 'matthew.kearney@gmail.com'} });
  expect(email).toBeInTheDocument();
})

test("renders Message", () => {
  const { getByText } = render(<App/>);
  const message = getByText(/message/i);
  // fireEvent.change(messageInput, {target: {value: 'hi'}});
  expect(message).toBeInTheDocument();
})