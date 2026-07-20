import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the heading", () => {
    render(<App />);

    expect(screen.getByText(/School dashboard/i)).toBeInTheDocument();
  });

  it("renders the correct body and footer text", () => {
    render(<App />);

    expect(
      screen.getByText("Login to access the full dashboard"),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        new RegExp(`Copyright ${new Date().getFullYear()} - holberton School`),
      ),
    ).toBeInTheDocument();
  });

  it("renders the logo image", () => {
    render(<App />);

    expect(screen.getByAltText("holberton logo")).toBeInTheDocument();
  });
});
