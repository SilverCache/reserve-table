import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("Renders the Header heading", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const headingElement = screen.getByText("Reserve Table");
  expect(headingElement).toBeInTheDocument();

  // Use 'link' role to target the anchor wrapping the button
  const reserveButton = screen.getByRole("link", { name: /reserve table/i });
  fireEvent.click(reserveButton);

  waitFor(() => {
    const headingElementNew = screen.getByText("Choose Date");
    expect(headingElementNew).toBeInTheDocument();
  });
});

