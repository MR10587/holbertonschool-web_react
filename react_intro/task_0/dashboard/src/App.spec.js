import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App", () => {
  it("renders the heading", () => {
    render(React.createElement(App));

    expect(
      screen.getByRole("heading", { name: /School dashboard/i }),
    ).toBeInTheDocument();
  });

  it("renders the body and footer text", () => {
    render(React.createElement(App));

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
    render(React.createElement(App));

    expect(screen.getByAltText("holberton logo")).toBeInTheDocument();
  });
});
