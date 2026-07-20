import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("h1 element with the text School Dashboard is rendered.", () => {
    expect(screen.getByText("School dashboard")).toBeInTheDocument();
  });

  it("renders the correct text in the body and footer paragraphs", () => {
    const bodyParagraph = screen.getByText(
      "Login to access the full dashboard",
    );

    const footerParagraph = screen.getByText(
      new RegExp(`Copyright ${new Date().getFullYear()} - holberton School`),
    );

    expect(bodyParagraph).toHaveTextContent(
      "Login to access the full dashboard",
    );

    expect(footerParagraph).toHaveTextContent(
      `Copyright ${new Date().getFullYear()} - holberton School`,
    );
  });

  it("image is rendered", () => {
    expect(screen.getByAltText("holberton logo")).toBeInTheDocument();
  });
});
